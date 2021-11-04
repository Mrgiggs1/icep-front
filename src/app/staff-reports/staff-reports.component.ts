import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-staff-reports',
  templateUrl: './staff-reports.component.html',
  styleUrls: ['./staff-reports.component.css']
})
export class StaffReportsComponent implements OnInit {
  reportObj: any;
  token = localStorage.getItem("token");
  
  currentIndex = -1;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3,6,9,12];

  dailyStaff: any;
  weeklyStaff: any;
  monthlyStaff: any

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

    this.appService.getDailyStaff(this.token).subscribe( 
      (      response: any) => {
        this.dailyStaff = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getStaffWeekly(this.token).subscribe( 
      (      response: any) => {
        this.weeklyStaff = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getStaffMonthly(this.token).subscribe( 
      (      response: any) => {
        this.monthlyStaff = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });
  }

  handlePageChange(event: number): void{
    this.page = event;
    this.ngOnInit();
  }

  handlePageSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }

}
