import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  const addStudent = async () => {
    await fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        course,
        email,
      }),
    });
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />

      <br />
      <br />

      <input placeholder="Course" onChange={(e) => setCourse(e.target.value)} />

      <br />
      <br />

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <br />
      <br />

      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default StudentForm;
