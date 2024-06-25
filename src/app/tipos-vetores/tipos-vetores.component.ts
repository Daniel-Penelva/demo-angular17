import { Component } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { AccessLevel } from '../enums/accessLevel.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tipos-vetores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tipos-vetores.component.html',
  styleUrl: './tipos-vetores.component.css'
})
export class TiposVetoresComponent {

  // Vetor de numeros
  numeros: number[] = [1, 2, 3, 4, 5];


  // Vetor de strings
  frutas: string[] = ['Maça', 'Abacaxi', 'Mamão', 'Uva'];


  // Vetor de booleans
  booleans: boolean[] = [true, false, false, true];


  // Vetor de vetores
  arraysOfArrays: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];


  // Vetor de qualquer tipo (any)
  mixedArray: any[] = [1, 'Daniel', true, {id: 1, nome: 'Object'}];


  // Vetor de tipo genérico
  getArray<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
  }

  numberArray = this.getArray<number>([1, 2, 3, 4]);
  stringArray = this.getArray<string>(['a', 'e', 'i', 'o', 'u']);


  // Vetor de objetos
  clientes: Cliente[] = [
    { id: 1,
      nome: 'Daniel',
      cidade: 'RJ',
      sobrenome: 'Penelva',
      idade: 34,
      email: 'd4n.andrade@gmail.com'
    },
    { id: 2,
      nome: 'Vanessa',
      cidade: 'SP',
      sobrenome: 'Silva',
      idade: 33,
      email: 'vanessa@gmail.com'
    }
  ];


  // Vetor de enums
  acessLevel: AccessLevel[] = [
    AccessLevel.Admin,
    AccessLevel.Guest,
    AccessLevel.User
  ];

  AccessLevel = AccessLevel;  // add a referencia enum em um template

}

