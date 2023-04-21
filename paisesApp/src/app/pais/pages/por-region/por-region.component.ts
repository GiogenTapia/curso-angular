import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {
 
  // regiones :  string [] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
 
  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';

  paises : Country[] = [];


 constructor(private paisService : PaisService ) { }

  ngOnInit(): void {
  }

  activarRegion(region: string){

    if(this.regionActiva == region){ return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe(
      (paises)=>{
        this.paises = paises;
      }
    );

  }
  getClaseCss(reg : string): string{
    return (reg === this.regionActiva) ?  'btn btn-primary animate__animated animate__pulse': 'btn btn-outline-primary';
    }
  
}
