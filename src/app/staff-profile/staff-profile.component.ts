import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css']
})
export class StaffProfileComponent implements OnInit {

  staffDetails: any;
  token: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")

    this.appService.staffProfile(this.token).subscribe( 
      response => {
        this.staffDetails = response;
      }, error => {
        console.log(error , 'Sfaff profile error!!!')
    });
  }
}
