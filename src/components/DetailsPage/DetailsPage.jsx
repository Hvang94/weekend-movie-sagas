import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const DetailsPage = () => {
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const { title, poster, description } = selectedMovie;
  const [movieGenre, setMovieGenre] = useState([]);


  useEffect(() => {
    axios
      .get(`/api/movies_genres/${selectedMovie.id}`)
      .then((res) => {
        setMovieGenre(res.data[0].genres);
        console.log(res.data[0].genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedMovie]);
  

  return (
    <div data-testid="movieDetails">
      <h1>{title}</h1>
      <img src={poster} />
      <h3>{movieGenre}</h3>
      <p>{description}</p>

      <Link to="/">
        <button data-testid="toList">Back</button>
      </Link>
    </div>
  );
};
