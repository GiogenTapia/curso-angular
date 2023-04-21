import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  publishers = [
  {
    id: 'DC Comics',
    desc: 'DC - Comics'
  },
  {
    id: 'Marvel Comics',
    desc: 'Marvel - Comics'
  }
];

hero : Hero = {
  id: '',
  superhero: '',
  alter_ego: '',
  characters: '',
  first_appearance: '',
  publisher: Publisher.DCComics,
  alt_img: ''

};

 constructor( private _serviceHero : HeroesService,
              private _activateRoute : ActivatedRoute,
              private _route : Router,
              private _snackBar : MatSnackBar,
              public dialog : MatDialog){

 }

 
  ngOnInit(): void {

    //Podemos obtener la url para verificar en cual direccion estamos
    if (!this._route.url.includes('edit')) {
      return;
    }
    this._activateRoute.params
    .pipe(switchMap(({id})=>this._serviceHero.getHeroID(id))).subscribe(
      (hero)=>this.hero = hero
    )
  }



  save(){
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if (this.hero.id) {

      this._serviceHero.editHero(this.hero).subscribe(
        resp =>this.watchSnak('Edit successfull')
      );

    }else{

      this._serviceHero.addHero(this.hero).subscribe(hero =>{
      
       this._route.navigate(['/heroes/edit',hero.id]);
       this.watchSnak('Hero added successfull');
      });

    }

   
  }

  deleteHero(){
 const dialog =   this.dialog.open(ConfirmComponent,{
      width: '300px',
      data: {...this.hero}
    });

    dialog.afterClosed().subscribe(
      result=>{
        if (result) {
          this._serviceHero.deleteHero(this.hero.id!).subscribe(
            resp => this._route.navigate(['/heroes']));
        }
      }
    )

  


  }

  
  watchSnak (message : string){
    this._snackBar.open(message, 'ok!',{
      duration:2500
    });
  }


}
