import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";
import { DiretivasComponent } from "./diretivas/diretivas.component";
import { ControlFlowComponent } from "./control-flow/control-flow.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { FormularioReativoComponent } from "./formulario-reativo/formulario-reativo.component";
import { CrudComponent } from "./crud/crud.component";
import { ClasseAngularComponent } from './classe-angular/ClasseAngularComponent';
import { InterfaceAngularComponent } from "./interface-angular/interface-angular.component";
import { EnumeradoresAngularComponent } from "./enumeradores-angular/enumeradores-angular.component";
import { ModeloEntidadesComponent } from "./modelo-entidades/modelo-entidades.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { UserListComponentComponent } from "./user-list-component/user-list-component.component";
import { ParentComponentComponent } from "./parent-component/parent-component.component";
import { ChildComponentComponent } from "./child-component/child-component.component";
import { FilhoComponent } from "./filho/filho.component";
import { PaiComponent } from "./pai/pai.component";
import { ComponentePaiComponent } from "./componente-pai/componente-pai.component";
import { SintaxeEspalhamentoComponent } from "./sintaxe-espalhamento/sintaxe-espalhamento.component";
import { PipeComponentComponent } from "./pipe-component/pipe-component.component";
import { PipePersonalizadoComponent } from "./pipe-personalizado/pipe-personalizado.component";
import { ObservableComponenteComponent } from "./observable-componente/observable-componente.component";
import { ObservableComponente2Component } from "./observable-componente2/observable-componente2.component";
import { ObservableComponente3Component } from "./observable-componente3/observable-componente3.component";
import { ObservableComponente4Component } from "./observable-componente4/observable-componente4.component";
import { ObservableComponente5Component } from "./observable-componente5/observable-componente5.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule, 
      RouterOutlet, 
      Componente01Component, 
      DiretivasComponent, 
      ControlFlowComponent, 
      FormularioComponent, 
      FormularioReativoComponent, 
      CrudComponent, 
      ClasseAngularComponent, 
      InterfaceAngularComponent, 
      EnumeradoresAngularComponent, 
      ModeloEntidadesComponent, 
      EventBindingComponent, 
      UserListComponentComponent, 
      ParentComponentComponent, 
      ChildComponentComponent, 
      FilhoComponent, 
      PaiComponent, 
      ComponentePaiComponent, 
      SintaxeEspalhamentoComponent, 
      PipeComponentComponent, 
      PipePersonalizadoComponent, 
      ObservableComponenteComponent, 
      ObservableComponente2Component, 
      ObservableComponente3Component, 
      ObservableComponente4Component, 
      ObservableComponente5Component, 
      HomeComponent, 
      AboutComponent, 
      RouterModule, 
      AdminComponent, 
      AdminDashboardComponent, 
      AdminUsersComponent
    ]
})
export class AppComponent {
  title = 'demo-angular17';
}
