import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  mensagens: string[] = [];

  logar(mensagem: string) {
    alert(mensagem);
    console.log(mensagem);
    this.mensagens.push(mensagem);
  }

  exibirMenssagens() {
    console.log('Mensagens registradas no LoggerService:');
    this.mensagens.forEach(msg => console.log(msg));
  }
}
