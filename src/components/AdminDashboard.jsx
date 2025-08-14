import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";
import logo from "../assets/logo-principal.webp";

// Iconos locales
import iconInicio from "../assets/inicio.png";
import iconRooms from "../assets/habitaciones.png";
import iconCleaning from "../assets/limpieza.png";
import iconDaily from "../assets/corte.png";
import iconMenu from "../assets/menu.png";
import iconLogout from "../assets/logout.png";

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    onLogout();
    navigate("/admin-login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        {/* Logo intacto */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Botón toggle debajo del logo */}
        <div className="toggle-container">
          <button
            className="toggle-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <img src={iconMenu} alt="Menú" />
            {isSidebarOpen && <span>Ocultar menú</span>}
          </button>
        </div>

        {/* Menú de navegación */}
        <nav className="menu">
          <ul>
            <li>
              <NavLink to="/admin-dashboard" end>
                <img src={iconInicio} alt="Inicio" className="menu-icon" />
                <span>Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin-dashboard/admin-rooms">
                <img src={iconRooms} alt="Habitaciones" className="menu-icon" />
                <span>Reporte de habitaciones</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin-dashboard/admin-cleaning">
                <img src={iconCleaning} alt="Limpieza" className="menu-icon" />
                <span>Reporte de limpieza</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin-dashboard/admin-daily">
                <img src={iconDaily} alt="Corte diario" className="menu-icon" />
                <span>Corte diario</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Botón de cerrar sesión siempre visible abajo */}
        <div className="logout-container">
          <button className="logout-btn" onClick={handleLogout}>
            <img src={iconLogout} alt="Cerrar sesión" className="menu-icon" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
