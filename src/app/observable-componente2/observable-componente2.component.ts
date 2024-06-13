import { Component } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-observable-componente2',
  standalone: true,
  imports: [],
  templateUrl: './observable-componente2.component.html',
  styleUrl: './observable-componente2.component.css'
})
export class ObservableComponente2Component {

  // Exemplo 2: Usando Operadores com Observables
  result: number;

  ngOnInit(): void {
    const numbers = new Observable<number>(observer =>{
      observer.next(1);                              //observer.next(1), observer.next(2), observer.next(3), observer.next(4) emitem os valores 1, 2, 3 e 4. 
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.complete();                          // observer.complete() sinaliza que o Observable terminou de emitir valores. 
    });
    
    numbers.pipe(
      filter(value => value % 2 == 0),               // permite apenas os números pares (2 e 4) passarem.
      map(value => value * value)                    // transforma esses números pares, elevando-os ao quadrado (4 e 16).
    ).subscribe(value => this.result = value);       // 5.	A cada valor emitido (4 e 16), a propriedade result é atualizada e exibida no template do componente.
  }

}
