import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginAdmin from "./components/LoginAdmin";
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
        {/* Redirige raíz al login de administrador */}
        <Route path="/" element={<Navigate to="/admin-login" />} />

        {/* Pantalla de login única (Administrador) */}
        <Route path="/admin-login" element={<LoginAdmin onLoginSuccess={setUser} />} />


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
