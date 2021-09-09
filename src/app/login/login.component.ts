import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private location: Location,
    public appService: AppService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(loginForm: NgForm) {
    let newLogin = {
      username: loginForm.value.username,
      password: loginForm.value.password,
    }

    this.appService.login(newLogin).subscribe( 
      (userData: any) => {
        localStorage.setItem('token', userData.token)
        if (userData.message){
          alert(userData.message);
        }
        console.log(userData.user[0].role)
        console.log(userData.user[0])
        if (userData.user[0].role == "staff"){
          if (userData.user[0].staff_role == "admin"){
            this._router.navigate(['/user-profile'])
            alert("Admin Succesafully LoggedIn");
          }else{
            this._router.navigate(['/staff-profile'])
            alert("Staff Succesafully LoggedIn");
          }
        }
        if (userData.user[0].role == "student"){
          this._router.navigate(['/student-profile'])
          alert("Student Succesafully LoggedIn");
        }
      }, (error: any) => {
        console.log(error, 'POST LOGIN error!!!')
    });
  }
}
