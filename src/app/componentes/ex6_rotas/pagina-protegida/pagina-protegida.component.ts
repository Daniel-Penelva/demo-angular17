import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-protegida',
  standalone: true,
  imports: [],
  templateUrl: './pagina-protegida.component.html',
  styleUrl: './pagina-protegida.component.css'
})
export class PaginaProtegidaComponent {

  constructor(private authService: AuthService, private router: Router){}

  sair() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
