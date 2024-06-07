import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css',
})
export class DiretivasComponent {

  /*OBS. Para usar diretivas é preciso importar o "CommonModule" */

  // variável para exibir ou ocultar o quadrado (OBS. Diretiva *ngIf precisa importar o CommonModule)
  exibir: boolean = true;

  // varável para exibir nome
  nome: string;

  constructor() {
    this.nome = 'Daniel penelva de Andrade';
  }

  exibirQuadrado() {
    if (this.exibir === true) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }
}
