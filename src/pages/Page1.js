import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="page-container">
            <main>
                <header>
                    <h1>Welcome to Page 1</h1>
                </header>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <section className="code-content">
                        <pre>
                            <code>{`import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_california_housing

# Step 1: Load the California Housing dataset
data = fetch_california_housing(as_frame=True)
housing_df = data.frame

# Step 2: Create histograms for numerical features
numerical_features = housing_df.select_dtypes(include=[np.number]).columns

# Plot histograms
plt.figure(figsize=(15, 10))
for i, feature in enumerate(numerical_features):
    plt.subplot(3, 3, i + 1)
    sns.histplot(housing_df[feature], kde=True, bins=30, color='blue')
    plt.title(f'Distribution of {feature}')
plt.tight_layout()`}</code>
                        </pre>
                    </section>
                )}
                <button 
                    onClick={() => navigate('/')}
                    className="nav-button"
                >
                    Back to Home
                </button>
            </main>
        </div>
    );
};

export default Page1;