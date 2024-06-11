import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getUsers(){
    return [
      { id: 1, nome: 'Daniel', cidade: 'Rio de Janeiro', sobrenome: 'Penelva', idade: 25 },
      { id: 2, nome: 'Pablo', cidade: 'Rio de Janeiro', sobrenome: 'Nunes', idade: 25 },
      { id: 3, nome: 'Pedro', cidade: 'Rio de Janeiro', sobrenome: 'Silva', idade: 34 },
      { id: 4, nome: 'Biana', cidade: 'Rio de Janeiro', sobrenome: 'Mota', idade: 27 },
      { id: 5, nome: 'Marcio', cidade: 'Rio de Janeiro', sobrenome: 'Cunha', idade: 57 }
    ];
  }
}

/* Comando para criar um arquivo service: ng g s <nome_service> */