import { Musica } from './../../../../formation-common/musica';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-musica-detalhes',
  templateUrl: './musica-detalhes.component.html',
  styleUrls: ['./musica-detalhes.component.scss']
})
export class MusicaDetalhesComponent implements OnInit {

  constructor() { }

  @Input() musicaSelect: Musica;

  ngOnInit() {
  }

}
