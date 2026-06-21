import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import EditStudent from "../pages/EditStudent";

function AppRoutes() {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/" />}
      />

      <Route
        path="/students"
        element={token ? <Students /> : <Navigate to="/" />}
      />

      <Route
        path="/students/edit/:id"
        element={token ? <EditStudent /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default AppRoutes;
