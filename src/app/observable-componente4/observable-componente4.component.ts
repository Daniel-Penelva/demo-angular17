import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observable-componente4',
  standalone: true,
  imports: [],
  templateUrl: './observable-componente4.component.html',
  styleUrl: './observable-componente4.component.css'
})
export class ObservableComponente4Component {

  private messageSubject = new Subject<string>();      // Declaração de um Subject que emitirá valores do tipo string.
  
  message: string;                                     // armazenar e exibir a mensagem recebida.

  ngOnInit(): void {
    this.messageSubject.subscribe(msg =>{              // Toda vez que o Subject emite um valor, o callback da assinatura é chamado, atualizando a propriedade message com o novo valor.
      this.message = msg;
    });
  }

  sendMessage(){
    this.messageSubject.next('Olá Subject!');           // Usa messageSubject.next('Hello from Subject!') para emitir uma nova mensagem. O next é um método do Subject que envia o valor para todos os inscritos.
  }

}
