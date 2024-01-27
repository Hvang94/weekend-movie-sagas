import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { Link } from "react-router-dom";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <>
      <main>
        <h1>MovieList</h1>
        <section className="movies">
          {movies.map((movie) => {
            return (
              <div data-testid="movieItem" key={movie.id}>
                <Link to="/DetailsPage/">
                  <h3>{movie.title}</h3>
                  <img src={movie.poster} alt={movie.title} />
                </Link>
              </div>
            );
          })}
        </section>
      </main>
      <div>
        <Link to="/AddMovie/">
          <button>Add Movie</button>
        </Link>
      </div>
    </>
  );
}

export default MovieList;
