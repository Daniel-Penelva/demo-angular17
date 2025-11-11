import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { PrimeiraPaginaComponent } from './componentes/ex6_rotas/primeira-pagina/primeira-pagina.component';
import { PaginaInicialComponent } from './componentes/ex6_rotas/pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './componentes/ex6_rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametroComponent } from './componentes/ex6_rotas/pagina-com-parametro/pagina-com-parametro.component';
import { PaginaProtegidaComponent } from './componentes/ex6_rotas/pagina-protegida/pagina-protegida.component';
import { authGuard } from './componentes/ex6_rotas/guard/auth.guard';
import { LoginPaginaComponent } from './componentes/ex6_rotas/login-pagina/login-pagina.component';

export const routes: Routes = [
   /* {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'admin', component:AdminComponent, children:[
        {path: 'dashboard', component: AdminDashboardComponent},
        {path: 'users', component:AdminUsersComponent}
    ]},
    {path: 'usuarios', component: ListaUsuariosComponent},
    {path: 'usuarios/:id', component: DetalheUsuarioComponent},
    {path: '**', redirectTo: '/home'},      // Esta deve ser a última
    */
    
    {path: 'pagina-inicial', component: PaginaInicialComponent},
    {path: 'primeira-pagina', component: PrimeiraPaginaComponent},
    {path: '', redirectTo: "primeira-pagina", pathMatch: "full"}, // Garante que o caminho raiz vai ser sempre 'primeira-pagina'
    {path: 'pagina-com-parametro/:id', component: PaginaComParametroComponent},
    {path: 'pagina-protegida', component: PaginaProtegidaComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginPaginaComponent},
    {path: "**", component: PaginaNaoEncontradaComponent}, // Utilizando path:"**" garante que qualquer rota inexistente vai encaminha para a página não encontrada. E esta deve ser a última 

];


/*Importante!!! Ajuste da ordem das rotas - A rota wildcard ('**') deve ser a última, após a definição de todas as outras rotas, incluindo as rotas aninhadas. */