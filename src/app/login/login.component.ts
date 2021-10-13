import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModal = new User();
  constructor(
    private location: Location,
    public appService: AppService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(loginForm: NgForm) {
    console.table(this.userModal);
    let newLogin = {
      email: loginForm.value.email,
      password: loginForm.value.password,
    }

    this.appService.login(newLogin).subscribe( 
      (userData: any) => {
        localStorage.setItem('token', userData.token)
        if (userData.message){
          alert(userData.message);
        }
        if (userData.user[0].role == "staff"){
          if (userData.user[0].staff_role == "admin"){
            this._router.navigate(['/dashboard'])
            alert("Admin Successfully LoggedIn");
          }else{
            this._router.navigate(['/staff-dashboard'])
            alert("Staff Successfully LoggedIn");
          }
        }
        if (userData.user[0].role == "student"){
          this._router.navigate(['/student-dashboard'])
          alert("Student Successfully LoggedIn");
        }
      }, (error: any) => {
        console.log(error, 'POST LOGIN error!!!')
    });
  }
}
