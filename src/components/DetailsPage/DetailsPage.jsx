import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

export const DetailsPage = () => {
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const { title, poster, description } = selectedMovie;

  return (
    <div data-testid="movieDetails">
      <h1>Testing</h1>
      <li>{title}</li>
      <li>
        <img src={poster} />
      </li>
      <li>{description}</li>

      <Link to="/">
        <button data-testid="toList">Back</button>
      </Link>
    </div>
  );
};
