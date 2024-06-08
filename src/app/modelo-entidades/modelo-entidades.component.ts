import { UserType } from './../interfaces/Usuario';
import { Component } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';

@Component({
  selector: 'app-modelo-entidades',
  standalone: true,
  imports: [],
  templateUrl: './modelo-entidades.component.html',
  styleUrl: './modelo-entidades.component.css'
})
export class ModeloEntidadesComponent {

  // Exemplo 1 - Criando apenas uma unica instância de usuário
  user: Usuario = {
    id: 1,
    nome: "Daniel",
    cidade: "Rio de Janeiro",
    sobrenome: "Penelva",
    idade: 25,
    usuario: "d4n",
    email: "daniel@gmail.com",
    senha: "123",
    tipo: UserType.Administrador
  }

   // Exemplo 2 - Criando apenas uma unica instância de usuário sem precisar declarar o tipo Usuario, afinal ele já sabe que é do tipo Usuario
  user1 = {
    id: 2,
    nome: "Pablo",
    cidade: "Rio de Janeiro",
    sobrenome: "Nunes",
    idade: 25,
    usuario: "plb",
    email: "pablo@gmail.com",
    senha: "123",
    tipo: UserType.Cliente
  }

  // Exemplo 3 - Criando várias instâncias em um array de usuários
  userVetor: Usuario[] =[
    {
      id: 3,
      nome: "Pedro",
      cidade: "Rio de Janeiro",
      sobrenome: "Silva",
      idade: 34,
      usuario: "pepe",
      email: "pedro@gmail.com",
      senha: "123",
      tipo: UserType.Administrador
    },
    {
      id: 4,
      nome: "Biana",
      cidade: "Rio de Janeiro",
      sobrenome: "Mota",
      idade: 27,
      usuario: "bi4",
      email: "biana@gmail.com",
      senha: "123",
      tipo: UserType.Cliente
    },
    {
      id: 5,
      nome: "Marcio",
      cidade: "Rio de Janeiro",
      sobrenome: "Cunha",
      idade: 57,
      usuario: "m4c",
      email: "marcio@gmail.com",
      senha: "123",
      tipo: UserType.Tecnico
    }
  ]

  // Exemplo 4 - Criando apenas uma unica instância de usuário utilizando casting
  userCasting: Usuario = <Usuario>{
      id: 6,
      nome: "Vanessa",
      cidade: "Rio de Janeiro",
      sobrenome: "Garcia",
      idade: 23,
      usuario: "vass",
      email: "vanessa@gmail.com",
      senha: "123",
      tipo: UserType.Cliente
  }


  // Método para converter UserType para string
  getUserTypeString(tipo: UserType): string {
    return UserType[tipo];
  }

  mostrarUsuario(usuario: Usuario){
    console.log(`ID: ${usuario.id} | Nome ${usuario.nome} | Cidade: ${usuario.cidade} | 
      Sobrenome: ${usuario.sobrenome} | Idade: ${usuario.idade} | Usuario: ${usuario.usuario} |
      Email: ${usuario.email} | Senha: ${usuario.senha} | Tipo: ${this.getUserTypeString(usuario.tipo)}`)
  }

  // Método para exibir todos os exemplos
  mostrarTodosUsuarios(): void {
    
    console.log('Exemplo 1:');
    this.mostrarUsuario(this.user);

    console.log('Exemplo 2:');
    this.mostrarUsuario(this.user1 as Usuario);

    console.log('Exemplo 3');
    this.userVetor.forEach(usuarios => this.mostrarUsuario(usuarios));

    console.log('Exemplo 4');
    this.mostrarUsuario(this.userCasting);
  }
}
