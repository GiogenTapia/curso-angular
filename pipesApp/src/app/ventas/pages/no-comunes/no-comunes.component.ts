import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Giovanna';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //I18Plural
  clientes: string[] = ['Ernesto', 'Giovanni','Quetzal','Monty','Juanma'];
  clientesMapa = {
    '=0': 'No tenemos nungún cliente esperando.',
    '=1': 'Tenemos 1 cliente esperando.',
    '=2': 'Tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
   switch (this.genero) {
    case 'masculino':
      this.genero = 'femenino';
      this.nombre = 'Giovanna'
      break;
   
    case 'femenino':
      this.genero = 'masculino';
      this.nombre = 'Giovanni'
      break;
   }
  }

  borrarCliente(){
    
    this.clientes.shift();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Giovanni',
    edad: 23,
    direccion: 'Mi casa'
  }

  //Json Pipe

  heroes = [{
    nombre: 'Batman',
    vuela: true

  },
  {
    nombre: 'Superman',
    vuela: true

  },
  {
    nombre: 'Literna Verde',
    vuela: true

  }];


  //Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6.....

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data promesa')
    },3500)

  });

}
