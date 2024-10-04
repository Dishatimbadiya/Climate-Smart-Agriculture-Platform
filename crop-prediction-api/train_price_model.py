import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestRegressor
import pickle

# Load crop price dataset
df = pd.read_csv('crop_price_dataset.csv')

# Initialize LabelEncoder
label_encoder = LabelEncoder()

# Encode crop names (assuming 'Commodity' contains crop names)
df['crop_encoded'] = label_encoder.fit_transform(df['Commodity'])

# Select features for price prediction (numerical features)
X = df[['crop_encoded', 'Year']]
y = df['Value'].replace({',': ''}, regex=True).astype(float)  # Clean and convert price values to float

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the numerical features
scaler_price = StandardScaler()
X_train_scaled = scaler_price.fit_transform(X_train)
X_test_scaled = scaler_price.transform(X_test)

# Train a RandomForest model for price prediction
price_model = RandomForestRegressor()
price_model.fit(X_train_scaled, y_train)

# Save the model and scalers
with open('price_model.pkl', 'wb') as f:
    pickle.dump(price_model, f)

with open('scaler_price.pkl', 'wb') as f:
    pickle.dump(scaler_price, f)

with open('label_encoder_price.pkl', 'wb') as f:
    pickle.dump(label_encoder, f)

print("Price prediction model trained and saved!")
