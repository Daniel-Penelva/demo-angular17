import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'admin', component:AdminComponent, children:[
        {path: 'dashboard', component: AdminDashboardComponent},
        {path: 'users', component:AdminUsersComponent}
    ]},
    {path: '**', redirectTo: '/home'},      // Esta deve ser a última
];


/*Importante!!! Ajuste da ordem das rotas - A rota wildcard ('**') deve ser a última, após a definição de todas as outras rotas, incluindo as rotas aninhadas. */