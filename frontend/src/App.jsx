import { useState } from "react";

function App() {

  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);

  const getStudents = async () => {

    const response = await fetch(
      "http://localhost:8080/students"
    );

    const data = await response.json();

    setStudents(data);
  };

  const getBCAStudents = async () => {

    const response = await fetch( "http://localhost:8080/students/bca");
    const data = await response.json();

    setStudents(data);
  };


  const fetchTotalStudentCount = async () => {
    const response = await fetch("http://localhost:8080/students/count");
    const data = await response.json();
    setCount(data);
  };

  return (
    <div style={{ padding: "40px" }}>

      <button onClick={getStudents}>
        Get Students
      </button>

      <button onClick={getBCAStudents}>
         Show BCA students
      </button>

      <ul>
        {students.map(student => (
          <li key={student.id}>
              {student.name} - {student.course}
          </li>
        ))}
      </ul>


      <button onClick={fetchTotalStudentCount}>
        Get Total Student Count
      </button>

      <p>Total students: {count}</p>

    </div>
  );
}

export default App;