import { useEffect, useState, useContext } from "react";

import Navbar from "../components/Navbar";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";

import {
  getStudents,
  addStudent,
  deleteStudent,
  searchStudents,
} from "../services/studentService";

import { AuthContext } from "../context/AuthContext";

function Students() {
  const { token } = useContext(AuthContext);

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents(token);

    setStudents(response.data);
  };

  const handleAdd = async (student) => {
    await addStudent(token, student);

    fetchStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(token, id);

    fetchStudents();
  };

  const handleSearch = async (value) => {
    setSearch(value);

    if (value === "") {
      fetchStudents();

      return;
    }

    const response = await searchStudents(token, value);

    setStudents(response.data);
  };

  return (
    <div>
      <Navbar />

      <h1>Students</h1>

      <StudentForm onSubmit={handleAdd} />

      <hr />

      <input
        placeholder="Search Student"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <hr />

      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Students;
