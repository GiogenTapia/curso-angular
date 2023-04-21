import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'imageHero'
})
export class ImageHeroPipe implements PipeTransform {

  transform(value : Hero) {

    if (!value.id && !value.alt_img ) {
      return "assets/no-image.png";
    }else if (value.alt_img){
      return value.alt_img;
    }else{

      return "assets/heroes/"+value.id+".jpg";
    }
    
  }

}
