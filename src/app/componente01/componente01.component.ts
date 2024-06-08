import { Component } from '@angular/core';
import { UserType, Usuario } from '../interfaces/Usuario';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css',
})
export class Componente01Component {
  // Variáveis
  lampadaAcessa: string = 'assets/img/lampada_acessa.jpg';

  // Função para alterar a lâmpada
  alterarImagem() {
    if (this.lampadaAcessa === 'assets/img/lampada_acessa.jpg') {
      this.lampadaAcessa = 'assets/img/lampada_apagada.png';
    } else {
      this.lampadaAcessa = 'assets/img/lampada_acessa.jpg';
    }
  }

  // Exemplo 1 - Interpolação `${}`
  nome: string = "Daniel";
  idade: number = 25;
  mensagem: string;
  mensagemUsuario: string;

  /* Exemplo 1 - ngOnInit é um bom lugar para inicializar lógica que depende das propriedades da classe, pois ele é chamado depois que Angular inicializa as propriedades ligadas a dados do componente. */
  ngOnInit(): void {
    this.mensagem = `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    console.log(this.mensagem);  // Mostra no console quando inicializado
  }

  mostrarPessoa(){
    this.mensagem = `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    alert(this.mensagem);
  }


  // Exemplo 2
  usuario: Usuario = {
    id: 1,
    nome: "Daniel",
    cidade: "Rio de Janeiro",
    sobrenome: "Penelva",
    idade: 25,
    usuario: "d4n",
    email: "daniel@gmail.com",
    senha: "123",
    tipo: UserType.Administrador
  };

  // Método para converter UserType para string
  getUserTypeString(tipo: UserType): string {
    return UserType[tipo];
  }

  criarMensagemUsuario(usuario: Usuario): string{
    return `ID: ${usuario.id} | Nome ${usuario.nome} | Cidade: ${usuario.cidade} | 
    Sobrenome: ${usuario.sobrenome} | Idade: ${usuario.idade} | Usuario: ${usuario.usuario} |
    Email: ${usuario.email} | Senha: ${usuario.senha} | Tipo: ${this.getUserTypeString(usuario.tipo)}`
  }

  mostrarUsuario(){
    this.mensagemUsuario = this.criarMensagemUsuario(this.usuario);
    alert(this.mensagemUsuario);
  }

}

/* Exemplo extra com características do Template Literal:
 * Interpolação de Variáveis: ${produto.nome}, ${produto.preco.toFixed(2)}, ${produto.quantidade}, ${(produto.preco * produto.quantidade).toFixed(2)}.
 * Expressões Complexas: (produto.preco * produto.quantidade).toFixed(2) calcula o valor total em estoque e o formata com duas casas decimais.*/