import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-ciclo-de-vida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css',
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  horario = new Date();
  timer: any = null;

  @Input() texto: string;

  ngOnInit(): void {
    console.log('Componente iniciado');
    this.timer = setInterval(() => {
      (this.horario = new Date()), 1000;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Houve mudanças no componente', changes);
    this.timer = setInterval(() => {
      (this.horario = new Date()), 1000;
    });
  }

  // Destroi o componente sempre que ele é alterado ou removido da tela
  ngOnDestroy(): void {
      console.log("Componente destruido");
      if(this.timer) {
        clearInterval(this.timer);
      }
  }
  
}
