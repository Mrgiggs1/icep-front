import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';

@Component({
  selector: 'app-student-reports',
  templateUrl: './student-reports.component.html',
  styleUrls: ['./student-reports.component.css']
})
export class StudentReportsComponent implements OnInit {
  currentIndex = -1;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [3,6,9,12];
  reportObj: any;
  dailyStud: any;
  weeklyStud: any;
  monthlyStud: any
  // page: number = 1;
  page2: number = 2;
  page3: number = 3;
  token = localStorage.getItem("token");

  constructor(private appService: AppService, private toastr: ToastrService) { }

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

    this.appService.getStudMonthly(this.token).subscribe( 
      (      response: any) => {
        this.monthlyStud = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });
  }

  fetchPosts(): void{
    this.appService.getReport(this.token).subscribe( 
      response => {
        this.reportObj = response;
      }, error => {
        console.log(error , 'GET Info!!!')
    });
  }

  handlePageChange(event: number): void{
    this.page = event;
    this.fetchPosts();
  }

  handlePageSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
