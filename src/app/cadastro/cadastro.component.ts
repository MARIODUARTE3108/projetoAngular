import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  pc = {
    marca: '',
    modelo: '',
    placa: '',
    memoria: '',
    hd: '',
    processador: '',
    foto: ''
  }


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
    console.log(this.formRegister.value);



    var cestaDeCompras = []; //array..

    //verificar se já existem produtos adicionados em sessão..    
    if (localStorage.getItem('CADASTRO') != null) {
      //capturar o conteudo gravado em sessão
      var dados = localStorage.getItem('CADASTRO');
      cestaDeCompras = JSON.parse(dados as string) as any[];
    }

    //adicionar o produto que foi selecionado na página
    cestaDeCompras.push();

    //gravar novamente os dados da cesta de compras em sessão
    localStorage.setItem('CADASTRO',
      JSON.stringify(cestaDeCompras));

    //redirecionar para a página de carrinho de compras
    window.location.href = "/cadastro";

  }
}

