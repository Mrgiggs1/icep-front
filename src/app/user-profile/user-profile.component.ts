import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  adminDetails: any;
  token: any;
  editForm: boolean = false;

  constructor(public appService: AppService) { }
  
  ngOnInit(): void {
    this.token = localStorage.getItem("token")

    this.appService.adminProfile(this.token).subscribe( 
      response => {
        this.adminDetails = response;
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

    this.appService.editAdminProfile(new_data).subscribe( 
      (data: any) => {

      }, (error: any) => {
        console.log(error, 'PUT admin error!!!')
    });
  }

  openEditForm(){ 
    this.editForm = !this.editForm
  }
}
