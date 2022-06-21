const clienteModel = require('../models/clienteModel');

class ClienteController {
  async salvar(req, res) {
    const max = await clienteModel.findOne({}).sort({id: -1});
    let cliente = req.body;
    cliente.id = max == null ? 1 : max.id + 1;
    const resultado = await clienteModel.create(cliente);
    res.status(201).json(resultado);
  }

  async listar(req, res) {
    const resultado = await clienteModel.find({});
    res.status(200).json(resultado);
  }

  async buscarPorId(req, res) {
    const id = req.params.clienteId;
    const resultado = await clienteModel.findOne({'id': id});
    res.status(200).json(resultado);
  }

  async atualizar(req, res) {
    const id = req.params.clienteId;
    const _id = String((await clienteModel.findOne({'id': id}))._id);
    let cliente = req.body;
    await clienteModel.findByIdAndUpdate(String(_id), cliente);
    res.status(200).send();
  }

  async excluir(req, res) {
    const id = req.params.clienteId;
    const _id = String((await clienteModel.findOne({'id': id}))._id);
    await clienteModel.findByIdAndRemove(String(_id));
    res.status(200).send();
  }
}

module.exports = new ClienteController();