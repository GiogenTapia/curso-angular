import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string  = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color( value : string){
    this._color = value;
    console.log({color : value});
    this.setStyle();
  }

  @Input() set errors (value: ValidationErrors | null | undefined){
    this._errors = value;
    console.log(this._errors);

    this.setErrorMessae();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    console.log(el);

    console.log('constructor de la directiva');

    this.htmlElement = el;
    this.htmlElement.nativeElement.innerHTML = 'Hola Mundo';

  }
  ngOnInit(): void {
    console.log('Directiva - OnInit');

  }

  setStyle():void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessae():void {
    if(!this.htmlElement) return;
    if(!this._errors){
      this.el.nativeElement.innerText = '';
      return;
    }

    const errors  = Object.keys(this._errors);
    console.log(errors);

    if(errors.includes('required')){
      this.el.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if(errors.includes('minlength')){
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.el.nativeElement.innerText = `Minimo ${current} / ${min} caracteres`;
      return;
    }

    if(errors.includes('email')){
      this.el.nativeElement.innerText = 'Email incorrecto';
      return;
    }

  }

}
