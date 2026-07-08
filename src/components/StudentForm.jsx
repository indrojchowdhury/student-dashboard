import React, { useState } from "react";

function StudentForm({ onAddStudent }) {
  // Controlled form component states
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault(); // Requirement: Prevent full page refresh

    if (!name || !department || !cgpa) {
      alert("Please fill in all fields!");
      return;
    }

    // Structure our new student payload
    const newStudent = {
      id: Date.now(), // Generate a unique ID dynamically
      name,
      department,
      cgpa: parseFloat(cgpa),
      isActive,
    };

    onAddStudent(newStudent);

    // Reset Form Input states
    setName("");
    setDepartment("");
    setCgpa("");
    setIsActive(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "25px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
    }}>
      <h3 style={{ marginTop: 0 }}>Add New Student</h3>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", alignItems: "center" }}>
        <input 
          type="text" 
          placeholder="Student Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: 1 }}
        />
        <input 
          type="text" 
          placeholder="Department" 
          value={department} 
          onChange={(e) => setDepartment(e.target.value)} 
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: 1 }}
        />
        <input 
          type="number" 
          step="0.01" 
          placeholder="CGPA" 
          value={cgpa} 
          onChange={(e) => setCgpa(e.target.value)} 
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100px" }}
        />
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input 
            type="checkbox" 
            checked={isActive} 
            onChange={(e) => setIsActive(e.target.checked)} 
          />
          Active
        </label>
        <button type="submit" style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>Add Student</button>
      </div>
    </form>
  );
}

export default StudentForm;