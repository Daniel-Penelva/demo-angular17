import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-usuario',
  standalone: true,
  imports: [],
  templateUrl: './detalhe-usuario.component.html',
  styleUrl: './detalhe-usuario.component.css',
})
export class DetalheUsuarioComponent implements OnInit {
  usuarioId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!;
  }
}
