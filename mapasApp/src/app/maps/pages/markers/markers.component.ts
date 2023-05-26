import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from "mapbox-gl";

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css']
})
export class MarkersComponent {


  @ViewChild('map') divMap?:  ElementRef;
  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-101.19911340522617, 19.70357998824808);

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'HTML element no found';

     this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

      /*
      //Crear elementos HTML
      const markerHtml = document.createElement('div');
      markerHtml.innerHTML = 'Giovanni';
      const marker = new Marker(
        {
          // color: 'red'
          // element: markerHtml
        }
      )
      .setLngLat(this.currentLngLat)
      .addTo(this.map);

*/
  }

}
