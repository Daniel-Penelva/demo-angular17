import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-componente3',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './observable-componente3.component.html',
  styleUrl: './observable-componente3.component.css'
})
export class ObservableComponente3Component {

  data: any;

  /* O HttpClient é injetado no componente através do construtor. Isso permite que o componente use HttpClient para fazer solicitações HTTP. */
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData().subscribe(response => {                 // faz uma solicitação HTTP e se inscreve no Observable retornado por getData().
      this.data = response;                                // é chamado e a propriedade data é atualizada com os dados recebidos.
    });
  }

  getData(): Observable<any> {                                             // retorna um Observable que emite os dados recebidos da solicitação HTTP GET para a URL https://jsonplaceholder.typicode.com/posts.
    return this.http.get('https://jsonplaceholder.typicode.com/posts');    // usa HttpClient para fazer uma solicitação HTTP GET.
  }
}
