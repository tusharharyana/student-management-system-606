import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{student.name}</h3>
      <p>
        Email:
        {student.email}
      </p>
      <p>
        Course:
        {student.course}
      </p>
      <p>
        Age:
        {student.age}
      </p>
      <Link to={`/students/edit/${student.id}`}>Edit</Link>{" "}
      <button onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
}

export default StudentCard;
