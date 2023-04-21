import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  listHero : Hero [] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(resp =>{
      this.listHero = resp;
    });
  }

  constructor(private heroesService : HeroesService){

  }


}
