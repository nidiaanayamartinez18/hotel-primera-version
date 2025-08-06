// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Welcome from "./components/Welcome";

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

        {/* Pantalla de login */}
        <Route path="/login" element={<Login onLoginSuccess={setUser} />} />

        {/* Pantalla de registro */}
        <Route path="/register" element={<Register />} />

        {/* Pantalla de recuperación de contraseña */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Pantalla de bienvenida protegida */}
        <Route
          path="/welcome"
          element={
            user ? (
              <Welcome user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

