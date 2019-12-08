import {Musica} from '../formation-common/musica';
import { Usuario } from '../formation-common/usuario';


export class CadastroDeMusica {
  musicas: Musica[] = [];

  constructor(){

    // -- STUB PARA MUSICA -- 
    // povoando musica com alguns exemplos, e implementando a criacao de formacao, que é algo que o cadastro de musica tem que lidar
    // no momento em que a musica é cadastrada (ou seja, ja criar uma formacao associada a ela no momento)

    let m0 = new Musica();
    m0.titulo = "Let's Kill SSE";
    m0.artista = "BlackPink";
    m0.integrantes = ["Jisoo", "Jennie", "Lisa", "Rosé"];

    let usuario01 = new Usuario();
    usuario01.nome = "Erick";
    usuario01.participacoes = 2;

    let usuario02 = new Usuario();
    usuario02.nome = "Íris";
    usuario02.participacoes = 3;

    let usuario03 = new Usuario();
    usuario03.nome = "Aline"

    let usuario04 = new Usuario();
    usuario04.nome = "Beca"

    let usuario05 = new Usuario();
    usuario05.nome = "Marconi"

    m0.usuariosInteressados = [usuario01, usuario02, usuario03, usuario04, usuario05]
    this.musicas.push(m0);

    let m1 = new Musica();
    m1.titulo = "Hey Mama";
    m1.artista = "EXO CBX";
    m1.integrantes = ["Baek", "Xiumin", "Chen"];

    let usuario11 = new Usuario();
    usuario11.nome = "Beca";
    usuario11.participacoes = 2;

    let usuario12 = new Usuario();
    usuario12.nome = "Íris";
    usuario12.participacoes = 3;

    let usuario13 = new Usuario();
    usuario13.nome = "Aline"

    m1.usuariosInteressados = [usuario11, usuario12, usuario13]
    this.musicas.push(m1);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
  }

  getMusicas(): Musica[] {
    return this.musicas;
  }
}