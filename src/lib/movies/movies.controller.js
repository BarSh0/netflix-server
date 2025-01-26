import { actors } from '../../db/actors.collection.js';
import { movies } from '../../db/movies.collection.js';

const populate = (keys, collection) => {
  return collection.filter((item) => keys.includes(item._id));
};

export const getAll = (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedMovies = movies.slice(startIndex, endIndex).map((movie) => {
    const actorsData = populate(movie.actors, actors);
    return { ...movie, actors: actorsData };
  });

  const totalItems = movies.length;
  const totalPages = Math.ceil(totalItems / limit);

  res.send({
    page: Number(page),
    limit: Number(limit),
    totalPages,
    totalItems,
    data: paginatedMovies,
  });
};

export const getById = (req, res) => {
  const movieData = { ...req.movie, actors: populate(req.movie.actors, actors) };
  res.send(movieData);
};

export const create = (req, res) => {
  const { title, genre, releaseYear, actors } = req.body;
  const isNotValid = !title || !genre || !releaseYear || !actors;
  if (isNotValid) res.status(400).send('Missing required fields');
  const newMovie = {
    _id: `movie${movies.length + 1}`,
    title,
    genre,
    releaseYear,
    actors,
  };
  movies.push(newMovie);
  res.send(newMovie);
};

export const update = (req, res) => {
  const { title, genre, releaseYear, actors } = req.body;
  const { movie } = req;
  movie.title = title;
  movie.genre = genre;
  movie.releaseYear = releaseYear;
  movie.actors = actors;
  res.send(movie);
};

export const remove = (req, res) => {
  const { movie } = req;
  const index = movies.indexOf(movie);
  movies.splice(index, 1);
  res.send('Movie deleted');
};
