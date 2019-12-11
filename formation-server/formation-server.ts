import express = require('express');
import bodyParser = require("body-parser");

import { Usuario } from '../formation-common/usuario';
import { Musica } from './../formation-common/musica';
import { CadastroDeUsuarios } from './cadastrodeusuarios';
import { CadastroDeMusicas } from './cadastrodemusicas';
import { Formacao} from '../formation-common/formacao'
import {CadastroDeFormacao} from './cadastrodeformacao';

var formationserver = express();

var cadastroU: CadastroDeUsuarios = new CadastroDeUsuarios();
var cadastroM: CadastroDeMusicas = new CadastroDeMusicas();
var cadastroF: CadastroDeFormacao = new CadastroDeFormacao();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
formationserver.use(allowCrossDomain);

formationserver.use(bodyParser.json());

// USUARIO ---------------------------------------------------------------------------

formationserver.get('/usuarios', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadastroU.getUsuarios()));
})

formationserver.post('/usuario', function (req: express.Request, res: express.Response) {
  var usuario: Usuario = <Usuario> req.body; //verificar se é mesmo Usuario!
  usuario = cadastroU.cadastrar(usuario);
  if (usuario) {
    res.send({"success": "O usuário foi cadastrado com sucesso!!"});
  } else {
    res.send({"failure": "O usuário não pode ser cadastrado :(("});
  }
})

formationserver.put('/usuario', function (req: express.Request, res: express.Response) {
  var usuario: Usuario = <Usuario> req.body;
  usuario = cadastroU.atualizar(usuario);
  if (usuario) {
    res.send({"success": "O usuário foi atualizado com sucesso!!"});
  } else {
    res.send({"failure": "O usuário não pode ser atualizado :(("});
  }
})

// MUSICA ---------------------------------------------------------------------------

formationserver.get('/musicas', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadastroM.getMusicas()));
})

formationserver.post('/musica', function (req: express.Request, res: express.Response) {
  var musica: Musica = <Musica> req.body; //verificar se é mesmo Música!
  musica = cadastroM.cadastrar(musica);
  if (musica) {
    res.send({"success": "A música foi cadastrada com sucesso!!"});
  } else {
    res.send({"failure": "A música não pode ser cadastrada :(("});
  }
})

formationserver.put('/musica', function (req: express.Request, res: express.Response) {
  var musica: Musica = <Musica> req.body;
  musica = cadastroM.atualizar(musica);
  if (musica) {
    res.send({"success": "A música foi atualizada com sucesso!!"});
  } else {
    res.send({"failure": "A música não pode ser atualizada :(("});
  }
})
// FORMACAO ---------------------------------------------------------------------------

formationserver.get('/formacoes', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadastroF.getFormacoes()));
})

formationserver.post('/formacao', function (req: express.Request, res: express.Response) {
  var formacao: Formacao = <Formacao> req.body; //verificar se é mesmo Formacao!
  formacao = cadastroF.cadastrar(formacao);
  if (formacao) {
    res.send({"success": "A formação foi cadastrada com sucesso!!"});
  } else {
    res.send({"failure": "A formação não pode ser cadastrada :(("});
  }
})

formationserver.put('/formacao', function (req: express.Request, res: express.Response) {
  var formacao: Formacao = <Formacao> req.body;
  formacao = cadastroF.atualizar(formacao);
  if (formacao) {
    res.send({"success": "A formação foi atualizada com sucesso!!"});
  } else {
    res.send({"failure": "A formação não pode ser atualizada :(("});
  }
})

//-----------------------------------------------------------------------------------

var server = formationserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }