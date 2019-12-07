import { Formacao } from '../../../../formation-common/formacao';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormacaoService } from './formacao.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent implements OnInit {

  nomeDoFormControl = new FormControl();

  associacoesDeFormacoes = [];
  
  formacoes : Formacao[];

  constructor(private serviceF : FormacaoService) { }
  
  submeter () {
    for (let i =0; i<this.associacoesDeFormacoes.length; i++){ // para cada formacao
      let associacoesIntegrantes = [];
      
      for (let j=0; j<this.associacoesDeFormacoes[i].length; j++){ // para cada integrante da musica da formacao
        let associacaoIntegrante = new Map<String,String[]>();
        associacaoIntegrante.set(this.formacoes[i].musica.integrantes[j], this.associacoesDeFormacoes[i][j].value);
        associacoesIntegrantes.push(associacaoIntegrante);
      }
      this.formacoes[i].associacao = associacoesIntegrantes;
      this.serviceF.atualizar(this.formacoes[i])
    }
  }

  ngOnInit() {
    this.serviceF.getFormacoes().subscribe(formacoes => {
      this.formacoes = formacoes
      this.formacoes.forEach(f => {
        let a = []
        f.musica.integrantes.forEach(i => {
          a.push(new FormControl())
        })
        this.associacoesDeFormacoes.push(a);
      })
    })
  }

}