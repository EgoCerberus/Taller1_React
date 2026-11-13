import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
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
          <h2 className="fw-bold">Iniciar sesión</h2>
          <p className="text-muted">Ingresa tus credenciales para continuar</p>
        </div>

        <form>
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

          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Recordarme
            </label>
          </div>

          <div className="mb-3 text-end">
            <NavLink
              to="/forgot-password"
              className="text-decoration-none small"
            >
              ¿Olvidaste tu contraseña?
            </NavLink>
          </div>
          
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>

          <div className="text-center mt-3">
            <span className="text-muted">¿No tienes cuenta?</span>

            <NavLink to="/register" className="ms-2 text-decoration-none">
              Regístrate
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
