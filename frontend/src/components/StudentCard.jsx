function StudentCard({ name, course }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h1>Welcome Dear</h1>
      <h2>This is Student Card</h2>
      <p>{name}</p>
      <p>{course}</p>
    </div>
  );
}

export default StudentCard;
