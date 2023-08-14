import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { RegisterUser } from '../../interfaces';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private _fb = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _route = inject(Router);

  public myForm = this._fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]

  });

  public registerUser(){

    const user: RegisterUser = {
      name: this.myForm.get(['name'])?.value,
      email: this.myForm.get(['email'])?.value,
      password: this.myForm.get(['password'])?.value
    }

    this._authService.createUser(user).subscribe({
      next: ()=> this._route.navigateByUrl('/auth/login'),
      error:(message) => {
        Swal.fire('Error', message, 'error' )
      }
    }
    );
  }


}
