import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import{ Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"



@Component({
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements AfterViewInit {

  @ViewChild('map') divMap?:  ElementRef;

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'HTML element no found';

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }

}
