import { Component, OnInit } from '@angular/core';
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

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    console.log("I am screening report!")
    this.token = localStorage.getItem("token")

    this.appService.getUser(this.token).subscribe(
      response => {
        this.user = response;
        console.log(this.user[0])
        console.log(this.user[0].role)
        if (this.user[0].staff_role){
          if (this.user[0].staff_role == "admin"){
            this.appService.adminScreenReport(this.token).subscribe( 
              response => {
                this.screeningData = response;
              }, error => {
                console.log(error , 'Screening report error!!!')
            });
          }
        }else{
          this.appService.screenReport(this.token).subscribe(
            response => {
              this.screeningData = response;
            }, error => {
              console.log(error , 'Screening report error!!!')
          });
        }
      }, error => {
        console.log(error , 'Screening report error!!!')
    });
  }

}
