import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit{
  
  //Podemos obtener un atributo hijo de nuestro html
  @ViewChild('miFormulario')miFormulario!: NgForm;

  initForm = {
    producto:'',
    precio: 0,
    existencia:0
  };
  
  constructor(){

  }

  ngOnInit(): void {
    
  }

  nombreValido(): boolean{
    return this.miFormulario?.form.controls['producto']?.invalid && 
    this.miFormulario?.form.controls['producto']?.touched;
  }

  precioValido(): boolean{
    return parseInt(this.miFormulario?.form.controls['precio']?.value)<=0 && 
    this.miFormulario?.form.controls['precio']?.touched;
  }


  guardar(miForm : NgForm){
    //console.log(miForm);
    console.log('Posteo Completado')

    this.miFormulario.resetForm({
      precio: 0,
      existencias:0
    });
 
  }
}
