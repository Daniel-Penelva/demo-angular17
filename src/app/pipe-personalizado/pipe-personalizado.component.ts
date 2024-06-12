import { Component } from '@angular/core';
import { ReversePipe } from '../pipes/reverse.pipe';

@Component({
  selector: 'app-pipe-personalizado',
  standalone: true,
  imports: [ReversePipe],
  templateUrl: './pipe-personalizado.component.html',
  styleUrl: './pipe-personalizado.component.css'
})
export class PipePersonalizadoComponent {

  message: string = 'Pipe Personalizado';
}


/* OBS. Vale ressaltar que tem que importar o pipe personalizado: ReversePipe */