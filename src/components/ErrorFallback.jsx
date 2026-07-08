import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Requirement: Fallback UI text
      return (
        <div style={{
          padding: "20px",
          margin: "10px",
          border: "2px dashed #f44336",
          borderRadius: "8px",
          backgroundColor: "#ffebee",
          color: "#c62828",
          textAlign: "center"
        }}>
          <h3>Something went wrong.</h3>
          <p>Please reload the application.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;