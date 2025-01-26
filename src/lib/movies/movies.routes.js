import { Router } from 'express';
import * as Controller from './movies.controller.js';
import * as Middleware from './movies.middleware.js';

const router = Router();

router.get('/', Controller.getAll);
router.get('/:id', Middleware.validateExistence, Controller.getById);
router.post('/', Controller.create);
router.put('/:id', Middleware.validateExistence, Controller.update);
router.delete('/:id', Middleware.validateExistence, Controller.remove);

const moviesRouter = router;

export default moviesRouter;
