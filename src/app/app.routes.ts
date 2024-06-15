import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: '/home'}            // Rota Coringa: Redireciona para 'home' se nenhuma rota corresponder
];


/*Acessos: 
 * Testando rota padrão (path: '') - http://localhost:4200/              :. OBS. Nessa rota será visualizado a página Home (http://localhost:4200/home)
 * Testando rota Home (path: 'home') - http://localhost:4200/home
 * Testando rota About (path: 'about') - http://localhost:4200/about
 * Testando rota não correspondente que será redirecionado para Home (path:'**', redirectTo) - http://localhost:4200/teste
*/

/* Observação: 
 * {path: '', component: HomeComponent} 
 * 
 * Rota raiz para ser exibido por padrão o Home. Ou pode configurar uma rota raiz ('') para não carregar nenhum componente inicialmente.
*/