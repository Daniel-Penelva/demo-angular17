import { Component } from '@angular/core';
import { AccessLevel } from '../enums/accessLevel.enum';

@Component({
  selector: 'app-enumeradores-angular',
  standalone: true,
  imports: [],
  templateUrl: './enumeradores-angular.component.html',
  styleUrl: './enumeradores-angular.component.css'
})
export class EnumeradoresAngularComponent {

  // Tornando o enum acessível no template .html,  inclui o enum como uma propriedade
  AccessLevel = AccessLevel;

  // Variável que define o nível de acesso de usuário atual, no caso, define o valor inicial, User ,da propriedade.
  currentUserAccessLevel: AccessLevel = AccessLevel.User;

  constructor() {}

  // Captura o valor de acesso
  get accessLevel(): string {
    return AccessLevel[this.currentUserAccessLevel];
  }

  // Método que atualiza a propriedade currentUserAccessLevel para o valor passado no parâmetro level.
  setAccessLevel(level: AccessLevel): void {
    this.currentUserAccessLevel = level;
  }

}
