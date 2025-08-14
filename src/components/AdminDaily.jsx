// src/components/AdminDaily.jsx
import React from "react";

const AdminDaily = () => {
  return (
    <>
      <h1 className="title">Corte Diario</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Ingresos</th>
              <th>Gastos</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/08/2025</td>
              <td>$1,200</td>
              <td>$300</td>
              <td>$900</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDaily;
