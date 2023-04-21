import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroData!: Hero;

 
  constructor(private _routeActive : ActivatedRoute,
     private _heroesService : HeroesService,
     private _route : Router){
    
  }

  ngOnInit(): void {
  this._routeActive.params.pipe(
    switchMap(({id})=> this._heroesService.getHeroID(id)))
  .subscribe(hero => this.heroData = hero);



 }


 backPage(){
  this,this._route.navigate(['/heroes/list']);
 }


}
