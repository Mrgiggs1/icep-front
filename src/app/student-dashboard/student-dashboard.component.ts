import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  
  date: Date = new Date(); 
  token: any;
  studentDetails: any;

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
    this.appService.studentProfile(this.token).subscribe( 
      response => {
        this.studentDetails = response;
      }, error => {
        console.log(error , 'GET admin profile error!!!')
    });
  }

}
