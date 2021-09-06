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
        console.log(data.user[0].role)
        localStorage.setItem('token', data.token)
        if (data.user[0].role == "Student"){
          this._router.navigate(['/user-profile'])
        } else if (data.user[0].role == "Staff"){
          this._router.navigate(['/staff-profile'])
        } else {
          this._router.navigate(['/admin'])
        }
      }, (error: any) => {
        console.log(error, 'POST LOGIN error!!!')
    });
  }
}
