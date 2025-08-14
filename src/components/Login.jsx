// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/logo.png';
import eyeOpen from '../assets/eye-open.png';
import eyeClosed from '../assets/eye-closed.png';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple de login
    if (email === 'admin@example.com' && password === '1234') {
      onLoginSuccess(email);       // Guarda el usuario en App.jsx
      navigate('/welcome');        // Redirige a /welcome
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login-page">
      {/* Encabezado */}
      <div className="login-header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <h2>Bienvenido</h2>
        <p className="subtitle">Por favor, inicia sesión.</p>
      </div>

      {/* Formulario */}
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />

            {/* Contraseña */}
            <label htmlFor="password">Contraseña</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
              <img
                src={showPassword ? eyeOpen : eyeClosed}
                alt="Mostrar contraseña"
                className="toggle-password-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {/* Error */}
            {error && <div className="error">{error}</div>}

            {/* Enlace de recuperación */}
            <div className="forgot-password">
              <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>

            {/* Botón de login */}
            <button type="submit" className="login-button">
              Iniciar sesión
            </button>

            {/* Enlace para crear cuenta */}
            <div className="register-option">
              <span>¿No tienes una cuenta? </span>
              <Link to="/register">Crear cuenta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
