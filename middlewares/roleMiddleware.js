// middlewares/roleMiddleware.js

const checkRole = (role) => {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.status(403).json({ error: 'Acceso denegado' }); // 403: Forbidden
      }
      next(); // Si tiene el rol adecuado, continua a la siguiente ruta
    };
  };
  
  module.exports = checkRole;
  