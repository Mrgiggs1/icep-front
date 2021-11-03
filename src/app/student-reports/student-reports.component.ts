import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-student-reports',
  templateUrl: './student-reports.component.html',
  styleUrls: ['./student-reports.component.css']
})
export class StudentReportsComponent implements OnInit {

  reportObj: any;
  dailyStud: any;
  weeklyStud: any;
  monthlyStud: any

  token = localStorage.getItem("token");

  constructor(public appService: AppService) { }

  ngOnInit(): void {

    this.appService.getReport(this.token).subscribe( 
      response => {
        console.log(response)
        //responseee
        this.reportObj = response;
      }, error => {
        console.log(error , 'GET Info!!!')
    });
    
    this.appService.getStudDaily(this.token).subscribe( 
      (      response: any) => {
        this.dailyStud = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getStudWeekly(this.token).subscribe( 
      (      response: any) => {
        this.weeklyStud = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });
  }

}
