import cv2
import numpy as np
from matplotlib import pyplot as plt
from datetime import datetime
import webcolors
import random
import math
from PIL import Image
import pickle
import pandas as pd
import urllib.request
import os
from sklearn.preprocessing import LabelEncoder

model = pickle.load(open('model1.pkl', 'rb'))
df = pd.read_csv('aakhri1.csv')
#ye main function mei run hoga hi hoga
#file directory se model1.pkl aur aakhri1.csv lena 

#idhar tak
def get_colors(image_path, num_colors):
    # Open the image and resize it to speed up processing
    
    image = Image.open(image_path)
    image = image.resize((200, 200))

    # Get the colors from the image
    colors = image.getcolors(200 * 200)
    colors = sorted(colors, key=lambda t: t[0], reverse=True)

    # Get the dominant colors
    dominant_colors = [colors[0][1]]
    for count, color in colors[1:]:
        if len(dominant_colors) >= num_colors:
            break
        distinct = True
        for dc in dominant_colors:
            distance = math.sqrt(sum([(c1 - c2) ** 2 for c1, c2 in zip(color, dc)]))
            if distance < 50:  # set a threshold for how similar colors can be
                distinct = False
                break
        if distinct:
            dominant_colors.append(color)

    # Remove any similar colors from the dominant color list
    i = 0
    while i < len(dominant_colors):
        color1 = dominant_colors[i]
        j = i + 1
        while j < len(dominant_colors):
            color2 = dominant_colors[j]
            distance = math.sqrt(sum([(c1 - c2) ** 2 for c1, c2 in zip(color1, color2)]))
            if distance < 100:  # set a threshold for how similar colors can be
                dominant_colors.pop(j)
            else:
                j += 1
        i += 1

    # Convert the RGB tuples to hexadecimal values
    dominant_colors_hex = []
    for color in dominant_colors:
        hex_value = '#{:02x}{:02x}{:02x}'.format(*color)
        dominant_colors_hex.append(hex_value)

    return dominant_colors_hex[:4]

def readImage(img_name,url):
    req = urllib.request.urlopen(url)
    arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
    img = cv2.imdecode(arr, -1)
    cv2.imwrite(os.path.join('./public/images/',"image46.jpg"), img)


    img = cv2.imread('./public/images/' + img_name)
    return cv2.cvtColor(img, cv2.COLOR_BGR2RGB)




def resizeAndPad(img, size, pad_color=0):

    h, w = img.shape[:2]
    sh, sw = size

    # interpolation method
    if h > sh or w > sw: # shrinking image
        interp = cv2.INTER_AREA
    else: # stretching image
        interp = cv2.INTER_CUBIC

    # aspect ratio of image
    aspect = w/h  # if on Python 2, you might need to cast as a float: float(w)/h

    # compute scaling and pad sizing
    if aspect > 1: # horizontal image
        new_w = sw
        new_h = np.round(new_w/aspect).astype(int)
        pad_vert = (sh-new_h)/2
        pad_top, pad_bot = np.floor(pad_vert).astype(int), np.ceil(pad_vert).astype(int)
        pad_left, pad_right = 0, 0
    elif aspect < 1: # vertical image
        new_h = sh
        new_w = np.round(new_h*aspect).astype(int)
        pad_horz = (sw-new_w)/2
        pad_left, pad_right = np.floor(pad_horz).astype(int), np.ceil(pad_horz).astype(int)
        pad_top, pad_bot = 0, 0
    else: # square image
        new_h, new_w = sh, sw
        pad_left, pad_right, pad_top, pad_bot = 0, 0, 0, 0

    # set pad color
    if len(img.shape) == 3 and not isinstance(pad_color, (list, tuple, np.ndarray)): # color image but only one color provided
        pad_color = [pad_color]*3

    # scale and pad
    scaled_img = cv2.resize(img, (new_w, new_h), interpolation=interp)
    scaled_img = cv2.copyMakeBorder(scaled_img, pad_top, pad_bot, pad_left, pad_right, borderType=cv2.BORDER_CONSTANT, value=pad_color)

    return scaled_img


def getOutlineImg(img):
    # img = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
    # clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    # img = clahe.apply(img)
    # img = cv2.equalizeHist(img)
    return cv2.Canny(img,50,200)  # todo: can be optimised later


def getColoredImage(img, new_color, pattern_image):

    hsv_image = cv2.cvtColor(img, cv2.COLOR_RGB2HSV)
    h, s, v = cv2.split(hsv_image)
    new_hsv_image = hsv_image

    if new_color is not None:
        color = np.uint8([[new_color]])
        hsv_color = cv2.cvtColor(color, cv2.COLOR_RGB2HSV)
        h.fill(hsv_color[0][0][0])  # todo: optimise to handle black/white walls
        s.fill(hsv_color[0][0][1])
        new_hsv_image = cv2.merge([h, s, v])

    else:
        pattern = cv2.imread('./public/patterns/' + pattern_image)
        hsv_pattern = cv2.cvtColor(pattern, cv2.COLOR_BGR2HSV)
        hp, sp, vp = cv2.split(hsv_pattern)
        # cv2.add(vp, v, vp)
        new_hsv_image = cv2.merge([hp, sp, v])

    new_rgb_image = cv2.cvtColor(new_hsv_image, cv2.COLOR_HSV2RGB)
    return new_rgb_image


