// src/components/DashboardHome.jsx
import React from "react";
import "../styles/AdminHome.css";

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <h1 className="title">Panel de Administración</h1>

      {/* Tarjetas de estadísticas */}
      <div className="widgets">
        <div className="widget">
          <h2>Habitaciones ocupadas</h2>
          <div className="big-number">25</div>
        </div>
        <div className="widget">
          <h2>Habitaciones en limpieza</h2>
          <div className="big-number">5</div>
        </div>
        <div className="widget">
          <h2>Ingresos de hoy</h2>
          <div className="big-number">$1,200</div>
        </div>
      </div>

      {/* Tabla de actividades */}
      <div className="table-container">
        <h2>Actividades recientes</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Actividad</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/08/2025</td>
              <td>Check-in habitación 204</td>
              <td>Juan Pérez</td>
            </tr>
            <tr>
              <td>08/08/2025</td>
              <td>Reporte de limpieza habitación 105</td>
              <td>María López</td>
            </tr>
            <tr>
              <td>08/08/2025</td>
              <td>Corte diario realizado</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;