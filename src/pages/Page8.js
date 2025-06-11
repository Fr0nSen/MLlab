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
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn import tree

data = load_breast_cancer()
X = data.data
y = data.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
clf = DecisionTreeClassifier(random_state=42)
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")
new_sample = np.array([X_test[0]])
prediction = clf.predict(new_sample)

prediction_class = "Benign" if prediction == 1 else "Malignant"
print(f"Predicted Class for the new sample: {prediction_class}")

plt.figure(figsize=(12,8))
tree.plot_tree(clf, filled=True, feature_names=data.feature_names, class_names=data.target_names)
plt.title("Decision Tree - Breast Cancer Dataset")
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