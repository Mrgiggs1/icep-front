import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';

@Component({
  selector: 'app-screen-report',
  templateUrl: './screen-report.component.html',
  styleUrls: ['./screen-report.component.css']
})
export class ScreenReportComponent implements OnInit {
  token: any;
  screeningData: any;
  user: any;
  durationRole: any;
  dele: any;

  

  constructor(private appService: AppService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  reportSubmit(filterForm: NgForm) {
    let report = {
      duration: filterForm.value.duration,
      role: filterForm.value.role,
      temp: filterForm.value.temp
    }

    this.appService.adminScreenReport(this.token, report).subscribe(
      response => {
        this.durationRole = response;
        //console.log(report);
      }, error => {
        console.log(error , 'Screen report error!!!')
    });
    
    
  }

  deleteRow(d: any){
    const index = this.durationRole.indexOf(d);
    this.dele = this.durationRole.splice(index, 1);

    this.appService.deleteScreen(this.dele[0].screen_id).subscribe( 
      response => {
        this.durationRole = response;
        this.toastr.success("Successfully deteted");
        // console.log("succesffully deleted 2");
       
      }, error => {
        console.log(error , 'GET Info!!!')
    });
  }

}
