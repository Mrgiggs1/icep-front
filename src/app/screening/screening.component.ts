import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { AppService } from '../app.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit { 

  screening_data: any;

  isCough = false;
  isBreathing = false;
  isFever = false;
  isSymptoms = false;


  has_cert = true;
  
  constructor(public appService: AppService) { }

  ngOnInit(): void {
    
  }
  
  onSubmit(screeningForm: NgForm) {

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
      travel: screeningForm.value.travel
    }

    this.appService.screening(newScreening).subscribe( 
      (data: any) => {
        console.log(data);
        alert("Staff/Student Screening Data is Successfully Inserted");
      }, (error: any) => {
        console.log(error, 'POST error!!!')
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
        alert("Visitor Screening Data is Successfully Inserted");
      }, (error: any) => {
        console.log(error, 'POST error!!!')
    });
  }
}
