import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Funcionario } from '../model/Funcionario';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-classe-angular',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './classe-angular.component.html',
  styleUrl: './classe-angular.component.css'
})
export class ClasseAngularComponent {

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(72)]),
    profissao: new FormControl('', Validators.required)
  });

  funcionarios: Funcionario[] = [];

  adicionarFuncionario() {
    if (this.formulario.valid) {
      const novoFuncionario = new Funcionario(
        this.formulario.value.nome,
        this.formulario.value.idade,
        this.formulario.value.profissao
      );
      this.funcionarios.push(novoFuncionario);
      this.formulario.reset();
    }
  }

}
