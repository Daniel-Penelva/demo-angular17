import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Para gerar um token - acessa: https://www.jwt.io/
  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

  constructor() { }

  estaAutenticado(): boolean{
    return !!sessionStorage.getItem("access-token");
  }

  // Para gerar um token - acessa: https://www.jwt.io/
  login(email: string, senha: string): boolean {
    if (email === "admin@gmail.com" && senha === "123") {
      sessionStorage.setItem("access-token", this.accessToken);
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.clear();
  }
}
