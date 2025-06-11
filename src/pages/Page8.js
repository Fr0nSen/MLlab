import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page8 = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="page-container">
            <main>
                <header>
                    <h1>Welcome to Page 8</h1>
                </header>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <section className="code-content">
                        <pre>
                            <code>
{`import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC
from sklearn.datasets import make_moons
from sklearn.preprocessing import StandardScaler

# Generate dataset
X, y = make_moons(n_samples=100, noise=0.15, random_state=42)

# Scale the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Create and train SVM with different kernels
kernels = ['linear', 'poly', 'rbf']
fig, axes = plt.subplots(1, 3, figsize=(15, 4))

for ax, kernel in zip(axes, kernels):
    # Train SVM
    svm = SVC(kernel=kernel)
    svm.fit(X_scaled, y)
    
    # Create mesh grid
    x_min, x_max = X_scaled[:, 0].min() - 0.5, X_scaled[:, 0].max() + 0.5
    y_min, y_max = X_scaled[:, 1].min() - 0.5, X_scaled[:, 1].max() + 0.5
    xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.02),
                        np.arange(y_min, y_max, 0.02))
    
    # Plot decision boundary
    Z = svm.predict(np.c_[xx.ravel(), yy.ravel()])
    Z = Z.reshape(xx.shape)
    ax.contourf(xx, yy, Z, alpha=0.4)
    ax.scatter(X_scaled[:, 0], X_scaled[:, 1], c=y, alpha=0.8)
    ax.set_title(f'SVM with {kernel} kernel')

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

export default Page8;