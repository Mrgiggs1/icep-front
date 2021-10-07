import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totScreen: any;
  token: any;
  user: any;
  totUsers: any;

  date: Date = new Date(); 
  adminDetails: any;

  constructor(public appService: AppService, public router: Router, public auth: AuthGuard) { }
  
  

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
    
    this.token = localStorage.getItem("token")

    this.appService.adminProfile(this.token).subscribe( 
      response => {
        this.adminDetails = response;
      }, error => {
        console.log(error , 'GET admin profile error!!!')
    });
    
    this.appService.getUser(this.token).subscribe( 
      response => {
        this.user = response;
        //console.log(this.user)

        if (this.user[0].role == "staff"){
          if (this.user[0].staff_role == "admin"){
            this.router.navigate(['/dashboard'])
          }else{
            this.router.navigate(['/staff-dashboard'])
          }
        }else if(this.user[0].role == "student") {
          this.router.navigate(['/student-dashboard'])
        }
      }, error => {
        console.log(error , 'GET dashboard error!!!')
    });

    this.appService.getAllUsers().subscribe( 
      (      response: any) => {
        this.totUsers = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getAllScreens().subscribe( 
      (      response: any) => {
        this.totScreen = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    

    

    // if (this.user.role == "staff"){
    //   this.router.navigate(['/staff-dashboard'])
    // }
  }

}
