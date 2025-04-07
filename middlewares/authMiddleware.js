// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ error: 'Token requerido' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // ahora puedes acceder al usuario desde req.user
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = verifyToken;