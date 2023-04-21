import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
   
  }

  constructor(private _router : Router,
              private _authService : AuthService){

  }

  login(){

    this._authService.login().subscribe(
      resp=>{
        if (resp.id) {
          this._router.navigate(['./heroes'])
        }
      }
    );
  
  }


}
