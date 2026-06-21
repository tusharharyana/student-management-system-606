import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0F172A",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          onClick={() => navigate("/dashboard")}
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            fontWeight: "bold",

            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          SMS
        </Typography>

        <Button
          color="inherit"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
