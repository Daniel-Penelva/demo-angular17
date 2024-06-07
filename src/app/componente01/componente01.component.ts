import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {

  // Variáveis
  nome: string = 'Daniel';
  sobrenome: string = 'Penelva de Andrade';
  idade: number = 35;

  // Função para exibir uma mensagem
  mensagem(){
    alert("Nome Completo: " + this.nome + ' ' + this.sobrenome + " - Idade: " + this.idade);
  }
}
