import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heores: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {

    switch (ordenarPor) {
      case 'nombre':
        return heores = heores.sort((a,b)=>(a.nombre > b.nombre? 1 : -1) );

        break;

    case 'vuela':
      return heores = heores.sort((a,b)=>(a.vuela > b.vuela? 1 : -1) );

    break;

    case 'color':
      return heores = heores.sort((a,b)=>(a.color > b.color? 1 : -1) );

    break;


      default:
        return heores;
        break;
    }
    
 
    
  }

}
