import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  staffDetails: any;
  token: any
  user: any
  date: Date = new Date(); 
  announcements: any;
  subject: any;
  announceDate: any;

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
    
    this.token = localStorage.getItem("token")
    this.announcements = localStorage.getItem("announcement")
    this.subject = localStorage.getItem("subject")
    this.announceDate = localStorage.getItem("date")

    this.appService.staffProfile(this.token).subscribe( 
      response => {
        this.staffDetails = response;
      }, error => {
        console.log(error , 'GET admin profile error!!!')
    });
  }

}
