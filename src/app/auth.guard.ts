import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor (private appService: AppService, private _router: Router) {

    }
    canActivate(): boolean {
      if (this.appService.loggedIn()){
        return true
      }else{
        this._router.navigate(['/login'])
        return false
      }
    }
}
