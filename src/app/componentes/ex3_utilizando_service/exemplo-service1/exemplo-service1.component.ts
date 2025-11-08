import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-service1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exemplo-service1.component.html',
  styleUrl: './exemplo-service1.component.css'
})
export class ExemploService1Component {

  constructor(private loggerService: LoggerService) {

  }

  nome: string = '';
  sobrenome = '';

  imprimirNomeCompleto() {
    this.loggerService.logar(`Nome Completo cadastrado: ${this.nome} ${this.sobrenome}`);
  }

}
