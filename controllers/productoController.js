const Producto = require('../models/producto');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los productos' });
  }
};

// Obtener un producto por su código
const obtenerProductoPorCodigo = async (req, res) => {
  try {
    const producto = await Producto.findOne({ codigo: req.params.codigo });
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar el producto' });
  }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el producto' });
  }
};

// Actualizar un producto
const actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.findOneAndUpdate(
      { codigo: req.params.codigo },
      req.body,
      { new: true }
    );
    if (!productoActualizado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto
const eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findOneAndDelete({ codigo: req.params.codigo });
    if (!productoEliminado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el producto' });
  }
};

// Buscar productos por nombre
const buscarProducto = async (req, res) => {
  try {
    const termino = req.query.q;
    console.log('🔍 Buscando producto con término:', termino);

    if (!termino) {
      return res.status(400).json({ mensaje: 'Debes especificar un término de búsqueda con ?q=' });
    }

    const productos = await Producto.find({
      nombre: { $regex: termino, $options: 'i' }
    });

    if (productos.length === 0) {
      console.log('🔎 No se encontraron productos que coincidan con:', termino);
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    console.log('✅ Productos encontrados:', productos.length);
    res.json(productos);
  } catch (error) {
    console.error('🛑 Error en buscarProducto:', error);
    res.status(500).json({ mensaje: 'Error al buscar productos' });
  }
};


// Buscar productos por categoría
const buscarPorCategoria = async (req, res) => {
  try {
    const { nombre } = req.params;
    const productos = await Producto.find({
      categoria: { $in: [nombre] }
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar productos por categoría' });
  }
};

// Buscar productos por rango de precio 
const buscarPorRangoPrecio = async (req, res) => {
  try {
    const [min, max] = req.params.rango.split('-');
    const productos = await Producto.find({
      precio: { $gte: parseFloat(min), $lte: parseFloat(max) }
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar productos por precio' });
  }
};

// Carga masiva de productos
const cargaMasiva = async (req, res) => {
  try {
    const productos = await Producto.insertMany(req.body);
    res.status(201).json(productos);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error en la carga masiva de productos' });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorCodigo,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  buscarProducto,
  buscarPorCategoria,
  buscarPorRangoPrecio,
  cargaMasiva
};
