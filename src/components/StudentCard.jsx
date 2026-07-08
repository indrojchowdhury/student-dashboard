import React, { useState } from "react";

function StudentCard({ student, onDeleteStudent }) {
  const { id, name, department, cgpa, isActive } = student;
  const [shouldCrash, setShouldCrash] = useState(false);

  // Intentional Crash Mechanism for testing Part 10
  if (shouldCrash) {
    throw new Error("Intentional Student Card Crash!");
  }

  const renderStatusWithIIFE = (() => {
    if (isActive) {
      return <span style={{ color: "green", fontWeight: "bold" }}>Active (IIFE)</span>;
    } else {
      return <span style={{ color: "red", fontWeight: "bold" }}>Inactive (IIFE)</span>;
    }
  })();

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      width: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>{name}</h3>
          {/* Small button to let the examiner test the error boundary */}
          <button 
            onClick={() => setShouldCrash(true)} 
            style={{ fontSize: "10px", backgroundColor: "#ddd", border: "none", borderRadius: "3px", cursor: "pointer" }}
            title="Simulate Crash"
          >
            💥
          </button>
        </div>
        
        <p style={{ margin: "5px 0" }}><strong>Department:</strong> {department}</p>
        <p style={{ margin: "5px 0" }}><strong>CGPA:</strong> {cgpa}</p>
        
        <hr style={{ borderTop: "1px dashed #ccc", margin: "10px 0" }} />

        <div style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
          <div>
            <strong>Status (Ternary):</strong> {isActive ? <span style={{ color: "green" }}>Active</span> : <span style={{ color: "red" }}>Inactive</span>}
          </div>
          <div>
            <strong>Status (&&):</strong> {isActive && <span style={{ color: "green" }}>Active</span>}
            {!isActive && <span style={{ color: "red" }}>Inactive</span>}
          </div>
          <div>
            <strong>Status (IIFE):</strong> {renderStatusWithIIFE}
          </div>
        </div>
      </div>

      <button 
        onClick={() => onDeleteStudent(id)}
        style={{
          marginTop: "15px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          width: "100%",
          fontWeight: "bold"
        }}
      >
        Delete Student
      </button>
    </div>
  );
}

export default StudentCard;