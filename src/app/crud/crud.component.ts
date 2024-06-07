import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  // Sem StrictNullChecks - - Não podemos criar variáveis sem especificar o valor.
  // nome: string = 'Daniel' // Correto!
  // nome: string = ''       // Correto!
  // nome: string;           // Erro!
  // idade: number = null;   // Erro!


  // Com StrictNullChecks - Agora, podemos criar variáveis e não especificar o valor.
  nome: string;
  idade: number = null;
}

/* O strictNullChecks é uma opção do compilador TypeScript que ajuda a evitar bugs relacionados a valores null e undefined no código.
 * Para conseguirmos flexibilizar o uso de variáveis e objetos sem inicialização, basta procurar o arquivo tsconfig.json e adicione o comando:
 * "strictNullChecks": false.
*/