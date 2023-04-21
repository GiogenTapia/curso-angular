import { Component } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  enMayusculas: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] =[{
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Robin',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Linterna Verde',
    vuela: true,
    color: Color.verde
  },

] ;


cambiar(){
  this.enMayusculas = (this.enMayusculas)? false : true;
}

cambiarOrden(valor:string){
  this.ordenarPor = valor;
}

}
