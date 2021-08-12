import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastro: any = {};
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

  }
  //criando um atributo para capturar o conteudo do formulario
  formRegister = new FormGroup({

    //declarando atributos para capturar cada campo do formulário
    marca: new FormControl('', [
      Validators.required
    ]),
    modelo: new FormControl('', [
      Validators.required

    ]),
    placa: new FormControl('', [
      Validators.required
    ]),
    memoria: new FormControl('', [
      Validators.required
    ]),
    hd: new FormControl('', [
      Validators.required
    ]),
    processador: new FormControl('', [
      Validators.required
    ]),
    foto: new FormControl('', [
      Validators.required
    ])
  });

  //método para utilizar o FormGroup na pagina HTML (formRegister)
  get form(): any {
    return this.formRegister.controls;
  }

  //método para capturar o SUBMIT do formulário

  onSubmit(): void {


    var user = []; //array.


    //gravar novamente os dados da cesta de compras em sessão
    console.log(this.formRegister.value);
    this.cadastro = Object.assign(this.cadastro, this.formRegister.value);
    this.addUser(this.cadastro);
    this.formRegister.reset();
  }
  addUser(cadastro: any) {
    let users = [];
    if (localStorage.getItem('Users')) {

      users = JSON.parse(localStorage.getItem('Users') || '{}');
      users = [cadastro, ...users];
    }
    else {
      users = [cadastro];
    }
    localStorage.setItem('Users', JSON.stringify(cadastro));
    window.location.href = "/cadastro";
  }
}


