import { useState } from "react";
import { LoadingSpinner, PulseLoader, Skeleton } from "./components";
import "./App.css";

function App() {
  const [spinnerSize, setSpinnerSize] = useState(40);
  const [spinnerColor, setSpinnerColor] = useState("#3b82f6");
  const [pulseCount, setPulseCount] = useState(3);
  const [showSkeletons, setShowSkeletons] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Loading Components</h1>
        <p>A collection of customizable loading components for React</p>
      </header>

      <main className="demo-container">
        {/* Loading Spinner Demo */}
        <section className="demo-section">
          <h2>Loading Spinner</h2>
          <div className="demo-component">
            <LoadingSpinner
              size={spinnerSize}
              color={spinnerColor}
              showText={true}
              text="Loading data..."
            />
          </div>
          <div className="controls">
            <label>
              Size: {spinnerSize}px
              <input
                type="range"
                min="20"
                max="80"
                value={spinnerSize}
                onChange={(e) => setSpinnerSize(Number(e.target.value))}
              />
            </label>
            <label>
              Color:
              <input
                type="color"
                value={spinnerColor}
                onChange={(e) => setSpinnerColor(e.target.value)}
              />
            </label>
          </div>
        </section>

        {/* Pulse Loader Demo */}
        <section className="demo-section">
          <h2>Pulse Loader</h2>
          <div className="demo-component">
            <PulseLoader count={pulseCount} color={spinnerColor} size={16} />
          </div>
          <div className="controls">
            <label>
              Dot Count: {pulseCount}
              <input
                type="range"
                min="1"
                max="7"
                value={pulseCount}
                onChange={(e) => setPulseCount(Number(e.target.value))}
              />
            </label>
          </div>
        </section>

        {/* Skeleton Demo */}
        <section className="demo-section">
          <h2>Skeleton Loader</h2>
          <div className="demo-component">
            <button
              onClick={() => setShowSkeletons(!showSkeletons)}
              className="toggle-btn"
            >
              {showSkeletons ? "Show Content" : "Show Skeletons"}
            </button>

            <div className="skeleton-demo">
              {showSkeletons ? (
                <>
                  <Skeleton width="60%" height={32} borderRadius={6} />
                  <Skeleton width="100%" height={16} />
                  <Skeleton width="100%" height={16} />
                  <Skeleton width="80%" height={16} />
                  <Skeleton width={150} height={40} borderRadius={8} />
                </>
              ) : (
                <>
                  <h3>Article Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <button className="content-btn">Read More</button>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Installation Instructions */}
        <section className="demo-section">
          <h2>Installation</h2>
          <div className="installation">
            <pre>
              <code>npm install react-loading-components</code>
            </pre>
            <pre>
              <code>yarn add react-loading-components</code>
            </pre>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="demo-section">
          <h2>Usage Examples</h2>
          <div className="code-examples">
            <h3>Basic Usage</h3>
            <pre>
              <code>{`import { LoadingSpinner, PulseLoader, Skeleton } from 'react-loading-components';

// Loading Spinner
<LoadingSpinner size={50} color="#ff6b6b" />

// Pulse Loader
<PulseLoader count={5} color="#10b981" />

// Skeleton
<Skeleton width="100%" height={24} />`}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
