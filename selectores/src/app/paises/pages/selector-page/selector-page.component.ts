import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises-service.service';
import { Countries } from '../../interfaces/contries.interface';
import { delay, of, switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/contries.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})

export class SelectorPageComponent implements OnInit {
   
  myForm: FormGroup = this._fb.group({
    region:   ['' ,Validators.required],
    country:  ['', Validators.required],
    frontier: ['', Validators.required]
  })

  //llenar selectores
  regions:      string[] = [];
  contries:     Countries[] = [];
 // fronties:     string[] = [];

 fronties:     Countries[] = [];
  cargando: boolean = false;



  constructor( private _fb: FormBuilder,
               private _paisesService : PaisesService ){}


  ngOnInit(): void {
    this.regions = this._paisesService.regions;

    this.myForm.get('region')?.valueChanges
    .pipe(
      tap( ( _ )=>{
        this.myForm.get('country')?.reset('');
        this.cargando = true;
      }),
      delay(1000),
      switchMap(
        region=> this._paisesService.getCountriesByRegion(region)
      )
    )
    .subscribe(countries => {
      console.log(this.contries);
      this.contries = countries;
      this.cargando = false;
    })


    this.myForm.get('country')?.valueChanges
    .pipe(
      tap( ( _ )=>{
        this.fronties = [];
        this.myForm.get('frontier')?.reset('');
        this.cargando = true;
      }),
      delay(1000),
      switchMap( cca=> this._paisesService.getCountryCode(cca)),
      switchMap( contry => this._paisesService.getContriesBorders(contry?.pop()?.borders!)  )
    )
    .subscribe(
      contries=>{
        console.log(contries);
        this.fronties = contries;
       // this.fronties = cca?.pop()?.borders || [];
        this.cargando = false;
       
      }
    )


    // this.myForm.get('region')?.valueChanges.subscribe(
    //   region =>{
    //     this._paisesService.getCountriesByRegion(region).subscribe(
    //       countries =>{
    //         this.contries = countries;
    //         console.log(countries);
    //       }
    //     );
    //   }
    // )


  }

  saving(){}

}
