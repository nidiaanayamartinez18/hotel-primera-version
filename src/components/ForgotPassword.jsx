// Importación de React y el hook useState para manejo de estado
import React, { useState } from 'react';

// Importación del archivo de estilos para esta vista
import "../styles/ForgotPassword.css";

// Importación de imagen usada como logo en la pantalla
import logo from '../assets/contraseña.png';

// Componente funcional que representa la pantalla de recuperación de contraseña
function ForgotPassword() {
  // Estado para almacenar el correo ingresado por el usuario
  const [email, setEmail] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

    // Aquí podrías enviar el email al backend. Por ahora, solo se muestra un mensaje simulado.
    alert('Si el correo está registrado, recibirás un enlace de recuperación.');
  };

  return (
    // Contenedor general de la pantalla
    <div className="forgot-page">
      {/* Encabezado: logo + título + subtítulo */}
      <div className="forgot-header">
        <div className="forgot-logo">
          <img src={logo} alt="Logo" className="forgot-logo-img" />
        </div>
        <h2>Recuperar Contraseña</h2>
        <p className="forgot-subtitle">Ingresa tu correo para restablecer tu contraseña</p>
      </div>

      {/* Contenedor principal del formulario */}
      <div className="forgot-container">
        <div className="forgot-box">
          <form onSubmit={handleSubmit}>
            {/* Campo para ingresar el correo electrónico */}
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              className="forgot-input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con el valor ingresado
            />

            {/* Botón para enviar el formulario */}
            <button type="submit" className="forgot-button">
              Enviar enlace
            </button>

            {/* Opción para volver al login */}
            <div className="forgot-option">
              ¿Recordaste tu contraseña? <a href="/login">Inicia sesión</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Exporta el componente para que pueda usarse en otras partes de la app
export default ForgotPassword;
