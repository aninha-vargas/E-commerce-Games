var express = require('express');
var router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/', clienteController.salvar); 
router.get('/', clienteController.listar); 
router.get('/:clienteId', clienteController.buscarPorId);
router.put('/:clienteId', clienteController.atualizar);
router.delete('/:clienteId', clienteController.excluir);

module.exports = router;