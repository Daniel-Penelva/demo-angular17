import { Component } from '@angular/core';
import { FilhoComponent } from "../filho/filho.component";

@Component({
    selector: 'app-pai',
    standalone: true,
    templateUrl: './pai.component.html',
    styleUrl: './pai.component.css',
    imports: [FilhoComponent]
})
export class PaiComponent {

  message: string;

  receiveMessage($event: string) {
    this.message = $event;
  }
}
