const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

router.post('/registrar', async (req, res) => {
  const { nombre, codigo } = req.body;

  try {
    const existe = await Producto.findOne({ where: { codigo } });
    if (existe) {
      return res.status(400).json({ mensaje: 'No se puede crear, código duplicado (${codigo})'});
    }

    await Producto.create({ nombre, codigo });
    res.json({ mensaje: 'Producto ${nombre} registrado correctamente con código ${codigo}' });

  } catch (err) {
    res.status(500).json({ error: 'Error interno' });
  }
});

module.exports = router;