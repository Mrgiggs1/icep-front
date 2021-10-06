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

  constructor(public appService: AppService, public router: Router, public auth: AuthGuard) { }
  token: any;
  user: any;

  ngOnInit(): void {
    this.token = localStorage.getItem("token")

    // this.auth.getUserRole().subscribe( 
    //   response => {
    //     this.user = response;
    //   }, error => {
    //     console.log(error , 'GET dashboard error!!!')
    // });

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

    

    

    // if (this.user.role == "staff"){
    //   this.router.navigate(['/staff-dashboard'])
    // }
  }

}
