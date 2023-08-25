import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { Feature } from '../../interfaces/palces.interface';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  private _placeService = inject(PlacesService);
  private _mapService = inject(MapsService);
  public selectedId : string = '';


  get isLoadingPlaces(): boolean{
    return this._placeService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this._placeService.places
  }

  flyTo(place : Feature){

    this.selectedId = place.id;

    const {longitude,latitude} = place.properties.coordinates;
    this._mapService.flyTo([longitude,latitude]);

  }

  getDirections(place: Feature){

    if (!this._placeService.userLocation) throw Error('Dont have user location');

    this._placeService.deletePlaces();
    const start =this._placeService.userLocation;
    const end = place.geometry.coordinates as [number,number];

    this._mapService.getRouteBetweenPoints(start,end);

  }



}
