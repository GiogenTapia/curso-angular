import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from "mapbox-gl";


interface MarkerAndColor{
  color: string,
  marker:Marker
}

interface PlainMarker {
  color: string,
  lngLat: number[]
}

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css']
})
export class MarkersComponent {


  @ViewChild('map') divMap?:  ElementRef;

  public markers: MarkerAndColor[] = [];
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

      this.readFromLocalStorage();

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

  createMarker(){
    if(!this.map) return ;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat,color);
  }

  addMarker(lngLat : LngLat, color: string){
    if(!this.map) return;

    const marker = new Marker({
      color:color,
      draggable: true
    })
    .setLngLat(lngLat)
    .addTo(this.map);

    this.markers.push({color,marker});
    this.saveToLocalStorage();

    marker.on('dragend', ()=>{
      this.saveToLocalStorage()
    } )

  }


  deleteMarker(index : number){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker: Marker){
    this.map?.flyTo({
      zoom:14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage(){

    console.log(this.markers);
    const plainMarker: PlainMarker[] = this.markers.map(({color, marker})=>{

      return {
        color,
        lngLat : marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarker));

  }

  readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMarkers')?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);//! OJO!

    plainMarkers.forEach( ({color, lngLat}) =>{

      const [lng, lat] = lngLat;
      const coords = new LngLat(lng,lat);
      this.addMarker(coords,color);

    })

  }

}
