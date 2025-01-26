import Express from 'express';
import cors from 'cors';
import router from './src/lib/routes.js';

const app = Express();

app.use(Express.json());
app.use(cors());

app.use('/api', router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.get('/health', (req, res) => {
  res.send('Server is running');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
