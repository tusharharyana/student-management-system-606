import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { countStudents } from "../services/studentService";

function Dashboard() {
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    try {
      const response = await countStudents(token);

      setCount(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <h1>Dashboard</h1>

      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          width: "250px",
          marginBottom: "20px",
        }}
      >
        <h3>Total Students</h3>

        <h1>{count}</h1>
      </div>

      <button onClick={() => navigate("/students")}>Manage Students</button>
    </div>
  );
}

export default Dashboard;
