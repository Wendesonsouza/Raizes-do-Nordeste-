#routes/pratos.js
javascript
const express = require('express');
const router = express.Router();
const pratoController = require('../controllers/pratoController');

// Listar pratos
router.get('/', pratoController.listarPratos);

// Criar pedido
router.post('/pedido', pratoController.criarPedido);

module.exports = router;
