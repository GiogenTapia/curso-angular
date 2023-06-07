import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit{

  private _userService = inject(UsersServiceService);
  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public fullNamne = computed<String>( ()=>{
    if(!this.currentUser()) return 'Usuario no encontrado';

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  constructor(){

  }

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id : number){
    if(id <= 0) return;
    this.currentUser.set(undefined);
    this.userId.set(id);

    this._userService.getUserById(id)
    .subscribe({
      next:(user)=>{
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error:()=> {
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      },

    })

  }

}
