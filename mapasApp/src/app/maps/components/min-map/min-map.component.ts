import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from "mapbox-gl";
@Component({
  selector: 'map-min-map',
  templateUrl: './min-map.component.html',
  styleUrls: ['./min-map.component.css']
})
export class MinMapComponent implements AfterViewInit{

  @Input() lngLat?: [number,number];
  @ViewChild('map') divMap?:  ElementRef;

  public map?: Map;

  ngAfterViewInit(): void {

   if(!this.divMap?.nativeElement) throw "Map Div not found";
   if(!this.lngLat) throw "LngLat can't be null";

   this.map = new Map({
    container: this.divMap?.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.lngLat, // starting position [lng, lat]
    zoom: 15,
    interactive: false
   });

   new Marker()
  .setLngLat(this.lngLat)
  .addTo(this.map);



  }







}
