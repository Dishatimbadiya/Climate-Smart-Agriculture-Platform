import pandas as pd
import numpy as np

try:
    # Define the number of rows for each crop
    num_rows_rice = 100  # Existing rice data
    num_rows_corn = 100  # New corn data

    # Generate random data for rice
    rice_data = {
        'N': np.random.randint(60, 100, size=num_rows_rice),
        'P': np.random.randint(30, 70, size=num_rows_rice),
        'K': np.random.randint(40, 80, size=num_rows_rice),
        'temperature': np.round(np.random.uniform(20, 30, size=num_rows_rice), 2),
        'humidity': np.round(np.random.uniform(60, 90, size=num_rows_rice), 2),
        'ph': np.round(np.random.uniform(5.5, 7.5, size=num_rows_rice), 2),
        'rainfall': np.round(np.random.uniform(150, 250, size=num_rows_rice), 2),
        'label': ['rice'] * num_rows_rice
    }

    # Generate random data for corn
    corn_data = {
        'N': np.random.randint(60, 120, size=num_rows_corn),
        'P': np.random.randint(30, 90, size=num_rows_corn),
        'K': np.random.randint(40, 100, size=num_rows_corn),
        'temperature': np.round(np.random.uniform(15, 35, size=num_rows_corn), 2),
        'humidity': np.round(np.random.uniform(50, 90, size=num_rows_corn), 2),
        'ph': np.round(np.random.uniform(5.5, 7.5, size=num_rows_corn), 2),
        'rainfall': np.round(np.random.uniform(100, 300, size=num_rows_corn), 2),
        'label': ['corn'] * num_rows_corn
    }

    # Create DataFrames
    rice_df = pd.DataFrame(rice_data)
    corn_df = pd.DataFrame(corn_data)

    # Save the corn dataset to CSV
    corn_df.to_csv('corn_dataset.csv', index=False)
    print("Corn dataset generated successfully and saved as 'corn_dataset.csv'!")

except Exception as e:
    print(f"An error occurred: {e}")