def selectWall(outline_img, position):
    h, w = outline_img.shape[:2]
    wall = outline_img.copy()
    scaled_mask = resizeAndPad(outline_img, (h+2,w+2), 255)
    cv2.floodFill(wall, scaled_mask, position, 255)   # todo: can be optimised later
    cv2.subtract(wall, outline_img, wall) 
    return wall


def mergeImages(img, colored_image, wall):
    colored_image = cv2.bitwise_and(colored_image, colored_image, mask=wall)
    marked_img = cv2.bitwise_and(img, img, mask=cv2.bitwise_not(wall))
    final_img = cv2.bitwise_xor(colored_image, marked_img)
    return final_img


def saveImage(img_name, img):
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    cv2.imwrite( "./public/edited/" + img_name, img)


def showImages(original_img, colored_image, selected_wall, final_img):
    plt.subplot(221),plt.imshow(original_img, cmap = 'gray')
    plt.title('Original Image'), plt.xticks([]), plt.yticks([])
    plt.subplot(222),plt.imshow(colored_image, cmap = 'gray')
    plt.title('Colored Image'), plt.xticks([]), plt.yticks([])
    plt.subplot(223),plt.imshow(selected_wall, cmap = 'gray')
    plt.title('Selected Wall'), plt.xticks([]), plt.yticks([])
    plt.subplot(224),plt.imshow(final_img, cmap = 'gray')
    plt.title('Final Image'), plt.xticks([]), plt.yticks([])
    plt.show()


def changeColor(image_name, position, new_color, url):
    readImage('image46.jpg',url)
    # 'https://firebasestorage.googleapis.com/v0/b/codeshastra-tech-turtles.appspot.com/o/files%2Fadorable-living-room-ideas-with-unique-curved-sectional-sofas-in-grey-with-colorful-cushions-and-ottoman-coffee-table-and-unique-sideboard-and-armchair.jpg?alt=media&token=a7a7f978-7959-4b72-9fcb-34b384ef0651'
    start = datetime.timestamp(datetime.now())
    img = readImage(image_name)
    original_img = img.copy()

    colored_image = getColoredImage(img, new_color)

    outline_img = getOutlineImg(img)
    original_outline_img = outline_img.copy()

    selected_wall = selectWall(outline_img, position)
    
    final_img = mergeImages(img, colored_image, selected_wall)
    
    end = start = datetime.timestamp(datetime.now())
    print (end-start)
    saveImage(image_name, final_img)

def hex_to_rgb(hex_code):
    """Converts a hexadecimal color code to RGB values"""
    hex_code = hex_code.lstrip('#')  # remove '#' symbol if present
    return list(int(hex_code[i:i+2], 16) for i in (0, 2, 4))

def predict():
    le1 = LabelEncoder()
    le2 = LabelEncoder()
    le3 = LabelEncoder()
    le4 = LabelEncoder()
    le1.fit(df['color 1'].tolist())
    le2.fit(df['color 2'].tolist())
    le3.fit(df['color 3'].tolist())
    le4.fit(df['color 4'].tolist())
    dom_colors = get_colors(f'public/images/image46.jpg', 20)
    attr = dom_colors[1:]
    while(len(attr) < 3):
        attr.append('')
    attr1 = []
    attr2 = []
    attr3 = []
    attr1.append(attr[0])
    attr2.append(attr[1])
    attr3.append(attr[2])
    col2 = le2.transform(attr1)
    col3 = le3.transform(attr2)
    col4 = le4.transform(attr3)
    input_img = []
    input_img.append(col2[0])
    input_img.append(col3[0])
    input_img.append(col4[0])
    pred = []
    pred.append(input_img)
    predict = model.predict(pred)
    predicted_value = le1.inverse_transform(predict)
    rgb_list = hex_to_rgb(predicted_value[0])
    return rgb_list




# print(attr1)
# print("Chal rha hai idhar tak")


#url="https://firebasestorage.googleapis.com/v0/b/codeshastra-tech-turtles.appspot.com/o/files%2Fadorable-living-room-ideas-with-unique-curved-sectional-sofas-in-grey-with-colorful-cushions-and-ottoman-coffee-table-and-unique-sideboard-and-armchair.jpg?alt=media&token=a7a7f978-7959-4b72-9fcb-34b384ef0651"
#path = 'image44.jpg'
# changeColor('img3.jpg', (300, 100), [105, 149, 173], None)
changeColor('image46.jpg', (300, 100),predict(), 'https://firebasestorage.googleapis.com/v0/b/codeshastra-tech-turtles.appspot.com/o/files%2Fadorable-living-room-ideas-with-unique-curved-sectional-sofas-in-grey-with-colorful-cushions-and-ottoman-coffee-table-and-unique-sideboard-and-armchair.jpg?alt=media&token=a7a7f978-7959-4b72-9fcb-34b384ef0651')