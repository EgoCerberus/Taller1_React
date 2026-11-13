import React from "react";

export const Main = () => {
  return (
    <>
      {/* Banner principal */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">Bienvenido a SystemCore</h1>

              <p className="lead">
                Tecnología informática y computación para estudiantes, gamers y
                empresas.
              </p>

              <button className="btn btn-primary me-2">Ver productos</button>

              <button className="btn btn-outline-light">Conocer más</button>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800"
                className="img-fluid rounded shadow"
                alt="Computador Gamer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Categorías destacadas</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                💻
                <h5>Computadores</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                🎮
                <h5>Gaming</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                🖥️
                <h5>Monitores</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                ⚙️
                <h5>Componentes</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
