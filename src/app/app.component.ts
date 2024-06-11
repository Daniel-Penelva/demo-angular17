import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, Componente01Component, DiretivasComponent, ControlFlowComponent, FormularioComponent, FormularioReativoComponent, CrudComponent, ClasseAngularComponent, InterfaceAngularComponent, EnumeradoresAngularComponent, ModeloEntidadesComponent, EventBindingComponent, UserListComponentComponent, ParentComponentComponent, ChildComponentComponent]
})
export class AppComponent {
  title = 'demo-angular17';
}
