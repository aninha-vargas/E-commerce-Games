var express = require('express');
var router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.post('/', pedidoController.salvar); 
router.get('/', pedidoController.listar); 
router.get('/:pedidoId', pedidoController.buscarPorId);
router.put('/:pedidoId', pedidoController.atualizar);
router.delete('/:pedidoId', pedidoController.excluir);

module.exports = router;