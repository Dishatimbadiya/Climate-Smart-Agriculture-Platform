from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the saved models and scalers
try:
    with open('model.pkl', 'rb') as model_file:
        crop_model = pickle.load(model_file)
    with open('scaler.pkl', 'rb') as scaler_file:
        scaler = pickle.load(scaler_file)
    with open('price_model.pkl', 'rb') as price_model_file:
        price_model = pickle.load(price_model_file)
    with open('scaler_price.pkl', 'rb') as scaler_price_file:
        scaler_price = pickle.load(scaler_price_file)
    with open('label_encoder.pkl', 'rb') as label_encoder_file:
        label_encoder = pickle.load(label_encoder_file)
except Exception as e:
    raise RuntimeError(f"Error loading models or scalers: {e}")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.json
        print(f"Incoming data: {data}")  # Log incoming data

        features = [
            data['N'],
            data['P'],
            data['K'],
            data['temperature'],
            data['humidity'],
            data['ph'],
            data['rainfall']
        ]
        
        # Prepare input data for crop prediction
        input_data = [features]
        input_data_scaled = scaler.transform(input_data)
        
        # Make crop prediction
        predicted_crop_encoded = crop_model.predict(input_data_scaled)[0]
        predicted_crop = label_encoder.inverse_transform([predicted_crop_encoded])[0]

        # Prepare input data for price prediction
        year = 2024
        crop_encoded = label_encoder.transform([predicted_crop])[0]
        
        price_features = [[crop_encoded, year]]  # Adjust this as needed
        price_features_scaled = scaler_price.transform(price_features)
        
        # Make price prediction
        predicted_price = price_model.predict(price_features_scaled)[0]

        print(f"Crop prediction: {predicted_crop}, Price prediction: {predicted_price}")
        
        # Return the result
        return jsonify({
            'predicted_crop': predicted_crop,
            'predicted_price': predicted_price
        })
    except Exception as e:
        print(f"Error occurred: {e}")  # Log error
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=4000)
