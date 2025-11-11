import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pagina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-pagina.component.html',
  styleUrl: './login-pagina.component.css'
})
export class LoginPaginaComponent implements OnInit{

  email: string | null = "";
  senha: string | null = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logar() {
    if (this.authService.login(this.email, this.senha)) {
      this.router.navigate(["pagina-protegida"]);
      return;
    }

    alert("Login inválido");
    this.email = "";
    this.senha = "";
  }

}
