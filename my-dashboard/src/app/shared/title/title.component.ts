import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html'
})
export class TitleComponent {

  @Input({required:true}) title !: string;
  //esta propiedad de transform hace que si el atributo no viene en el hijo, este sera false
  @Input({transform: booleanAttribute}) withShadow : boolean = false ;

}
