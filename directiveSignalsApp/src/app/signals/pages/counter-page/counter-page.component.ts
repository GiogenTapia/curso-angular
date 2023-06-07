import { Component, computed, signal } from '@angular/core';

const name = signal('Giovanni');

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  constructor(){
    console.log(name);

  }

  public counter = signal(10);
  public squareCounter = computed( ()=> this.counter() * this.counter() );

  increaseBy( value : number){

    //this.counter.set(this.counter() + value);
    this.counter.update( current => current + value);

  }


}
