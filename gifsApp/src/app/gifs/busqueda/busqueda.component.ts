import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  constructor(private _servicioGifs: GifsService) { }

  ngOnInit(): void {
  }

  //Busca una referencia local
  //En este ejemplo un #txtBuscar

  @ViewChild('txtBuscar') txtBuscar !: ElementRef<HTMLInputElement>;


buscar(){
  
  const valor = this.txtBuscar.nativeElement.value;

  if (valor.trim().length === 0) {
    return;
  }
  
  this._servicioGifs.buscarGifs(valor);
  this.txtBuscar.nativeElement.value = '';
  
}
}
