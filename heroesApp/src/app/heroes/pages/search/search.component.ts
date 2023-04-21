import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  term: string = '';
  heroesOption: Hero [] = [];
  heroSelect !: Hero ;
  heroNull !:Hero;
  
  constructor(private _heroesService : HeroesService){}


  ngOnInit(): void {
    
  }

  searching(){
    this._heroesService.getsuggestions(this.term.trim())
    .subscribe(heroes => this.heroesOption = heroes);
  }

  optionSelect(event: MatAutocompleteSelectedEvent){
   
    //valuar si viene un string vacio

    if (event.option.value === '') {
      this.heroSelect  = this.heroNull;
      return;
    }
    
    const hero: Hero = event.option.value;
   
    this.term = hero.superhero;
    this._heroesService.getHeroID(hero.id!).subscribe(hero => this.heroSelect = hero);
  }
}
