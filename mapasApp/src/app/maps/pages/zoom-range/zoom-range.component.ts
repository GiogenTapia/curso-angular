import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import{ Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"



@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit {

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
