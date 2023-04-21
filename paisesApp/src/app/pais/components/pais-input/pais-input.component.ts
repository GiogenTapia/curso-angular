import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  //Los diferentes OutPut que tenemos. el primero es para emitir nuestro valor 
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebouns : EventEmitter<string> = new EventEmitter();

  @Input() placeholder : string = "";

  debounce: Subject <string> = new Subject();

  termino : string = '';

  constructor() { }

  ngOnInit(): void {
    this.debounce.pipe(
      debounceTime(300)
    ).subscribe(valor =>{
      this.onDebouns.emit(valor)
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
   
  }
  teclaPresionada(){
    this.debounce.next(this.termino);
    
  }

}
