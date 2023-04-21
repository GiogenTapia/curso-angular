import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;
  constructor(private _http : HttpClient) { 

 
  }

  get auth():Auth{
    return {...this._auth!}
  }

  login(){
    return this._http.get<Auth>(`${this._baseUrl}/usuarios/1`).pipe(
      tap(auth => this._auth = auth ),
      tap(auth => localStorage.setItem('token',auth.id) ))

  }


  verificAuthen(): Observable<boolean> {
    
    if (!localStorage.getItem('token')) {
      return of(false) ;
    }


   return this._http.get<Auth>(`${this._baseUrl}/usuarios/1`).pipe(
      map(auth => {
        this._auth = auth;
        return true
      })
    );

  }
}
