import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css']
})
export class StaffProfileComponent implements OnInit {

  staffDetails: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.getStaff().subscribe( 
      response => {
        this.staffDetails = response;
        console.log(this.staffDetails);
      }, error => {
        console.log(error , 'GET Staff profile error!!!')
    });


  }

}
