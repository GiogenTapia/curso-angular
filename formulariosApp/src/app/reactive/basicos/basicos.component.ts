import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  //Establecer valores a nuestro form
  // miFormulario: FormGroup = new FormGroup({
  //   nombre:      new FormControl('RTX 4080ti'),
  //   precio:      new FormControl(200),
  //   existencias: new FormControl(5),

  // });

  //esta es otra forma de hacerlo, cada coma que pongamos en el [] la primera es validadores sincronos y
  // otra son asyncronos
  miFormulario: FormGroup = this.fb.group({
    nombre: [ ,[Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]]
  });

  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre:'PC gamer',
      precio: 3944444,
      existencias:9
    })

  }

  campoNoEsValido( campo: string){
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

}
