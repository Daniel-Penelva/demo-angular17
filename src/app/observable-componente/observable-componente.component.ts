import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-componente',
  standalone: true,
  imports: [],
  templateUrl: './observable-componente.component.html',
  styleUrl: './observable-componente.component.css'
})
export class ObservableComponenteComponent {

  // Exemplo 1: Criando e Subscrivendo a um Observable
  message: string;

  // Cada valor emitido atualiza a propriedade message, que é exibida no template do componente.
  ngOnInit(): void {
    const myObservable = new Observable<string>(observer => {
      observer.next('Olá');
      observer.next('Angular');
      observer.next('Desvendando');
      observer.next('Observable');
      observer.complete();
    });

    myObservable.subscribe({
      next: value => this.message = value,
      error: err => console.error('Error' + err),
      complete: () => console.log('Observable completed')
    });
    
  }
}
