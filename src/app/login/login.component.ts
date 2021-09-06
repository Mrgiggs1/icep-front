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
    console.log(loginForm.value);
    let newLogin = {
      username: loginForm.value.username,
      password: loginForm.value.password,
    }

    this.appService.login(newLogin).subscribe( 
      (data: any) => {
        console.log(data.user)
        localStorage.setItem('token', data.token)
        if (data.user[0].role == "student"){
          this._router.navigate(['/student-profile'])
          alert("Student Succesafully LoggedIn");
        } else if (data.user[0].role == "staff"){
          this._router.navigate(['/staff-profile'])
          alert("Staff Succesafully LoggedIn");
        } else if(data.user[0].role == "admin"){
          this._router.navigate(['/user-profile'])
          alert("Admin Succesafully LoggedIn");
        }else if(data.user[0].role == ""){
          alert("Wrong Username or Password");
        }
      }, (error: any) => {
        console.log(error, 'POST LOGIN error!!!')
        
    });
  }
}
