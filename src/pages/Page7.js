import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page7 = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="page-container">
            <main>
                <header>
                    <h1>Welcome to Page 7</h1>
                </header>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <section className="code-content">
                        <pre>
                            <code>
{`import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

# Generate sample data
np.random.seed(42)
X = 2 * np.random.rand(100, 1) - 1
y = 4 + 2 * X + X**2 + np.random.randn(100, 1) * 0.2

# Create models with different polynomial degrees
degrees = [1, 2, 3, 4]
plt.figure(figsize=(12, 8))

for i, degree in enumerate(degrees, 1):
    # Create polynomial regression model
    model = make_pipeline(PolynomialFeatures(degree), LinearRegression())
    model.fit(X, y)
    
    # Generate points for smooth curve
    X_test = np.linspace(-1, 1, 100).reshape(-1, 1)
    y_pred = model.predict(X_test)
    
    # Plot results
    plt.subplot(2, 2, i)
    plt.scatter(X, y, color='blue', alpha=0.5, label='Data points')
    plt.plot(X_test, y_pred, color='red', label=f'Degree {degree}')
    plt.title(f'Polynomial Regression (Degree {degree})')
    plt.xlabel('X')
    plt.ylabel('y')
    plt.legend()

plt.tight_layout()
plt.show()`}
                            </code>
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

export default Page7;