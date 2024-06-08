export interface Usuario {
  id: number;
  nome: string;
  cidade: string;
  sobrenome: string;
  idade: number;
  usuario: string;
  email: string;
  senha: string
  tipo: UserType
}

export enum UserType{
  Administrador,
  Cliente,
  Tecnico
}
