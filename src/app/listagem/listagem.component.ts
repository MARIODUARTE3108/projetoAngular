import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  pc = {
    marca: '',
    modelo: '',
    placa: '',
    memoria: '',
    hd: '',
    processador: '',
    foto: ''
  };
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('Users') != null) {
      var dados = localStorage.getItem('Users') as string;
      this.pc = JSON.parse(dados);

    }

  }

}
