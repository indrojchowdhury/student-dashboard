import { useState } from "react";
import { initialStudents } from "./data/students";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentCard from "./components/StudentCard";
import ErrorBoundary from "./components/ErrorFallback"; // Import the boundary[cite: 1]

function App() {
  const [students, setStudents] = useState(initialStudents);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Navbar totalStudents={students.length} />
      <StudentForm onAddStudent={handleAddStudent} />
      
      <StudentList students={students}>
        {students.map((student) => (
          // Wrap each card in an individual boundary container[cite: 1]
          <ErrorBoundary key={student.id}>
            <StudentCard 
              student={student} 
              onDeleteStudent={handleDeleteStudent} 
            />
          </ErrorBoundary>
        ))}
      </StudentList>
    </div>
  );
}

export default App;