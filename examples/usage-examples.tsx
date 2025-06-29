// Example of using the published react-loading-components package

import React, { useState, useEffect } from "react";
import {
  LoadingSpinner,
  PulseLoader,
  Skeleton,
  LoadingEpPiTi,
} from "react-loading-components";

// Example 1: Simple Loading State
function SimpleExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner showText={true} text="Loading data..." />
      ) : (
        <p>Data loaded successfully!</p>
      )}
    </div>
  );
}

// Example 2: Button with Loading State
function ButtonExample() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <button onClick={handleSubmit} disabled={loading}>
      {loading ? (
        <>
          <PulseLoader size={8} color="white" count={3} />
          <span style={{ marginLeft: 8 }}>Submitting...</span>
        </>
      ) : (
        "Submit Form"
      )}
    </button>
  );
}

// Example 3: Content with Skeleton Loading
function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "john@example.com",
        bio: "Software developer passionate about React and TypeScript.",
      });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "20px" }}>
        <Skeleton width={80} height={80} borderRadius="50%" />
        <div style={{ marginTop: "16px" }}>
          <Skeleton width="60%" height={24} />
          <Skeleton width="80%" height={16} />
          <Skeleton width="100%" height={16} />
          <Skeleton width="70%" height={16} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "#ddd",
          marginBottom: "16px",
        }}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
}

// Example 4: Custom Styled Components
function CustomStyledExample() {
  return (
    <div>
      {/* Large red spinner */}
      <LoadingSpinner size={60} color="#ff4757" thickness={6} speed={0.5} />

      {/* Green pulse loader */}
      <PulseLoader color="#2ed573" count={5} size={14} speed={1.2} />

      {/* 3D rotating loader with custom colors and text */}
      <LoadingEpPiTi
        size={1.5}
        colors={["#ff6b6b", "#4ecdc4", "#45b7d1"]}
        speed={0.5}
        showText={true}
        text="Loading Data..."
      />

      {/* Custom skeleton shapes */}
      <div style={{ marginTop: "20px" }}>
        <Skeleton width={200} height={200} borderRadius={12} />
        <Skeleton width="100%" height={8} borderRadius={4} />
        <Skeleton width="75%" height={8} borderRadius={4} />
      </div>
    </div>
  );
}

// Example 5: LoadingEpPiTi Variations
function EpPiTiExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Default styling */}
      <LoadingEpPiTi />

      {/* Small with custom colors */}
      <LoadingEpPiTi
        size={0.8}
        colors={["#e74c3c", "#f39c12", "#27ae60"]}
        showText={true}
        text="Processing..."
      />

      {/* Large with different speed */}
      <LoadingEpPiTi
        size={2}
        colors={["#9b59b6", "#3498db", "#1abc9c"]}
        speed={0.8}
        showText={true}
        text="Loading Application..."
      />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>React Loading Components Examples</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>Simple Loading</h2>
        <SimpleExample />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Button Loading</h2>
        <ButtonExample />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Skeleton Loading</h2>
        <UserProfile />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Custom Styled</h2>
        <CustomStyledExample />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>3D Rotating Loader</h2>
        <EpPiTiExample />
      </section>
    </div>
  );
}
