import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { loginApi } from "../services/studentService";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginApi({
        username,
        password,
      });

      login(response.data);

      navigate("/dashboard");
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            textAlign="center"
            gutterBottom
            color="primary"
            fontWeight="bold"
          >
            Student Management System
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            gutterBottom
            fontWeight="bold"
            fontS
          >
            Login
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
