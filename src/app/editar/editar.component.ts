import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pc = [{
    marca: '',
    modelo: '',
    placa: '',
    memoria: '',
    hd: '',
    processador: '',
    foto: ''
  }];
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('Users') != null) {
      var dados = localStorage.getItem('Users') as string;
      this.pc = JSON.parse(dados);

    }
  }

}
