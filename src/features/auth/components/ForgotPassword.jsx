import React from "react";
import { NavLink } from "react-router-dom";

export const ForgotPassword = () => {
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
          <h2 className="fw-bold">Recuperar contraseña</h2>
          <p className="text-muted">
            Ingresa tu correo y te enviaremos las instrucciones
          </p>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 text-white">
            Enviar instrucciones
          </button>

          <div className="text-center mt-3">
            <NavLink to="/login" className="text-decoration-none">
              ← Volver al inicio de sesión
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
