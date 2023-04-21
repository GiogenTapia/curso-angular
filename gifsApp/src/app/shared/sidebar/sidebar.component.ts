import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  

  constructor(private _serviceGifs : GifsService) { 

  }

  ngOnInit(): void {
  }

  get historial(){
    return this._serviceGifs.historial;
  }
  
  buscar(query : string){

    this._serviceGifs.buscarGifs(query);

  }

}
