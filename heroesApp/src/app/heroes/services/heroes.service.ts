import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _baseUrl: string = environment.baseUrl;
  constructor( private http : HttpClient) { }


  getHeroes(): Observable<Hero[]>{
    return  this.http.get<Hero[]>(`${this._baseUrl}/heroes`);
  }

  getHeroID(id: string): Observable<Hero>{
    return this.http.get<Hero>(`${this._baseUrl}/heroes/${id}`);

  }

  getsuggestions(term : string): Observable<Hero[]>{
    return  this.http.get<Hero[]>(`${this._baseUrl}/heroes?q=${term}&_limit=6`);
  }

  addHero(hero : Hero):Observable<Hero>{
    return this.http.post<Hero>(`${this._baseUrl}/heroes`,hero)
  }

  editHero(hero : Hero):Observable<Hero>{
    return this.http.put<Hero>(`${this._baseUrl}/heroes/${hero.id}`,hero)
  }

  deleteHero(id : string):Observable<any>{
    return this.http.delete<any>(`${this._baseUrl}/heroes/${id}`)
  }
}
