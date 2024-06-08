import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../interfaces/Usuario';

@Component({
  selector: 'app-interface-angular',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './interface-angular.component.html',
  styleUrl: './interface-angular.component.css'
})
export class InterfaceAngularComponent {

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(72)]),
    cidade: new FormControl('', Validators.required)
  });

  usuarios: Usuario[] = [];  // utilizando a interface

  adicionarUsuario(){
    if(this.formulario.valid){
      const novoUsuario: Usuario = this.formulario.value as Usuario; // capturando os valores do formulario (nome, idade e cidade).
      this.usuarios.push(novoUsuario);
      this.formulario.reset();
    }
  }

}
