import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/palces.interface';
import { PlacesApiClient } from '../api/placesApiClient';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _placesApi = inject(PlacesApiClient);

  public userLocation?: [number,number] ;
  public isLoadingPlaces: boolean = false;
  public places: Feature[] =[];

  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  }

  constructor() {
    this.getUserLocation();
  }


  public async getUserLocation(): Promise<[number,number]>{

    return new Promise( (resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=> {
          this.userLocation = [coords.longitude,coords.latitude];
        resolve(this.userLocation);
        },
        (err)=>{
          alert('No se pudo obtener la geolocalizacion');
          console.log(err);
          reject();


        }
      );
    })
  }


  getPlacesByQuery(query: string =''){

    if(!this.userLocation) throw Error('Dont have User Location');

    this.isLoadingPlaces = true;

    this._placesApi.get<PlacesResponse>(`q=${query}`,{
      params:{
        proximity: this.userLocation.join(',')
      }
    })
    .subscribe( resp =>{
      console.log(resp.features);

      this.isLoadingPlaces = false;
      this.places = resp.features;

    } )
  }

}
