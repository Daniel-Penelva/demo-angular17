import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-component.component.html',
  styleUrl: './pipe-component.component.css'
})

export class PipeComponentComponent {

  // Exemplo 1 - DatePipe
  hoje: number = Date.now();

  // Exemplo 2 - UpperCasePipe e LowerCasePipe
  nomeCompleto: string = 'Daniel Penelva de Andrade';

  // Exemplo 3 - CurrencyPipe
  preco: number = 1234.56;

  // Exemplo 4 - PercentPipe
  ratio: number = 0.75;
  
}
