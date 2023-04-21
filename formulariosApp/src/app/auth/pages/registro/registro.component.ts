import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailValidator } from 'src/app/shared/validator/email-validators.service';
import { emailPattern, nombrePattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {




  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this._validatorService.nombrePattern) ] ],
    email: ['', [Validators.required, Validators.pattern(this._validatorService.emailPattern) ], [this._emailValidator] ],
    username: ['', [Validators.required,this._validatorService.noPuedeSerStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators: [
      this._validatorService.validatePass('password','password2')
    ]
  });
  
  
  constructor( private fb: FormBuilder,
               private _validatorService: ValidatorService,
               private _emailValidator: EmailValidator
     ){ }
  
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Giovanni Tapia',
      email: 'test@gmail.com',
      username: 'giogen'
    });
   
  }

  noEsValido(campo: string){
   return this._validatorService.isValidField(this.miFormulario,campo);

  }

  enviarFormulario(){


  }
}
