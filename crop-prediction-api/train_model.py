import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score, classification_report
import pickle

try:
    # Load the data from CSV
    data = pd.read_csv('Crop_recommendation.csv')
    
    # Print column names to verify
    print("Columns in the dataset:", data.columns)
    
    # Clean column names by stripping spaces
    data.columns = data.columns.str.strip()
    
    # Prepare features and target
    if 'label' not in data.columns:
        raise KeyError("'label' column not found in the dataset")
    
    X = data[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
    y = data['label']
    
    # Split the data into training and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Scale features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    

    # RandomForestClassifier
    # Train the model
    model = GaussianNB()
    model.fit(X_train_scaled, y_train)
    
    # Evaluate the model
    y_pred = model.predict(X_test_scaled)
    print(f'Accuracy: {accuracy_score(y_test, y_pred)}')
    print(f'Classification Report:\n{classification_report(y_test, y_pred)}')

    # Save the model and scaler
    with open('model.pkl', 'wb') as model_file:
        pickle.dump(model, model_file)
    print("Model saved.")
    
    with open('scaler.pkl', 'wb') as scaler_file:
        pickle.dump(scaler, scaler_file)
    print("Scaler saved.")
    
except Exception as e:
    print(f"An error occurred: {e}")
