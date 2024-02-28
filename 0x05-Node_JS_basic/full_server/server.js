import express from 'express';
import router from './routes/app';
import studentRouter from './routes/index';

const app = express();
app.use('/', router);
app.use('/students', studentRouter);

app.listen(1245, 'localhost', () => {
  console.log('server running.');
});

export default app;

