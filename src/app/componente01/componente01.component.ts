import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css',
})
export class Componente01Component {
  // Variáveis
  lampadaAcessa: string = 'assets/img/lampada_acessa.jpg';

  // Função para alterar a lâmpada
  alterarImagem() {
    if (this.lampadaAcessa === 'assets/img/lampada_acessa.jpg') {
      this.lampadaAcessa = 'assets/img/lampada_apagada.png';
    } else {
      this.lampadaAcessa = 'assets/img/lampada_acessa.jpg';
    }
  }
}
