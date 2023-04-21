import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  //crear forulario, tendra el valor nombre
  //required, minleng 3
  
  miFormulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Gear',],
      ['Zelda',],
    ], Validators.required )
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  ngOnInit(): void {

  }

  constructor(private fb : FormBuilder){

  }
 

  noEsValido(campo: string){
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched
  }


  guardar(){
    if (this.miFormulario.invalid) {

      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  agregarFav(){

    if (this.nuevoFavorito.invalid) { return; }

   this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

   this.nuevoFavorito.reset();


  }

  borrar(i :  number){
    this.favoritosArr.controls.splice(i,1);
  }


}
