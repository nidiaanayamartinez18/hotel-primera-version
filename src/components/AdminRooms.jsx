import React from "react";
import "../styles/AdminRooms.css";

const AdminRooms = ({ fecha = "", habitaciones = [], leyendaColores = [] }) => {
  return (
    
    <div className="admin-rooms">
       <h1 className="title">Reporte de habitaciones</h1>
      <div className="top-bar">
        <button className="btn-filtrar">Filtrar fecha</button>
        <input type="date" defaultValue={fecha} />
      </div>

      <div className="main-content">
        <div className="tabla-wrapper">
          <table className="tabla-habitaciones">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Tipo habitación</th>
                <th colSpan="50">Habitaciones</th>
              </tr>
            </thead>
            <tbody>
              {habitaciones.map((hab, idx) => (
                <React.Fragment key={idx}>
                  <tr>
                    <td className="fecha">{idx === 0 ? fecha : ""}</td>
                    <td className="tipo">{hab.tipo}</td>
                    {hab.numeros.map((num, i) => (
                      <td key={i} className="num-habitacion">{num}</td>
                    ))}
                  </tr>
                  <tr>
                    <td></td>
                    <td className="status-label">Status</td>
                    {hab.status.map((st, i) => (
                      <td key={i}>
                        <div className={`cuadro status-${st}`}></div>
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="leyenda">
          {leyendaColores.map((item, idx) => (
            <div key={idx}>
              <span className={`cuadro status-${item.clase}`}></span> {item.texto}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminRooms;
