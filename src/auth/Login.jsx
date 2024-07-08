import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import '../styles.css';

const Login = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Login</h1>
      </header>
      <div className="form-container">
        <form className="form">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
      <Link to="/" className="volver">Volver</Link>
      <Footer></Footer>
    </div>
  );
};

export default Login;