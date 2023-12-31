const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const userRouter = require('./routes/api/user');
const boardRouter = require('./routes/api/board');
const supportRouter = require('./routes/api/support');
const columnRouter = require('./routes/api/column');
const taskRouter = require('./routes/api/task');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/api/user', userRouter);
app.use('/api/support', supportRouter);
app.use('/api/board', boardRouter);
app.use('/api/column', columnRouter);
app.use('/api/task', taskRouter);


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.stayus(400).json({ message: err.message });
  }
  if (err.message.includes('duplicate key error collection')) {
    return res.status(409).json({ message: 'Already exist' });
  }
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
