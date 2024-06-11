import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  // Exemplon 1 - utilizando o (click)
  mensagem: string = 'Qual o seu nome?';
  nome: string = '';

  atualizarMensagem(){
    this.mensagem = `Olá ${this.nome}`;
  }

  // Exemplo 2 - utilizando o (input)
  texto: string = '';

  atualizarTexto(event: any){
    this.texto = event.target.value;
  }

  // Exemplo 3 - utilizando o (change)
  seleccion: string = 'Maça';

  onSelectChange(event: any){
    console.log('Fruta Selecionada: ', this.seleccion);
  }

  // Exemplo 4 - utilizando (dbclick)
  cor: string = 'black';

  mudarCor(){
    this.cor = this.cor === 'black' ? 'blue' : 'black';
  }

  // Exemplo 5 - utilizando (keydown)
  ultimaTecla: string = '';

  registrarTecla(event: KeyboardEvent) {
    this.ultimaTecla = event.key;
  }

  // Exemplo 6 - utilizando (submit)
  marcaCarro: string = '';
  modeloCarro: string = '';

  onSubmit(form: any){
    console.log('Marca do carro: ', form.marcaCarro);
    console.log('Modelo do carro: ', form.modeloCarro);
  }
  
}
