import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

private fb           = inject( FormBuilder  );
private _authService = inject( AuthService);
private _router      = inject(Router);

public myForm: FormGroup = this.fb.group({
  email: ['gio@gmail.com', [Validators.required, Validators.email]],
  password: ['123456', [Validators.required, Validators.minLength(6)]],

});


login(){
  console.log(this.myForm);
  const {email, password} = this.myForm.value;

  this._authService.login(email, password)
  .subscribe({
    next: () => this._router.navigateByUrl('/dashboard'),
    error: (message) => {
      Swal.fire('Error', message, 'error' )
    }


  }
  );

}

}
