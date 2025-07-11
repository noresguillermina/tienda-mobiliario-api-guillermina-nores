const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Producto = require('./models/producto');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('📥 Cargando datos a MongoDB...');

  // Leer el archivo JSON
  const filePath = path.join(__dirname, 'data', 'mobiliario.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Limpiar la colección antes de insertar (opcional)
  await Producto.deleteMany({});
  await Producto.insertMany(data);

  console.log('✅ Datos cargados con éxito');
  mongoose.disconnect();
}).catch((err) => {
  console.error('❌ Error:', err);
});
