import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})

export class BasicosComponent {

  nombreLower : string = 'giovanni';
  nombreUpper : string = 'GIOVANNI';
  nombreCompleto : string = 'giOvANni tApia';

  fecha: Date = new Date(); //el día de hoy

}
