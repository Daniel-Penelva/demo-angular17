import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(valor: string, deveriaReverter: boolean): string {
    return deveriaReverter ? valor.split('').reverse().join('') : valor;
  }

}

/* Comando para criar pipe: ng g p <nome_pipe> */