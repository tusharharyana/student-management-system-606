import { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getStudentById, updateStudent } from "../services/studentService";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const response = await getStudentById(token, id);

    const student = response.data;

    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
    setAge(student.age);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateStudent(token, id, {
      name,
      email,
      course,
      age,
    });

    navigate("/students");
  };

  return (
    <div>
      <h1>Edit Student</h1>

      <form onSubmit={handleUpdate}>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <br />

        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <br />

        <input value={course} onChange={(e) => setCourse(e.target.value)} />

        <br />

        <input value={age} onChange={(e) => setAge(e.target.value)} />

        <br />

        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
