import { Component, inject } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  private _mapService = inject(MapsService);
  private _placeService = inject(PlacesService);

  constructor(){}

  goToMyLocation(){
    if(!this._placeService.isUserLocationReady) throw Error ('Dont have location');
    if (!this._mapService.isMapReady) throw Error('The map is not inizialitacion');

    this._mapService.flyTo(this._placeService.userLocation!);

  }

}
