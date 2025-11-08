import { Component } from '@angular/core';
import { ComponentFilhoComponent } from '../component-filho/component-filho.component';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-component-pai',
  standalone: true,
  imports: [ComponentFilhoComponent, FormsModule],
  templateUrl: './component-pai.component.html',
  styleUrl: './component-pai.component.css',
})
export class ComponentPaiComponent {
  profissao: string = 'Desenvolvedor Angular';

  // Testando @Output()
  carro(meuCarro: any): void {
    alert(`Meu carro é: ${meuCarro}`);
  }
}
