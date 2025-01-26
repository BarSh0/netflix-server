import { movies } from '../../db/movies.collection.js';

export const validateExistence = (req, res, next) => {
  const { id } = req.params;

  const movie = movies.find((movie) => movie._id === id);
  if (!movie) res.status(404).send('Movie not found');

  req.movie = movie;

  next();
};
