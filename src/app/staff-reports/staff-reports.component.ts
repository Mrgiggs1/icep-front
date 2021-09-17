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

  constructor(public appService: AppService) { }

  ngOnInit(): void {

    this.appService.getReport().subscribe( 
      response => {
        this.reportObj = response;
      }, error => {
        console.log(error , 'GET Info!!!')
    });
  }

}
