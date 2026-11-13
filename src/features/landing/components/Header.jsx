import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          SystemCore
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/rickandmorty">
                Rick & Morty
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/props">
                Props
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Iniciar sesión
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Registrarse
              </NavLink>
            </li>
          </ul>

          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
