import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(public appService: AppService) { }

  studDetails: any;
  ngOnInit(): void {

    this.appService.getStud().subscribe( 
      response => {
        this.studDetails = response;
        console.log(this.studDetails);
      }, error => {
        console.log(error , 'GET student profile error!!!')
    });
  }

}
