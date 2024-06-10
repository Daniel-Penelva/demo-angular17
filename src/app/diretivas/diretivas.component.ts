import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css',
})
export class DiretivasComponent {

  /*OBS. Para usar diretivas é preciso importar o "CommonModule" */

  // variável para exibir ou ocultar o quadrado (OBS. Diretiva *ngIf precisa importar o CommonModule)
  exibir: boolean = true;

  // varável para exibir nome
  nome: string;

  // Vetor de nomes (Diretiva *ngFor)
  nomes: string[] = ['Pedro', 'Davi', 'José', 'Pablo'];
  cores: string[] = ['Laranja', 'Verde', 'Amarelo', 'Azul', 'Preto']

  // Váriavel para exibir linguagem (Diretiva [ngSwitch])
  linguagem: string = 'Java';

  // variável lógica (Diretiva [ngStyle])
  condicao: boolean = true;

  // Lista de aprovados e reprovados
  situacao: string[] = ['Aprovado', 'Aprovado', 'Reprovado'];

  isLogged: boolean = false;

  nivel: number = 5;

  // variavel seleccion - Exemplo diretiva [(ngModel)] - IMPORTANTE: Para utilizar a diretiva ngModel tem que importar o FormsModule.
  seleccion: string = 'Toyota';

  constructor() {
    this.nome = 'Daniel penelva de Andrade';
  }

  onSelectChange(event: any){
    console.log('Carro Selecionado: ', this.seleccion);
  }

  exibirQuadrado() {
    if (this.exibir === true) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }
}
