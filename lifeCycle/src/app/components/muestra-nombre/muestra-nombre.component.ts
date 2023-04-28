import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styleUrls: ['./muestra-nombre.component.css']
})
export class MuestraNombreComponent implements OnInit, OnChanges { 

@Input () nombre!: string

ngOnInit(): void {

}

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  

  
}





}