import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-component-filho',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-filho.component.html',
  styleUrl: './component-filho.component.css',
})
export class ComponentFilhoComponent {
  @Input() nome: string = '';
  @Input() sobrenome = '';
  @Input() idade: number = 0;
  @Input() ativo: boolean = false;

  @Input() marcaCarro: string = '';
  @Input() modeloCarro: string = '';

  @Output() imprimirCarro = new EventEmitter();
}
