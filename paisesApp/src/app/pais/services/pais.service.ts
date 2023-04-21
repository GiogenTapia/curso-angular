import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private _apiURL : String = 'https://restcountries.com/v3.1';

  get httpParams (){
   return  new HttpParams().set('fields','name,capital,cca2,flags,population');
  }


  constructor(private http: HttpClient) { }
  
  public obtenerPais(termino : string): Observable<Country[]> {
    
    const url = `${this._apiURL}/name/${termino}`;
     return this.http.get<Country[]>(url,{params: this.httpParams});

  }

  public obteberCapital(termino: string): Observable<Country[]>{
    const url = `${this._apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  public getPaisID(id: string): Observable<Country>{
    const url = `${this._apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  public buscarRegion( region : string): Observable<Country[]>{
    const url = `${this._apiURL}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});

  }
}
