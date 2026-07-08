import React from "react";

function StudentList({ students, children }) {
  const count = students.length;

  // Approach 1: if...else statement
  let batchMessageIfElse = "";
  if (count === 0) {
    batchMessageIfElse = "No Students Found";
  } else if (count >= 1 && count <= 5) {
    batchMessageIfElse = "Small Batch";
  } else {
    batchMessageIfElse = "Large Batch";
  }

  // Approach 2: switch statement
  let batchMessageSwitch = "";
  switch (true) {
    case count === 0:
      batchMessageSwitch = "No Students Found";
      break;
    case count >= 1 && count <= 5:
      batchMessageSwitch = "Small Batch";
      break;
    default:
      batchMessageSwitch = "Large Batch";
  }

  //Approach 3: ternary operator
  const batchMessageTernary =
    count === 0
      ? "No Students Found"
      : count <= 5
      ? "Small Batch"
      : "Large Batch";

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{
        backgroundColor: "#e2e8f0",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px"
      }}>
        <h4 style={{ marginTop: 0 }}>Batch Classifications (Required Logic Checks):</h4>
        <p><strong>via If-Else:</strong> {batchMessageIfElse}</p>
        <p><strong>via Switch:</strong> {batchMessageSwitch}</p>
        <p><strong>via Ternary:</strong> {batchMessageTernary}</p>
      </div>

      {/* This renders whatever StudentCard elements are nested inside it from App.jsx */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "flex-start"
      }}>
        {children}
      </div>
    </div>
  );
}

export default StudentList;