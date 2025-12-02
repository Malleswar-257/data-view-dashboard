const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send({ message: 'No token provided.' });
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(500).send({ message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    next();
  });
};

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

module.exports = { verifyToken, hashPassword };