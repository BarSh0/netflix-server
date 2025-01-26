import { Router } from 'express';

const router = Router();

router.get('/actors', (req, res) => {
  res.send('Actors list');
});

router.get('/actors/:id', (req, res) => {
  res.send(`Actors with id ${req.params.id}`);
});

router.post('/actors', (req, res) => {
  res.send('Actors created');
});

router.put('/actors/:id', (req, res) => {
  res.send(`Actors with id ${req.params.id} updated`);
});

router.delete('/actors/:id', (req, res) => {
  res.send(`Actors with id ${req.params.id} deleted`);
});

const actorsRouter = router;

export default actorsRouter;
