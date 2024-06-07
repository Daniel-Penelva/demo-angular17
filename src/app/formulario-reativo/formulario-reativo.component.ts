import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.component.html',
  styleUrl: './formulario-reativo.component.css'
})
export class FormularioReativoComponent {

  // Reactive Forms
  formulario = new FormGroup({
    name: new FormControl(''),
    city: new FormControl('')
  });

}

/*Para utilizar formulário reativo em uma aplicação angular vai ser preciso importar o ReactiveFormsModule, além dos imports FormGroup e FormControl.*/