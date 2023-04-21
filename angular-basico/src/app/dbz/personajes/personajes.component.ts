import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{
 // @Input() datos: Personaje[] = [];

 get personajes(){
   return this.dbzServie.personajes;
 }

constructor( public dbzServie : DbzService){}
}
