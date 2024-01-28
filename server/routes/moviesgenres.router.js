const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  const movieId = req.params.id
  console.log(movieId);
    const query = `
    SELECT movies.id, movies.title, movies.poster, movies.description, string_agg(genres.name, ', ') AS genres FROM "movies"
    JOIN "movies_genres" ON movies.id=movies_genres.movie_id
    JOIN "genres" ON movies_genres.genre_id=genres.id
    WHERE movies.id=$1
    GROUP BY movies.id;
    `;
    pool
      .query(query, [movieId])
      .then((result) => {
        // console.log(result);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR: Get movies_genres", err);
        res.sendStatus(500);
      });
  });

  module.exports = router;