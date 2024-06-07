import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  
  // Varíavel de média - control flow @if
  media: number = 9;

  // Vetor - control flow @for
  nomes: string[] = ['Daniel', 'Vanessa', 'Caio', 'Mariana'];

  // linguagem - control flow @switch
  linguagem: string = 'Java';
}
