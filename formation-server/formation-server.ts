import express = require('express');
import bodyParser = require("body-parser");

import { Usuario } from '../formation-common/usuario';
import { CadastroDeUsuarios } from './cadastrodeusuarios';
import { Formacao} from '../formation-common/formacao'
import {CadastroDeFormacao} from './cadastrodeformacao';
var taserver = express();

var cadastroU: CadastroDeUsuarios = new CadastroDeUsuarios();
var cadastroF: CadastroDeFormacao = new CadastroDeFormacao();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

// USUARIO ---------------------------------------------------------------------------

taserver.get('/usuarios', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadastroU.getUsuarios()));
})


taserver.post('/usuario', function (req: express.Request, res: express.Response) {
  var usuario: Usuario = <Usuario> req.body; //verificar se é mesmo Usuario!
  usuario = cadastroU.cadastrar(usuario);
  if (usuario) {
    res.send({"success": "O usuário foi cadastrado com sucesso!!"});
  } else {
    res.send({"failure": "O usuário não pode ser cadastrado :(("});
  }
})

taserver.put('/usuario', function (req: express.Request, res: express.Response) {
  var usuario: Usuario = <Usuario> req.body;
  usuario = cadastroU.atualizar(usuario);
  if (usuario) {
    res.send({"success": "O usuário foi atualizado com sucesso!!"});
  } else {
    res.send({"failure": "O usuário não pode ser atualizado :(("});
  }
})

// FORMACAO ---------------------------------------------------------------------------

taserver.get('/formacoes', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadastroF.getFormacoes()));
})

taserver.post('/formaca', function (req: express.Request, res: express.Response) {
  var formacao: Formacao = <Formacao> req.body; //verificar se é mesmo Usuario!
  formacao = cadastroF.cadastrar(formacao);
  if (formacao) {
    res.send({"success": "A formação foi cadastrada com sucesso!!"});
  } else {
    res.send({"failure": "A formação não pode ser cadastrada :(("});
  }
})

taserver.put('/formacao', function (req: express.Request, res: express.Response) {
  var formacao: Formacao = <Formacao> req.body;
  formacao = cadastroF.atualizar(formacao);
  if (formacao) {
    res.send({"success": "A formação foi atualizada com sucesso!!"});
  } else {
    res.send({"failure": "A formação não pode ser atualizada :(("});
  }
})

//-----------------------------------------------------------------------------------

var server = taserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }