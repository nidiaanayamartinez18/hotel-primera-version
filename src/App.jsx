// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Welcome from "./components/Welcome";
import AdminDashboard from "./components/AdminDashboard";

// Subpáginas del admin
import AdminHome from "./components/AdminHome";
import AdminRooms from "./components/AdminRooms";
import AdminCleaning from "./components/AdminCleaning";
import AdminDaily from "./components/AdminDaily";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {/* Redirige raíz a login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Pantalla de login normal */}
        <Route path="/login" element={<Login onLoginSuccess={setUser} />} />

        {/* Pantalla de login para administrador */}
        <Route path="/admin-login" element={<LoginAdmin onLoginSuccess={setUser} />} />

        {/* Pantalla de registro */}
        <Route path="/register" element={<Register />} />

        {/* Pantalla de recuperación de contraseña */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Pantalla de bienvenida protegida */}
        <Route
          path="/welcome"
          element={
            user ? <Welcome user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
          }
        />

        {/* Panel de administrador con subrutas protegidas */}
        <Route
          path="/admin-dashboard"
          element={
            user ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/admin-login" />
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="admin-rooms" element={<AdminRooms />} />
          <Route path="admin-cleaning" element={<AdminCleaning />} />
          <Route path="admin-daily" element={<AdminDaily />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;