# Student Dashboard Application

A dynamic React + Vite application built to manage a database of students. This project demonstrates core React concepts including state management, conditional rendering, controlled forms, component composition, and error handling.

## Features Implemented
- **Lifting State Up**: Main student list state is managed in `App.jsx` and passed down via props.
- **Dynamic Navbar**: Displays the total count of students in real-time.
- **Conditional Rendering**: Implements and visualizes 3 separate JSX approaches (Ternary, Logical `&&`, and IIFE) for status monitoring, and 3 control flows (if...else, switch, ternary) for batch sizing classifications.
- **Controlled Forms**: Intercepts form submit payloads with `preventDefault()` to add students smoothly without page refreshes.
- **Component Composition**: Uses the `<StudentList>` wrapper to pass student cards dynamically via the `children` prop.
- **Error Boundaries**: Catches component runtime exceptions within `StudentCard` and serves an isolated Fallback UI.

## Project Structure
```text
student-dashboard/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ErrorFallback.jsx
│   │   ├── Navbar.jsx
│   │   ├── StudentCard.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentList.jsx
│   ├── data/
│   │   └── students.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
