const mongoose = require('mongoose');

const URL = 'mongodb://127.0.0.1:27017/meu_banco';

const db = mongoose.connect(URL);

const con = mongoose.connection;

con.on('open', function(){
  console.log('Conectado ao MongoDB!');
});

con.on('error', function(){
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function(){
  console.log('Desconectado do MongoDB!');
});

module.exports = db;