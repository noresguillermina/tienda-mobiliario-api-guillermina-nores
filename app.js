const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productoRoutes = require('./routes/productoRoutes');
const app = express();

dotenv.config();

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use('/api', productoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
