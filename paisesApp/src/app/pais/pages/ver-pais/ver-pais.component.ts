import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country, Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  lenguas: string = '';

  constructor(private activateRoute: ActivatedRoute,
    private servicePais :PaisService) { }

  ngOnInit(): void {

    this.activateRoute.params.pipe(
      switchMap(({id})=>this.servicePais.getPaisID(id) ),tap(
        console.log
      ))
    .subscribe(pais=>{
      this.pais = pais[0];
       
    } );
  }

}
