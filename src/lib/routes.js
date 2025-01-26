import { Router } from 'express';
import actorsRouter from './actors/actors.routes.js';
import moviesRouter from './movies/movies.routes.js';

const router = Router();

router.use('/actors', actorsRouter);
router.use('/movies', moviesRouter);

export default router;
