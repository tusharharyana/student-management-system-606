import { useState, useEffect, useContext } from "react";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Paper,
  Box,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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
    <>
      <Navbar />

      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
          mb: 4,
        }}
      >
        {/* Welcome Section */}

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "#0F172A",
            mb: 1,
          }}
        >
          Welcome Admin 👋
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
          }}
        >
          Manage students, monitor records and maintain your institution
          efficiently.
        </Typography>

        {/* Statistics Cards */}

        <Grid container spacing={3}>
          {/* Total Students */}

          <Grid item xs={12} md={4}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                height: "100%",
              }}
            >
              <CardContent>
                <GroupsIcon
                  sx={{
                    fontSize: 50,
                    color: "#0F172A",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                  }}
                >
                  Total Students
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    color: "#0F172A",
                    fontWeight: "bold",
                  }}
                >
                  {count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Courses */}

          <Grid item xs={12} md={4}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                height: "100%",
              }}
            >
              <CardContent>
                <SchoolIcon
                  sx={{
                    fontSize: 50,
                    color: "#2563EB",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                  }}
                >
                  Courses
                </Typography>

                <Typography variant="h3" fontWeight="bold">
                  3
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Active Session */}

          <Grid item xs={12} md={4}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                height: "100%",
              }}
            >
              <CardContent>
                <DashboardIcon
                  sx={{
                    fontSize: 50,
                    color: "#16A34A",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                  }}
                >
                  Active Session
                </Typography>

                <Typography variant="h3" fontWeight="bold">
                  1
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Quick Actions */}

        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Quick Actions
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<PersonAddIcon />}
            sx={{
              backgroundColor: "#0F172A",

              "&:hover": {
                backgroundColor: "#1E293B",
              },
            }}
            onClick={() => navigate("/students")}
          >
            Manage Students
          </Button>
        </Box>

        {/* System Information */}

        <Paper
          elevation={3}
          sx={{
            mt: 5,
            p: 3,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            System Information
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Application:</strong> Student Management System
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Frontend:</strong> React + Material UI
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Backend:</strong> Spring Boot
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Database:</strong> MySQL
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Authentication:</strong> JWT
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default Dashboard;
