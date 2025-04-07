// routes/private.js
const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/roleMiddleware');  // Importamos el middleware

const router = express.Router();

// Ruta protegida para todos los usuarios autenticados
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({
    message: 'Bienvenido al dashboard privado',
    user: req.user
  });
});

// Ruta solo para admin
router.get('/admin', verifyToken, checkRole('admin'), (req, res) => {
  res.json({
    message: 'Bienvenido al área de administración',
    user: req.user
  });
});

// Ruta para ver el perfil del usuario
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Este es tu perfil',
    user: req.user
  });
});

module.exports = router;
