# 🛍️ API REST - Tienda de Mobiliario

Este proyecto es un trabajo integrador del curso de Backend. Consiste en la construcción de una API RESTful para gestionar un catálogo de productos utilizando **Express.js** y **MongoDB**.

---

## 🧱 Tecnologías utilizadas

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- dotenv  
- REST Client (para pruebas desde VS Code)

---

## 📁 Estructura del Proyecto

/controllers
└ productoController.js
/models
└ producto.js
/routes
└ productoRoutes.js
/data
└ mobiliario.json
app.js
.env
.gitignore
README.md

---

## 📌 Archivo JSON utilizado

Se utilizó el archivo: `mobiliario.json`, ubicado en la carpeta `/data`.

---

## 📦 Instalación y ejecución

1. Clonar el repositorio.
2. Instalar las dependencias:

```bash
npm install

Crear el archivo .env con la conexión a MongoDB:
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/tienda?retryWrites=true&w=majority

Poblar la base de datos:

bash
Copiar
Editar
node seed.js

Iniciar el servidor:

bash
Copiar
Editar
node app.js

🧪 Pruebas con REST Client
El archivo api.http permite testear todos los endpoints con ejemplos ya listos.
Solo necesitás instalar la extensión REST Client en Visual Studio Code.

🚀 Endpoints Disponibles
📚 CRUD Básico
Método	Endpoint	Descripción
GET	/api/productos	Lista todos los productos
GET	/api/productos/:codigo	Busca producto por código
POST	/api/productos	Crea un nuevo producto
PUT	/api/productos/:codigo	Modifica un producto existente
DELETE	/api/productos/:codigo	Elimina un producto

🔍 Endpoints adicionales
Método	Endpoint	Descripción
GET	/api/productos/buscar?q=mesa	Busca productos por término en nombre
GET	/api/productos/categoria/:nombre	Filtra productos por categoría
GET	/api/productos/precio/:min-max	Filtra por rango de precios
POST	/api/productos/masivo	Carga múltiples productos

📝 Notas
Se utilizaron validaciones básicas de errores (404, 400, 500).

El endpoint /buscar acepta tanto q como nombre como query param.

Todos los datos sensibles están protegidos mediante variables de entorno (dotenv).

La API está conectada a MongoDB Atlas mediante Mongoose.

✅ Estado del proyecto
✔ Funcional
✔ Testeado
✔ Estructurado
✔ Listo para entregar 🚀

👩‍💻 Autor
Guillermina Nores
Trabajo realizado para el curso de Backend de UNTREF 💻✨

