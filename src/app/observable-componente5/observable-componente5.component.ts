
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-observable-componente5',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './observable-componente5.component.html',
  styleUrl: './observable-componente5.component.css'
})
export class ObservableComponente5Component implements OnInit{

  searchControl = new FormControl();

  results$: Observable<string[]>;

  constructor(private http: HttpClient){ }

  ngOnInit() {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),                                          // Espera 300ms após o usuário parar de digitar
      distinctUntilChanged(),                                     // Ignora se o valor é o mesmo que o anterior
      switchMap(query => this.search(query))                      // Troca para o novo observable de pesquisa
    );
  }

  search(query: string): Observable<string[]> {
    return this.http.get<string[]>(`https://api.example.com/search?q=${query}`);
  }
}
