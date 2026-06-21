import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  getStudents,
  addStudent,
  deleteStudent,
  searchStudents,
  updateStudent,
} from "../services/studentService";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Students() {
  const { token } = useContext(AuthContext);

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getStudents(token);

      setStudents(response.data);
    } catch (error) {
      console.log(error);

      setMessage("Something went wrong");
      setSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSearch = async (value) => {
    setSearch(value);

    if (value === "") {
      fetchStudents();
      return;
    }

    try {
      const response = await searchStudents(token, value);

      setStudents(response.data);
    } catch (error) {
      console.log(error);

      setMessage("Something went wrong");
      setSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleAddStudent = async () => {
    try {
      await addStudent(token, {
        name,
        email,
        course,
        age,
      });

      setOpen(false);

      setName("");
      setEmail("");
      setCourse("");
      setAge("");

      fetchStudents();
      setMessage("Student Added Successfully");
      setSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.log(error);

      setMessage("Something went wrong");
      setSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleUpdateStudent = async () => {
    try {
      await updateStudent(token, selectedId, {
        name,
        email,
        course,
        age,
      });

      setEditOpen(false);

      fetchStudents();
      setMessage("Student Updated Successfully");
      setSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.log(error);

      setMessage("Something went wrong");
      setSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteStudent(token, deleteId);

      setDeleteOpen(false);

      fetchStudents();
      setMessage("Student Deleted Successfully");
      setSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.log(error);

      setMessage("Something went wrong");
      setSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* DIALOG BOX FOR ADD STUDENT */}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add New Student</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Course"
            margin="normal"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <TextField
            fullWidth
            type="number"
            label="Age"
            margin="normal"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0F172A",

              "&:hover": {
                backgroundColor: "#1E293B",
              },
            }}
            onClick={handleAddStudent}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* DIALOG BOX FOR UPDATE STUDENT */}

      <Dialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Update Student</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Course"
            margin="normal"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <TextField
            fullWidth
            type="number"
            label="Age"
            margin="normal"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0F172A",

              "&:hover": {
                backgroundColor: "#1E293B",
              },
            }}
            onClick={handleUpdateStudent}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* DIALOG BOX FOR DELETE STUDENT */}

      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Delete Student</DialogTitle>

        <DialogContent>
          <Typography>Are you sure you want to delete this student?</Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>

          <Button color="error" variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* SNACKBAR IS MESSAGE AFTER OPERATIONS LIKE ADD UPDATE DELETE */}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          severity={severity}
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
        >
          {message}
        </Alert>
      </Snackbar>

      {/* MAIN CONTENT */}

      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
        }}
      >
        {/* Header */}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "#0F172A",
              marginBottom: "12px",
              "&:hover": {
                backgroundColor: "#1E293B",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Add Student
          </Button>
        </Stack>

        {/* Search */}

        <TextField
          fullWidth
          label="Search Student By Name"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          sx={{
            mb: 3,
          }}
        />

        {/* Table */}

        <TableContainer
          component={Paper}
          elevation={3}
          sx={{
            borderRadius: 3,
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#F8FAFC",
                }}
              >
                <TableCell>
                  <strong>ID</strong>
                </TableCell>

                <TableCell>
                  <strong>Name</strong>
                </TableCell>

                <TableCell>
                  <strong>Email</strong>
                </TableCell>

                <TableCell>
                  <strong>Course</strong>
                </TableCell>

                <TableCell>
                  <strong>Age</strong>
                </TableCell>

                <TableCell>
                  <strong>Actions</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id} hover>
                  <TableCell>{student.id}</TableCell>

                  <TableCell>{student.name}</TableCell>

                  <TableCell>{student.email}</TableCell>

                  <TableCell>{student.course}</TableCell>

                  <TableCell>{student.age}</TableCell>

                  <TableCell>
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => {
                        setSelectedId(student.id);

                        setName(student.name);
                        setEmail(student.email);
                        setCourse(student.course);
                        setAge(student.age);

                        setEditOpen(true);
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        setDeleteId(student.id);

                        setDeleteOpen(true);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {students.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No Students Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Students;
