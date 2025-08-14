import React, { useState, useEffect } from "react";
import "../styles/AdminCleaning.css";

function AdminCleaning() {
  const [fecha, setFecha] = useState(() => {
    // Fecha por defecto: hoy en formato yyyy-mm-dd
    const hoy = new Date();
    return hoy.toISOString().split("T")[0];
  });

  const [responsable, setResponsable] = useState("");
  const [habitaciones, setHabitaciones] = useState([]);
  const [reporteFinal, setReporteFinal] = useState({});

  // Simulación: cargar responsable desde la BD
  useEffect(() => {
    // fetch("/api/admin-profile").then(...)
    setResponsable("Glenda");
  }, []);

  // Simulación: cargar datos del reporte al cambiar la fecha
  useEffect(() => {
    // Aquí iría la llamada a tu backend:
    // fetch(`/api/cleaning-report?fecha=${fecha}`)
    //   .then(res => res.json())
    //   .then(data => { setHabitaciones(data.habitaciones); setReporteFinal(data.reporte); });

    // Simulación de datos
    const datosFicticios = [
      { numero: 101, status: "red" },
      { numero: 102, status: "orange" },
      { numero: 104, status: "blue" },
      { numero: 201, status: "darkblue" },
      { numero: 202, status: "lightblue" },
      { numero: 203, status: "orange" },
    ];

    const resumenFicticio = {
      rojos: 34,
      naranjas: 1,
      celestes: 0,
      azulOscuro: 0,
      azules: 37,
      morados: 0,
      amarillos: 0,
      rosas: 0,
      total: 72,
    };

    setHabitaciones(datosFicticios);
    setReporteFinal(resumenFicticio);
  }, [fecha]);

  return (
    <div className="cleaning-report-container">
      {/* Encabezado */}
      <header className="report-header">
        <h1 className="title">Reporte de limpieza</h1>
        <div className="report-info">
          <p><strong>Responsable:</strong> {responsable || "Cargando..."}</p>
          <label>
            <strong>Fecha:</strong>{" "}
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </label>
        </div>
      </header>

      <div className="report-body">
        {/* Tabla de habitaciones */}
        <table className="cleaning-table">
          <thead>
            <tr>
              <th>No de habitación</th>
              <th>Status</th>
              <th>R. Final</th>
              <th>Toallas</th>
            </tr>
          </thead>
          <tbody>
            {habitaciones.map((hab, index) => (
              <tr key={index}>
                <td>{hab.numero}</td>
                <td><span className={`status ${hab.status}`}></span></td>
                <td>-</td>
                <td>-</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Reporte final */}
        <div className="final-report">
          <h3>REPORTE FINAL</h3>
          <ul>
            <li><span className="dot red"></span> Cuartos sucios: {reporteFinal.rojos}</li>
            <li><span className="dot orange"></span> Cuartos ocupados sucios: {reporteFinal.naranjas}</li>
            <li><span className="dot lightblue"></span> Cuartos ocupados limpios: {reporteFinal.celestes}</li>
            <li><span className="dot darkblue"></span> Cuartos con ajuste: {reporteFinal.azulOscuro}</li>
            <li><span className="dot blue"></span> Total de cuartos limpios: {reporteFinal.azules}</li>
            <li><span className="dot purple"></span> Cuartos bloqueados: {reporteFinal.morados}</li>
            <li><span className="dot yellow"></span> Habitaciones vendidas: {reporteFinal.amarillos}</li>
            <li><span className="dot pink"></span> Habitaciones salida tarde: {reporteFinal.rosas}</li>
          </ul>
          <p className="total-rooms">Total de habitaciones: {reporteFinal.total}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminCleaning;