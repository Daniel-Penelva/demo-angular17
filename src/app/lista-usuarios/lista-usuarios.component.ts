import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  usuarios = [
    { id: 1, name: 'Usuario 1'},
    { id: 2, name: 'Usuario 2'},
    { id: 3, name: 'Usuario 3'}
  ];

  // Redireciona para a URL /users/:id 
  verDetalhes(id: number){
    window.location.href = `/usuarios/${id}`;
  }

}
