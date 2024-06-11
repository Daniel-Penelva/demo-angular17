import { Component } from '@angular/core';
import { ChildComponentComponent } from "../child-component/child-component.component";

@Component({
    selector: 'app-parent-component',
    standalone: true,
    templateUrl: './parent-component.component.html',
    styleUrl: './parent-component.component.css',
    imports: [ChildComponentComponent]
})
export class ParentComponentComponent {

  parentMessage: string = 'Mensagem do componente pai';
}