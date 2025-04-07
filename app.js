require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();

// Middlewares esenciales
app.use(cors());
app.use(helmet());
app.use(express.json());  // Solo este middleware por ahora

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
