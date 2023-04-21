import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SerchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _apikey: string = '7BGrry8LOwtsF1t5M3rsVQarX3Ii7gdQ';
  private _historial: string[] = [];
  private _servicioURL = 'https://api.giphy.com/v1/gifs';

  //Cambiar Any por su tipo corres
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) { 

      this._historial =  JSON.parse(localStorage.getItem('historial')!) || [];
      this.resultados = JSON.parse(localStorage.getItem('ultimo')!) || [];
  }

  get historial() {
    return [...this._historial];
  }


  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
    .set('api_key',this._apikey)
    .set('q',query)
    .set('limit','10');

    this.http.get<SerchGifsResponse>(`${this._servicioURL}/search`,{params})
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('ultimo', JSON.stringify(this.resultados));
      });

  }

}
