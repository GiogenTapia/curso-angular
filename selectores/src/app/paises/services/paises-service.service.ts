import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { Countries, Country } from '../interfaces/contries.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regions: string [] = ['Africa','Europe','Asia','Americas','Oceania'];
  private _baseUrl: string = 'https://restcountries.com/v3.1';

  get regions(): string[]{
    return [...this._regions];
  }

  constructor(private _http : HttpClient) { }

  getCountriesByRegion(region : string): Observable<Countries[]>{
    const url: string = `${this._baseUrl}/region/${region}/?fields=cca3,name`;
   return  this._http.get<Countries[]>(url);
  }

  getCountryCode(code : string): Observable<Country[] | null>{
    
    
    if(!code){
      return of(null);
    }
    console.log(code);
    const url: string = `${this._baseUrl}/alpha/${code}`;
    return this._http.get<Country[]>(url);

  }

  getCountryCodeSmall(code : string ): Observable<Countries>{
    
    console.log(code);
    const url: string = `${this._baseUrl}/alpha/${code}?fields=name,cca3`;
    return this._http.get<Countries>(url);

  }

  getContriesBorders(borders: string[]): Observable<Countries[]> {
    if (!borders) {
      return of([]);
    }

    const peticiones : Observable<Countries> []= [];

    borders.forEach( code =>{
      const peticion = this.getCountryCodeSmall(code);
      peticiones.push(peticion);
    });

    return combineLatest( peticiones );

  }


}
