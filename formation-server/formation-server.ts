import express = require('express');
import bodyParser = require("body-parser");

import { Usuario } from '../formation-common/usuario';
import { Musica } from './../formation-common/musica';
import { CadastroDeUsuarios } from './cadastrodeusuarios';
import { CadastroDeMusicas } from './cadastrodemusicas';

var taserver = express();

var cadastroU: CadastroDeUsuarios = new CadastroDeUsuarios();
var cadastroM: CadastroDeMusicas = new CadastroDeMusicas();

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

// MUSICA ---------------------------------------------------------------------------

taserver.get('/musica', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadastroM.getMusicas()));
})

taserver.post('/musicas', function (req: express.Request, res: express.Response) {
  var musica: Musica = <Musica> req.body; //verificar se é mesmo Música!
  musica = cadastroM.cadastrar(musica);
  if (musica) {
    res.send({"success": "A música foi cadastrada com sucesso!!"});
  } else {
    res.send({"failure": "A música não pode ser cadastrada :(("});
  }
})

taserver.put('/musicas', function (req: express.Request, res: express.Response) {
  var musica: Musica = <Musica> req.body;
  musica = cadastroM.atualizar(musica);
  if (musica) {
    res.send({"success": "A música foi atualizada com sucesso!!"});
  } else {
    res.send({"failure": "A música não pode ser atualizada :(("});
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