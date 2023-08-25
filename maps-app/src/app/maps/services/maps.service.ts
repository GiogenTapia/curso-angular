import { Injectable, inject } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/palces.interface';
import { DirectionsApiClient } from '../api';
import { DirectionsResponse } from '../interfaces';
import { Route } from '../interfaces/directions.interface';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private map?: Map;
  private _markers : Marker[]  = [];
  private _directionsApi = inject(DirectionsApiClient);


  get isMapReady(){
    return !!this.map;
  }

  setMap(map: Map){
    this.map = map;

  }

  flyTo(coords: LngLatLike){
    if (!this.isMapReady) throw Error('This map is not inizialitacion');
    this.map?.flyTo({
      zoom:14,
      center:coords
    }
    )
  }

  createMarkersFromPlaces(places : Feature[], userlocation?: [number, number]){

    if(!this.map) throw Error('Dont have map');


    this._markers.forEach( marker=> marker.remove() );

    const newMarkers = [];
    for (const place of places) {
      const {longitude,latitude} = place.properties.coordinates;
      const popup = new Popup().setHTML(`
      <h6>${place.properties.context}</h6>
      <span>${place.properties.name}</span>
      `);

      const newMarker = new Marker()
      .setLngLat([longitude,latitude])
      .setPopup(popup)
      .addTo(this.map);
      newMarkers.push(newMarker);
    }


    this._markers = newMarkers;
    if(places.length === 0) return;


    //Limts to map
    const bounds = new LngLatBounds();
    newMarkers.forEach( marker => bounds.extend(marker.getLngLat()));
    if(userlocation)bounds.extend(userlocation);


    this.map.fitBounds(bounds,{
      padding: 200
    })
  }

getRouteBetweenPoints(start: [number,number], end : [number,number]){
  this._directionsApi.get<DirectionsResponse>(`/${start.join(',')}; ${end.join(',')}`)
  .subscribe( routes => this.drawPolyline(routes.routes[0]) );
}

private drawPolyline(route: Route){

  console.log({kms: route.distance / 1000, duration: route.duration / 60 });
  if (!this.map) throw Error('Dont have map');

  const coord = route.geometry.coordinates;
  const start = coord[0] as [number,number];
  const bounds = new LngLatBounds();

  coord.forEach(([lng,lat]) => {
    bounds.extend([lng,lat]);
  });


  this.map.fitBounds(bounds,{
    padding: 200
  })

  //Polyline
  const sourceDta: AnySourceData =
  {
    type:'geojson',
    data: {
      type: 'FeatureCollection',
      features:[
        {
          type: 'Feature',
          properties:{},
          geometry:{
            type:'LineString',
            coordinates:coord
          }
        }
      ]
    }
  };

  //Todo: limpiar ruta previa
  if (this.map.getLayer('RouteString')) {
    this.map.removeLayer('RouteString');
    this.map.removeSource('RouteString');

  }

  this.map.addSource('RouteString',sourceDta);
  this.map.addLayer({
    id: 'RouteString',
    type: 'line',
    source: 'RouteString',
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
    paint: {
      'line-color': 'blue',
      'line-width':3
    }
  })


}

}
