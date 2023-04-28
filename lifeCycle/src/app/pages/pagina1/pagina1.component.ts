import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  //Esto es para cuando el componente esta creado
  //y podemos acceder al html
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  //En esta parte se realizan inyeccciones de dependencias.
  constructor(){
    console.log('constructor');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log('Method not implemented.');
  }
  ngAfterContentInit(): void {
   console.log('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    console.log('Method not implemented.');
  }
  ngAfterViewInit(): void {
    console.log('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }


}
