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
  data_message: any;
  error_message: any;
  
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
          this.error_message = userData.message;
        }
        if (userData.user[0].role == "staff"){
          if (userData.user[0].staff_role == "admin"){
            this._router.navigate(['/dashboard'])
          }else{
            this._router.navigate(['/staff-dashboard'])
          }
        }
        if (userData.user[0].role == "student"){
          this._router.navigate(['/student-dashboard'])
        }
        
      }, (error: any) => {
        console.log(error, 'POST LOGIN error!!!')
    });
    


    
  }
  userModal(userModal: any) {
    throw new Error('Method not implemented.');
  }


}
