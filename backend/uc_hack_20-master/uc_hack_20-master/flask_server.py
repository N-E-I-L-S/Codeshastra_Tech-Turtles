from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from img_proc import changeColor

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
@cross_origin()
def index():
    return "Hello, World!"

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    # Get the request JSON data
    data = request.get_json()

    # Extract the input parameters from the request data
    input_param1 = data['url']
    input_param2 = data['color']
    print(input_param1)
    print(input_param2)
    def hex_to_rgb(hex_code):
        # remove the # symbol, if present
        hex_code = hex_code.lstrip('#')
    
        # convert the hex code to RGB values
        red = int(hex_code[0:2], 16)
        green = int(hex_code[2:4], 16)
        blue = int(hex_code[4:6], 16)
    
        return (red, green, blue)
    color = hex_to_rgb(input_param2)
    changeColor('image44.jpg',(300, 100), [color[0], color[1], color[2]], None, input_param1)
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    # Create a JSON response with the output
    return jsonify({'result': 'success'})

if __name__ == '__main__':
    app.run(debug=True, port=8000)