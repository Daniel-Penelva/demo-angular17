import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  nome: string = '';
  cidade: string = '';

  exibir(){
    alert("Nome: " + this.nome + " - Cidade: " + this.cidade);
  }
}

/* Para utilizar formulários em uma aplicação angular vai ser preciso importar o FormsModule. */