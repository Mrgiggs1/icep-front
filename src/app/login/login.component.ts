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
        console.log(data)
        localStorage.setItem('token', data.token)
        this._router.navigate(['/user-profile'])
      }, (error: any) => {
        console.log(error, 'POST LOGIN error!!!')
    });
  }
}
