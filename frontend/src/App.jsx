import { useState } from "react";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

function App() {
  // const [students, setStudents] = useState([]);
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");
  // const [course, setCourse] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const getStudents = async () => {
  //   const response = await fetch("http://localhost:8080/students");
  //   const data = await response.json();
  //   setStudents(data);
  // };
  // const getBCAStudents = async () => {
  //   const response = await fetch("http://localhost:8080/students/bca");
  //   const data = await response.json();
  //   setStudents(data);
  // };
  // const fetchTotalStudentCount = async () => {
  //   const response = await fetch("http://localhost:8080/students/count");
  //   const data = await response.json();
  //   setCount(data);
  // };
  // const addStudent = async () => {
  //   const response = await fetch("http://localhost:8080/students", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, course }),
  //   });
  //   if (response.ok) {
  //     alert("Student registered successfully!");
  //   } else {
  //     alert("Failed to register student.");
  //   }
  // };
  // const login = async () => {
  //   const response = await fetch("http://localhost:8080/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   });
  //   alert("Login Successful");
  // };
  // const loginWithGoogle = () => {
  //   window.location.href = "http://localhost:8080/oauth2/authorization/google";
  // };
  // return (
  //   <div style={{ padding: "40px" }}>
  //     <button onClick={getStudents}>Get Students</button>
  //     <button onClick={getBCAStudents}>Show BCA students</button>
  //     <ul>
  //       {students.map((student) => (
  //         <li key={student.id}>
  //           {student.name} - {student.course}
  //         </li>
  //       ))}
  //     </ul>
  //     <button onClick={fetchTotalStudentCount}>Get Total Student Count</button>
  //     <p>Total students: {count}</p>
  //     <h1>Student Registration Form</h1>
  //     <input
  //       type="text"
  //       placeholder="Name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <input
  //       type="text"
  //       placeholder="Course"
  //       value={course}
  //       onChange={(e) => setCourse(e.target.value)}
  //     />
  //     <button onClick={addStudent}>Register</button>
  //     <br></br>
  //     <br></br>
  //     <br></br>
  //     <input
  //       placeholder="Enter Username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //     />
  //     <input
  //       placeholder="Enter Password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />
  //     <button onClick={login}>Login</button>
  //     <button onClick={loginWithGoogle}>Login with Google</button>
  //   </div>
  // );

  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    const response = await fetch("http://localhost:8080/students");
    const data = await response.json();

    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Student Management System</h1>

      <StudentForm refreshStudents={fetchStudents} />

      <hr />

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          email={student.email}
        />
      ))}
    </div>
  );
}

export default App;
