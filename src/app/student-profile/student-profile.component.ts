import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  token : any;

  constructor(public appService: AppService) { }

  studDetails: any;
  ngOnInit(): void {
    this.token = localStorage.getItem("token")

    this.appService.adminProfile(this.token).subscribe( 
      response => {
        this.studDetails = response;
      }, error => {
        console.log(error , 'Student profile error!!!')
    });
  }
}
