import React from "react";
import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Crear cuenta</h2>
          <p className="text-muted">Regístrate para comenzar</p>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Registrarse
          </button>

          <div className="text-center mt-3">
            <span className="text-muted">¿Ya tienes una cuenta?</span>
            <NavLink to="/login" className="ms-2 text-decoration-none">
              Inicia sesión
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
