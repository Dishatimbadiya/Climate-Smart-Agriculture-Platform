from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load the saved model and scaler
try:
    with open('model.pkl', 'rb') as model_file:
        model = pickle.load(model_file)
    with open('scaler.pkl', 'rb') as scaler_file:
        scaler = pickle.load(scaler_file)
except Exception as e:
    raise RuntimeError(f"Error loading model or scaler: {e}")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.json
        features = [
            data['N'],
            data['P'],
            data['K'],
            data['temperature'],
            data['humidity'],
            data['ph'],
            data['rainfall']
        ]
        
        # Prepare the input data
        input_data = [features]
        input_data_scaled = scaler.transform(input_data)
        
        # Make prediction
        prediction = model.predict(input_data_scaled)
        
        # Return the result
        return jsonify({'predicted_crop': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
