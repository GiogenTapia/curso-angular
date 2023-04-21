import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {


  termino : string = '';
  hayError : boolean = false;
  paises : Country[] = [];

  constructor(private PaisService : PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.PaisService.obteberCapital(this.termino).subscribe(
      (paises)=>
      {
        this.paises = paises;
       
      },(err)=>{

        this.hayError = true;
        this.paises = [];

      }
    )
  
  }

  sugerencias(termino : string){
    this.hayError = false;

  }
}
