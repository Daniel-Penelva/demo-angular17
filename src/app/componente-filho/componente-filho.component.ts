import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-filho',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css'
})
export class ComponenteFilhoComponent {

  @Input() cliente: Cliente;  // @Input é usado para passar dados de um componente pai para um componente filho
  @Output() clienteChange = new EventEmitter<Cliente>();  // @Output é usado para emitir eventos de um componente filho para um componente pai

  onEdit(){
    this.clienteChange.emit(this.cliente);
  }

}
