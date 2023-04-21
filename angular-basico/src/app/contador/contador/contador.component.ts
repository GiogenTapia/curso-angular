import { Component } from "@angular/core";


@Component (
    {
        selector: 'app-contador',
template:`
<h1>{{ title }}</h1>
<h3>The base is: <strong>{{base}}</strong></h3>

<button (click)="accumulate(base)">+{{base}}</button>

<span>{{num}}</span>

<button (click)="accumulate(-base)">-{{base}}</button>
`}
)

export class ContadorComponent{
    public title:string = 'Contador App';
    public num: number = 10;
    public base: number = 5;
   
    public accumulate(value:number){
     this.num += value;
    }
   

}