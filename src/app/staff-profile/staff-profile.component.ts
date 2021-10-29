import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css']
})
export class StaffProfileComponent implements OnInit {

  staffDetails: any;
  token: any;
  editForm: any;
  email: any;
  address: any;
  fname: any;
  lname: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")

    this.appService.adminProfile(this.token).subscribe( 
      response => {
        this.staffDetails = response;
        // old values to be editted
        this.email = response.email;
        this.address = response.address;
        this.fname = response.fname;
        this.lname = response.lname;
      }, error => {
        console.log(error , 'GET admin profile error!!!')
    });
  }
  
  onSubmit(editForm : NgForm) {
    let new_data = {
      fname: editForm.value.firstName,
      lname: editForm.value.lastName,
      email: editForm.value.email,
      address: editForm.value.address
    }
    
    console.log(new_data)
    this.appService.editAdminProfile(new_data).subscribe( 
      (data: any) => {
        console.log(this.address)
        console.log(data)

      }, (error: any) => {
        console.log(error, 'edit admin error!!!')
    });

    this.appService.refrash_token().subscribe( 
      (userData: any) => {
        localStorage.removeItem('token')
        location.reload();
        localStorage.setItem('token', userData.token)
        //console.log(userData.token)
      }, (error: any) => {
        console.log(error, 'refrash token error!!!')
    });
  }


  openEditForm(){
    this.editForm = !this.editForm;
  }
}
