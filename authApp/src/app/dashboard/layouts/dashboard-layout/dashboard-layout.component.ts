import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private _authService = inject(AuthService);
  public user = computed(( )=> this._authService.currentUser());

  // get user(){
  //   return this._authService.currentUser();
  // }

  onLogout(){
    this._authService.logout();
  }
}
