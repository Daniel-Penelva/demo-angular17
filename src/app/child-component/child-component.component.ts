import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {

  @Input() message: string; // a propriedade message vai ser chamada na tag <app-child-component [message]="parentMessage"> dentro do template parentComponent
}

/* O decorador @Input é usado para passar dados de um componente pai para um componente filho. Ele permite que um componente pai passe dados para 
 * um componente filho através da vinculação de propriedades. */