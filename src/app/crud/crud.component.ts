import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  pessoas: Pessoa[] = [];
  indice:number;

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  // Função de cadastro de pessoa
  cadastrarPessoa(){

    // cadastrar no vetor
    this.pessoas.push(this.formulario.value as Pessoa);

     // Limpeza dos inputs
    this.formulario.reset();


    // Visualização via console
    console.table(this.pessoas);
  }

  // Função de seleção de pessoa
  selecionarPessoa(indice:number){

    // Atribuir o índice da pessoa
    this.indice = indice;

    // Atribuir os dados da pessoa no formulário, ou seja, no momento que o usuario clica em selecionar vai atribuir esses valores no formulário
    this.formulario.setValue({
      nome: this.pessoas[indice].nome,
      idade: this.pessoas[indice].idade,
      cidade: this.pessoas[indice].cidade
    });
  }
  
}