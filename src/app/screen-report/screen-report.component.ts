import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    // console.log("I am screening report!")
    // this.token = localStorage.getItem("token")
    
    // this.appService.getUser(this.token).subscribe(
    //   response => {
    //     this.user = response;
    //     console.log(this.user[0])
    //     console.log(this.user[0].role)
    //     if (this.user[0].staff_role){
    //       if (this.user[0].staff_role == "admin"){
    //         this.appService.adminScreenReport(this.token).subscribe( 
    //           response => {
    //             this.screeningData = response;
    //           }, error => {
    //             console.log(error , 'Screening report error!!!')
    //         });
    //       }
    //     }else{
    //       this.appService.screenReport(this.token).subscribe(
    //         response => {
    //           this.screeningData = response;
    //         }, error => {
    //           console.log(error , 'Screening report error!!!')
    //       });
    //     }
    //   }, error => {
    //     console.log(error , 'Screening report error!!!')
    // });
  }

  reportSubmit(filterForm: NgForm) {
    let report = {
      duration: filterForm.value.duration,
      role: filterForm.value.role,
      temp: filterForm.value.temp
    }
    // this.appService.getDaily(newScreening).subscribe( 
    //   (data: any) => {
    //     console.log(data);
    //   }, (error: any) => {
    //     console.log(error, 'POST error!!!')
    // }); 

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
      }, error => {
        console.log(error , 'GET Info!!!')
    });
  }

}
