import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Mensagem do componente filho");
  }

}

/* O decorador @Output é usado para emitir eventos de um componente filho para um componente pai. Ele permite que um componente filho emita 
 * eventos que o componente pai pode ouvir e responder.*/