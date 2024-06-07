import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";
import { DiretivasComponent } from "./diretivas/diretivas.component";
import { ControlFlowComponent } from "./control-flow/control-flow.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, Componente01Component, DiretivasComponent, ControlFlowComponent]
})
export class AppComponent {
  title = 'demo-angular17';
}
