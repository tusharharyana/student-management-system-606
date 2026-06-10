import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const getStudents = async () => {
    const response = await fetch("http://localhost:8080/students");

    const data = await response.json();

    setStudents(data);
  };

  const getBCAStudents = async () => {
    const response = await fetch("http://localhost:8080/students/bca");
    const data = await response.json();

    setStudents(data);
  };

  const fetchTotalStudentCount = async () => {
    const response = await fetch("http://localhost:8080/students/count");
    const data = await response.json();
    setCount(data);
  };
  const addStudent = async () => {
    const response = await fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, course }),
    });

    if (response.ok) {
      alert("Student registered successfully!");
    } else {
      alert("Failed to register student.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={getStudents}>Get Students</button>

      <button onClick={getBCAStudents}>Show BCA students</button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>

      <button onClick={fetchTotalStudentCount}>Get Total Student Count</button>

      <p>Total students: {count}</p>

      <h1>Student Registration Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={addStudent}>Register</button>
    </div>
  );
}

export default App;
