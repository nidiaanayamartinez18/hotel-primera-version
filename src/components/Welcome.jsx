// src/components/Welcome.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css"; // si decides agregar estilos
import { useEffect } from "react";

function Welcome({ user, onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="welcome-container">
      <h1>Bienvenido, {user}</h1>
      <p>Has iniciado sesión exitosamente.</p>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Welcome;
