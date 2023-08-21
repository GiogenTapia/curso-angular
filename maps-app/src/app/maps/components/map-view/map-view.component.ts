import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})

export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  private _placesService = inject(PlacesService);
  private _mapService = inject(MapsService);

  ngAfterViewInit():void{

    if (!this._placesService.userLocation) throw Error('Not Found Location');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this._placesService.userLocation , // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

      const popup = new Popup()
      .setHTML(`
      <h6>Aqui estoy</h6>
      <span> Estoy en este lugar del mundo</span>
      `);



      new Marker({color: 'red'})
      .setLngLat(this._placesService.userLocation)
      .setPopup(popup)
      .addTo( map);

      this._mapService.setMap( map );

  }

}
