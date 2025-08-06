// Importa React y el hook useState para manejar el estado local del componente
import React, { useState } from 'react';

// Importa el archivo CSS con los estilos de este componente
import "../styles/Register.css";

// Importa los recursos gráficos usados en el formulario
import logo from '../assets/agregar-usuario.png';
import eyeOpen from '../assets/eye-open.png';
import eyeClosed from '../assets/eye-closed.png';

// Componente funcional principal
function Register() {
  // Estado del formulario con campos controlados (name, email, password y confirmPassword)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Estados para alternar la visibilidad de las contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    // Actualiza el estado del formulario según el nombre del input que cambió
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el recargo de la página
    // Validación: Verifica si las contraseñas coinciden
    if (form.password !== form.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // En una app real se enviaría a un backend, aquí solo se simula
    alert('Cuenta creada exitosamente (simulación)');
  };

  return (
    // Contenedor general de la página de registro
    <div className="register-page">
      {/* Encabezado con logo e instrucciones */}
      <div className="register-header">
        <div className="register-logo">
          <img src={logo} alt="Logo" className="register-logo-img" />
        </div>
        <h2>Crear Cuenta</h2>
        <p className="register-subtitle">Regístrate para comenzar a usar el sistema</p>
      </div>

      {/* Contenedor principal del formulario */}
      <div className="register-container">
        <div className="register-box">
          <form onSubmit={handleSubmit}>
            {/* Campo: Nombre completo */}
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre"
              className="register-input-field"
              value={form.name}
              onChange={handleChange}
            />

            {/* Campo: Correo electrónico */}
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              className="register-input-field"
              value={form.email}
              onChange={handleChange}
            />

            {/* Campo: Contraseña con botón de mostrar/ocultar */}
            <label htmlFor="password">Contraseña</label>
            <div className="register-password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="********"
                className="register-input-field"
                value={form.password}
                onChange={handleChange}
              />
              {/* Icono para alternar visibilidad */}
              <img
                src={showPassword ? eyeOpen : eyeClosed}
                alt="Mostrar contraseña"
                className="register-toggle-password-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {/* Campo: Confirmar contraseña con botón de mostrar/ocultar */}
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <div className="register-password-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="********"
                className="register-input-field"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <img
                src={showConfirmPassword ? eyeOpen : eyeClosed}
                alt="Mostrar contraseña"
                className="register-toggle-password-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>

            {/* Botón para enviar el formulario */}
            <button type="submit" className="register-button">
              Crear cuenta
            </button>

            {/* Enlace para ir a iniciar sesión */}
            <div className="register-option">
              ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Exporta el componente para poder usarlo en otras partes del proyecto
export default Register;
