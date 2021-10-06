import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor (private appService: AppService, private _router: Router) {

    }
    
    user: any;


    // roleUser(): boolean {
    //   if (this.user[0].role == "staff"){
    //     if (this.user[0].staff_role == "admin"){
    //      this.router.navigate(['/dashboard'])
    //     }else{
    //       this.router.navigate(['/staff-dashboard'])
    //     }
    //   }else if(this.user[0].role == "student") {
    //       this.router.navigate(['/student-dashboard'])
    //   }
    // }

    canActivate(): boolean {
      if (this.appService.loggedIn()){
        return true
      }else{
        this._router.navigate(['/login'])
        return false
      }
    }
}