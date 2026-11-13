import React from "react";

export const Main = () => {
  return (
    <main>
      {/* Banner Principal */}
      <section
        className="text-white py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('${import.meta.env.BASE_URL}img/banner-tech.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "350px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">SystemCore</h1>

          <p className="lead">
            Tecnología informática y computación para estudiantes,
            profesionales, gamers y empresas.
          </p>

          <button className="btn btn-primary btn-lg me-2">Ver catálogo</button>

          <button className="btn btn-outline-light btn-lg">Contactar</button>
        </div>
      </section>

      {/* Categorías */}
      <section className="container my-5">
        <div className="text-center mb-4">
          <h2>Categorías</h2>
          <p className="text-muted">
            Encuentra todo lo que necesitas para tu equipo.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h1>🖥️</h1>
                <h5 className="card-title">Computadores</h5>
                <p className="card-text text-muted">
                  Equipos de escritorio para hogar, oficina y gaming.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h1>💻</h1>
                <h5 className="card-title">Portátiles</h5>
                <p className="card-text text-muted">
                  Laptops para estudio, productividad y entretenimiento.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h1>⚙️</h1>
                <h5 className="card-title">Componentes</h5>
                <p className="card-text text-muted">
                  Procesadores, memorias RAM, SSD y tarjetas de video.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h1>⌨️</h1>
                <h5 className="card-title">Periféricos</h5>
                <p className="card-text text-muted">
                  Teclados, mouse, audífonos y accesorios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información de la tienda */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>¿Por qué elegir SystemCore?</h2>

          <div className="row mt-4">
            <div className="col-md-4">
              <h4>🚚 Envíos</h4>
              <p>Entregas rápidas y seguras.</p>
            </div>

            <div className="col-md-4">
              <h4>🔒 Garantía</h4>
              <p>Productos con respaldo y calidad.</p>
            </div>

            <div className="col-md-4">
              <h4>💡 Asesoría</h4>
              <p>Ayuda para elegir el mejor equipo.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
