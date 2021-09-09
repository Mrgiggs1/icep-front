import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  adminDetails: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAdminProfile().subscribe( 
      response => {
        this.adminDetails = response;
        console.log(this.adminDetails);
      }, error => {
        console.log(error , 'GET admin profile error!!!')
    });


  }


}
