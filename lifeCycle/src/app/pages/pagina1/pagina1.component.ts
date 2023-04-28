import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from "rxjs";
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  

  nombre : string = 'Gio';
  segundos: number = 0;
  timerSusb !: Subscription;
  //Esto es para cuando el componente esta creado
  //y podemos acceder al html
  ngOnInit(): void {
    console.log('ngOnInit');
   this.timerSusb = interval(1000).subscribe(i =>{
      console.log(i);
      this.segundos = i;
    })
  }
 
  //En esta parte se realizan inyeccciones de dependencias.
  //el constructor se ejecuta primero por la nueva instancia
  constructor(){
    console.log('constructor');
    
  }

  //Este se ejecuta cuando algun input del padre es mandado
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange');
  }
  
  //Se ejecuta cuando algo dentro de nuestro html puee cambiar o pinta algun dato en la pantalla
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
 
  //Este se ejecuta cuando angular revisa esos cambios
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  //Este se ejecuta cuando angular ya esta todo revisado
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
   }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSusb.unsubscribe();
  }

guardar(){}

}
