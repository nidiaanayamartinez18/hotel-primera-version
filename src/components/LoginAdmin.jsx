import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 
import logo from '../assets/logo-admin.png';
import eyeOpen from '../assets/eye-open.png';
import eyeClosed from '../assets/eye-closed.png';

function LoginAdmin({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [showClave, setShowClave] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple para administrador
    if (usuario === 'admin' && clave === '1234') {
      onLoginSuccess(usuario); // Guarda el usuario en App.jsx o contexto
      navigate('/admin-dashboard'); // Redirige a un panel de admin
    } else {
      setError('Usuario o clave incorrectos');
    }
  };

  return (
    <div className="login-page">
      {/* Encabezado */}
      <div className="login-header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <h2>Panel de Administrador</h2>
        <p className="subtitle">Acceso exclusivo</p>
      </div>

      {/* Formulario */}
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            {/* Usuario */}
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              placeholder="Ingrese su usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="input-field"
              required
            />

            {/* Clave */}
            <label htmlFor="clave">Clave</label>
            <div className="password-container">
              <input
                type={showClave ? 'text' : 'password'}
                id="clave"
                placeholder="********"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                className="input-field"
                required
              />
              <img
                src={showClave ? eyeOpen : eyeClosed}
                alt="Mostrar clave"
                className="toggle-password-icon"
                onClick={() => setShowClave(!showClave)}
              />
            </div>

            {/* Error */}
            {error && <div className="error">{error}</div>}

            {/* Botón */}
            <button type="submit" className="login-button">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
