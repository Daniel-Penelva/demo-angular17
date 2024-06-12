

import { Component } from '@angular/core';
import { UserType, Usuario } from '../interfaces/Usuario';


@Component({
  selector: 'app-sintaxe-espalhamento',
  standalone: true,
  imports: [],
  templateUrl: './sintaxe-espalhamento.component.html',
  styleUrl: './sintaxe-espalhamento.component.css'
})
export class SintaxeEspalhamentoComponent {

  usuario: Usuario = {
    id: 1,
    nome: 'Daniel',
    cidade: 'Rio de Janeiro',
    sobrenome: 'Silva',
    idade: 25,
    usuario: 'daniel',
    email: 'daniel@example.com',
    senha: '123',
    tipo: UserType.Administrador
  };
  
  // Clonando o objeto usuario
  copiaUsuario: Usuario = { ...this.usuario };

  constructor(){
    this.copiaUsuario.nome = 'Carlos';

    console.log(`Original: ${this.usuario.nome}`); // Output: 'Daniel'
    console.log(`Cópia: ${this.copiaUsuario.nome}`); // Output: 'Carlos'
  }

}
