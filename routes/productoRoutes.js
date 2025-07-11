const express = require('express');
const router = express.Router();
const {
  obtenerProductos,
  obtenerProductoPorCodigo,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  buscarProducto,
  buscarPorCategoria,
  buscarPorRangoPrecio,
  cargaMasiva
} = require('../controllers/productoController');

// 🟢 Endpoints adicionales PRIMERO
router.get('/productos/buscar', buscarProducto);
router.get('/productos/categoria/:nombre', buscarPorCategoria);
router.get('/productos/precio/:rango', buscarPorRangoPrecio);
router.post('/productos/masivo', cargaMasiva);

// 🔵 CRUD básico DESPUÉS
router.get('/productos', obtenerProductos);
router.get('/productos/:codigo', obtenerProductoPorCodigo);
router.post('/productos', crearProducto);
router.put('/productos/:codigo', actualizarProducto);
router.delete('/productos/:codigo', eliminarProducto);

module.exports = router;

