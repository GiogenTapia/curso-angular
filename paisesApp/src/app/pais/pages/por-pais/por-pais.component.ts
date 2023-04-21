import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

 termino : string = '';
 hayError : boolean = false;
 paises : Country[] = [];
 paisesSug : Country[] = [];
 mostrarSug : boolean = false;


  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }
  
  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSug = false;
    this.paisService.obtenerPais(this.termino).subscribe(
      (paises)=>
      {
        
        this.paises = paises;
       
      },(err)=>{

        this.hayError = true;
        this.paises = [];

      }
    )
  
  }

  buscarSugerido(termino : string){
    this.buscar(termino);
    
  }

  sugerencias(termino : string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSug = true;

    if(termino===""){
      this.mostrarSug = false;
      return;
    }
    this.paisService.obtenerPais(termino).subscribe(
      paises=> this.paisesSug = paises.splice(0,5),
      (err)=> this.paisesSug = []
    );
  }
}
