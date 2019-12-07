import express = require('express');
import bodyParser = require("body-parser");

import { Usuario } from '../formation-common/usuario';
import { CadastroDeUsuarios } from './cadastrodeusuarios';

import { Musica } from '../formation-common/musica';
import { CadastroDeMusicas } from './cadastrodemusicas';

var formationserver = express();

var cadastroU: CadastroDeUsuarios = new CadastroDeUsuarios();
var cadastroM: CadastroDeMusicas = new CadastroDeMusicas();

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

//STUB MÚSICAS-----------------------------------------------------------------------

let usuariosInteressados:String[] = [];
var musicas = [{titulo:'Fancy',id:'1',artista:'Twice',integrantes: ['Nayeon','Jeongyeon','Momo','Sana','Jihyo','Mina','Dahyun','Chaeyoung','Tzuyu'],usuariosInteressados}
              ,{titulo:'Obsession',id:'2',artista:'Exo',integrantes: ['Suho','Baekhyun','Chen','Chanyeol','Kai','Sehun'],usuariosInteressados}
              ,{titulo:'I\'m so sick',id:'3',artista:'Apink',integrantes: ['Chorong','Bomi','Eunji','NaEun','NamJoo','Hayoung'],usuariosInteressados}];

formationserver.get('/musicas', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(musicas));
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

//-----------------------------------------------------------------------------------

var server = formationserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }