const express = require('express');
const app = express();
const movieRouter = require('./routes/movie.router.js')
const genreRouter = require('./routes/genre.router.js')
const moviesgenresRouter = require('./routes/moviesgenres.router.js')
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movies', movieRouter);
app.use('/api/genres', genreRouter)
app.use('/api/movies_genres/', moviesgenresRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
