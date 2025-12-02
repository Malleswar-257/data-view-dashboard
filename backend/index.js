const express = require('express');
const app = express();
const prisma = require('./prisma');
const auth = require('./auth');

app.use(express.json());

app.use('/api', auth.verifyToken, require('./routes'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});