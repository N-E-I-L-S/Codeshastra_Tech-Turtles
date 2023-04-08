import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
from PIL import Image

# Load the 2D image
img = Image.open('im.jpg')

img = img.convert('L')
img_arr = np.array(img)

# Create a 3D figure
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Get the shape of the image
x, y = img_arr.shape
X, Y = np.meshgrid(np.arange(x), np.arange(y))

# Set the Z-axis data to the image data
Z = img_arr

# Plot the 3D image
ax.plot_surface(X, Y, Z, cmap='gray')

# Show the image
plt.show()
