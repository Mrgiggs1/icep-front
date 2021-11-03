import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { User } from '../models/user.model';



@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit { 
  phoneNumPattern="((\\+27)|0)"+"[6-8]{1}"+"([0-9]{8})";
  //phoneNumPattern = "^((\\+27)|0)([6-8])([0-9]){9}$";  
  //idNumPattern = "^\d{2}[0-1][0-9][0-3]\d\d{4}[0-1]\d{2}$/";
  idNumPattern="[2-9][0-9]{1}"+"(0[1-9]|1[0-2])"+"(0[1-9]|[12][0-9]|3[0-1])"+"[1-9]{1}"+"[0-9]{4}"+"[7-9]{1}"+"[0-9]{1}";
  sNumPattern = "^([0-9]{9}$)|(^[0-9]{6}$)";
  tempPattern = "^([0-9\.]{4}$)";
  namePattern = "[a-zA-Z]*";

  userModal = new User();
  
  screening_data: any;

  isCough = false;
  isBreathing = false;
  isFever = false;
  isSymptoms = false;


  has_cert = true;
  error_message: any;
  data_message: any;
  temp_message: any;
  
  constructor(public appService: AppService, private _router: Router) { }

  ngOnInit(): void {
    
  }
  
  onSubmit(screeningForm: NgForm) {

    //alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.userModal);

    console.log(screeningForm.value.cough)
    if(screeningForm.value.cough == true && screeningForm.value.breathing == true && screeningForm.value.fever == true)
    {
      alert("Visit Nearest Testing Station, check landing page");
    }
    
    let newScreening = {
      
      stud_staff: screeningForm.value.stud_staff,
      screen_id: screeningForm.value.screen_id,
      temp: screeningForm.value.temp,
      campus: screeningForm.value.campus,
      cough: screeningForm.value.cough,
      breathing: screeningForm.value.breathing,
      fever: screeningForm.value.fever,
      symptom: screeningForm.value.symptom,
      contact: screeningForm.value.contact,
      contact_covid: screeningForm.value.contact_covid,
      travel: screeningForm.value.travel,
      vaccinated: screeningForm.value.vaccinated
    }

    this.appService.screening(newScreening).subscribe( 
      (data: any) => {
        this.data_message = data.stu_message;
        if (this.data_message){
          alert("Successfully screened!")
          location.reload();
        }
        this.error_message = data.message;
        this.temp_message = data.temp_message;
      }, (error: any) => {
        console.log(error)
    });
  }

  onSubmitvis(screeningFormVis: NgForm) {
    let newScreening = {
      visitor_id: screeningFormVis.value.visitor_id,
      screen_id: screeningFormVis.value.screen_id,
      temp: screeningFormVis.value.temp,
      campus: screeningFormVis.value.campus,
      cough: screeningFormVis.value.cough,
      breathing: screeningFormVis.value.breathing,
      fever: screeningFormVis.value.fever,
      symptom: screeningFormVis.value.symptom,
      contact: screeningFormVis.value.contact,
      contact_covid: screeningFormVis.value.contact_covid,
      travel: screeningFormVis.value.travel,
      fullname: screeningFormVis.value.fullname,
      phone: screeningFormVis.value.phone,
      appointment: screeningFormVis.value.appointment

    }
    
    this.appService.screeningVis(newScreening).subscribe( 
      (data: any) => {
        console.log(data);
        this.temp_message = data.temp_message;
        if(!this.temp_message){
          alert("Visitor Screening Data is Successfully Inserted");
        }
      }, (error: any) => {
        console.log(error, 'POST error!!!')
    });
  }
}
