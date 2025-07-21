const express = require('express');
const app = express();
const sequelize = require('./database');
const Producto = require('./models/producto');
const rutasProductos = require('./routes/productos');

app.use(express.json());
app.use('/productos', rutasProductos);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
});
