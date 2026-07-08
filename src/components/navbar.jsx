import React from "react";

function Navbar({ totalStudents }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#282c34",
      color: "white",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
      <h2 style={{ margin: 0 }}>Student Dashboard</h2>
      <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Total Students: <span style={{ color: "#61dafb" }}>{totalStudents}</span>
      </div>
    </nav>
  );
}

export default Navbar;