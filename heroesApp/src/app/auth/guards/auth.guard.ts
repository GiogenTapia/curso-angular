import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {

  constructor(private _autService : AuthService,
    private _route : Router){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean {
      return this._autService.verificAuthen().pipe(
        tap( isAuth =>{
          if (!isAuth) {
            this._route.navigate(['./auth/login'])
          }
        } )
      );
  }



  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      // if (this._autService.auth.id ) {
      //   return true;
      // }

    return this._autService.verificAuthen().pipe(
      tap( isAuth =>{
        if (!isAuth) {
          this._route.navigate(['./auth/login'])
        }
      } )
    );
  }
}
