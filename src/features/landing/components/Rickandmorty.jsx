import React, { useState, useEffect } from "react";

export const Rickandmorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Efecto de espera (debounce) para el buscador (500 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  // Consumir la API combinando búsqueda y paginación
  useEffect(() => {
    let isMounted = true;

    async function fetchCharacters() {
      // Indicamos carga al iniciar la promesa de forma asíncrona interna
      if (isMounted) {
        setLoading(true);
        setError(null);
      }

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${debouncedSearch}`,
        );

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error(
              "Demasiadas peticiones, espera un momento e intenta de nuevo",
            );
          }
          throw new Error("No se encontraron personajes");
        }

        const data = await response.json();

        if (isMounted) {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setCharacters([]);
          setTotalPages(1);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchCharacters();

    return () => {
      isMounted = false;
    };
  }, [debouncedSearch, page]);

  // Manejador del buscador (reinicia a la página 1 al buscar)
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  // Mostrar indicador de carga mientras responde la API
  if (loading && characters.length === 0) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando personajes...</span>
        </div>
        <p className="mt-2 text-muted">Cargando datos de la API...</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Personajes de Rick and Morty</h2>
        <p className="text-muted">Consumo de API REST en React (SENA)</p>
      </div>

      {/* Buscador */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar personaje por nombre..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Mostrar mensaje si ocurre un error o no hay resultados */}
      {error && (
        <div className="alert alert-warning text-center" role="alert">
          <strong>Aviso:</strong> {error}
        </div>
      )}

      {/* Lista de personajes */}
      <div className="row">
        {characters.map((character) => (
          <div key={character.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <img
                src={character.image}
                alt={character.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark text-truncate">
                  {character.name}
                </h5>
                <p className="card-text mb-1">
                  <strong>Estado:</strong>{" "}
                  <span
                    className={`badge ${
                      character.status === "Alive"
                        ? "bg-success"
                        : character.status === "Dead"
                          ? "bg-danger"
                          : "bg-secondary"
                    }`}
                  >
                    {character.status}
                  </span>
                </p>
                <p className="card-text mb-1">
                  <strong>Especie:</strong> {character.species}
                </p>
                <p className="card-text text-truncate">
                  <strong>Origen:</strong> {character.origin?.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="d-flex justify-content-center align-items-center gap-3 my-4">
        <button
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </button>

        <span className="fw-semibold">
          Página {page} de {totalPages}
        </span>

        <button
          className="btn btn-primary"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
