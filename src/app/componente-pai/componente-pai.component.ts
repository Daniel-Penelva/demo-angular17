import { Component } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { CommonModule } from '@angular/common';
import { ComponenteFilhoComponent } from "../componente-filho/componente-filho.component";

@Component({
    selector: 'app-componente-pai',
    standalone: true,
    templateUrl: './componente-pai.component.html',
    styleUrl: './componente-pai.component.css',
    imports: [CommonModule, ComponenteFilhoComponent]
})
export class ComponentePaiComponent {
  
  clientes: Cliente[] = [
    {
      id: 1,
      nome: 'Daniel',
      sobrenome: 'Penelva',
      cidade: 'Rio de Janeiro',
      idade: 34,
      email: 'daniel@gmail.com',
    },
    {
      id: 2,
      nome: 'Vanessa',
      sobrenome: 'Silva',
      cidade: 'Rio de Janeiro',
      idade: 25,
      email: 'vanessa@example.com',
    },
    {
      id: 3,
      nome: 'Maria',
      sobrenome: 'Fernandes',
      cidade: 'São Paulo',
      idade: 30,
      email: 'maria@example.com',
    },
    {
      id: 4,
      nome: 'Pedro',
      sobrenome: 'Gomes',
      cidade: 'Belo Horizonte',
      idade: 22,
      email: 'pedro@example.com',
    },
  ];

  selectedCliente: Cliente;

  /* Método que  seleciona um usuário e criar uma cópia dele para evitar a mutação direta do objeto original.*/
  onSelected(cliente: Cliente){
    this.selectedCliente = { ...cliente };  // Essa linha cria uma cópia do objeto usuario e atribui essa cópia à propriedade selectedUsuario.

    /*OBS. { ...cliente } é um exemplo da sintaxe de espalhamento (spread syntax) do ES6, que é usada para copiar todas as propriedades de um 
     * objeto para um novo objeto.*/
  }

  /* Método que atualiza as informações de um cliente em um array de clientes*/
  onUpdate(updateCliente: Cliente){
    const index = this.clientes.findIndex(u => u.id === updateCliente.id);   // "findIndex" é um método de array que retorna o índice do primeiro elemento que satisfaz a condição fornecida.
    if(index != -1){                                                         // O if verifica se index não é -1, ou seja, verifica se um cliente correspondente foi encontrado no array.
      this.clientes[index] = updateCliente;                                  // Se um cliente correspondente for encontrado, este cliente no array this.clientes é substituído pelo updatedCliente.
    }
  }

}
