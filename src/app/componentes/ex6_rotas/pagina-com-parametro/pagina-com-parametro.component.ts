import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pagina-com-parametro',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pagina-com-parametro.component.html',
  styleUrl: './pagina-com-parametro.component.css'
})
export class PaginaComParametroComponent implements OnInit{
  
  id: number | null = null;
  nome: string | null ="";
  idade: number | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = Number(params.get("id"));  // fazendo um parser Number para capturar o id pelo get
      });

      this.route.queryParamMap.subscribe(params => {
        this.nome = params.get("nome");
        this.idade = Number(params.get("idade"));
      });

      // Para testar parâmetro de rota: http://localhost:4200/pagina-com-parametro/1
      // Para testar parâmetro de consulta: http://localhost:4200/pagina-com-parametro/1?nome=%22Daniel%22&idade=36

  }

  

}
