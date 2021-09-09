import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(public httpClient: HttpClient) { }

  user_screening =      "http://localhost:3000/screening/stud_staff";
  user_screeningVis =   "http://localhost:3000/screening/visitor";
  userStud =            "http://localhost:3000/user/student";
  userStaff =           "http://localhost:3000/user/staff";
  userLogin =           "http://localhost:3000/login";
  statUrl =             "http://localhost:3000/statistics/campus";
  statStudUrl =         "http://localhost:3000/statistics/campus/student";
  statStaffUrl =        "http://localhost:3000/statistics/campus/staff";
  statConstUrl =        "http://localhost:3000/statistics/campus/constractor";
  statVisUrl  =         "http://localhost:3000/statistics/campus/visitor";
  statSympUrl =         "http://localhost:3000/statistics/campus/symptoms";
  hotspotUrl =          "http://localhost:3000/statistics/hotspot/";
  adminProfile =        "http://localhost:3000/user/admin-profile";
  staffProfile =        "http://localhost:3000/user/staff-profile";
  studentProfile =      "http://localhost:3000/user/student-profile";

  getAdminProfile() : Observable<any> {
    return this.httpClient.get(this.adminProfile); 
  }
  
  getStaffProfile() : Observable<any> {
    return this.httpClient.get(this.staffProfile); 
  }

  getStudentProfile() : Observable<any> {
    return this.httpClient.get(this.studentProfile); 
  }

  getStud() : Observable<any> {
    return this.httpClient.get(this.userStud);
  }

  getStaff() : Observable<any> {
    return this.httpClient.get(this.userStaff);
  }

  getDaily() : Observable<any> {
    return this.httpClient.get(this.statUrl);
  }
  getDailyStud() : Observable<any> {
    return this.httpClient.get(this.statStudUrl);
  }

  getDailyStaff() : Observable<any> {
    return this.httpClient.get(this.statStaffUrl);
  }
  
  getDailyConst() : Observable<any> {
    return this.httpClient.get(this.statConstUrl);
  }

  getDailyVis() : Observable<any> {
    return this.httpClient.get(this.statVisUrl);
  }

  getDailySymp() : Observable<any> {
    return this.httpClient.get(this.statSympUrl);
  }

  getHotspot(campus: any) : Observable<any> {
    return this.httpClient.get(this.hotspotUrl + campus);
  }

  login(newLogin : any) : Observable<any> {
    return this.httpClient.post<any>(this.userLogin, newLogin, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    });
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
  screening(screening : any) : Observable<any> {
    return this.httpClient.post<any>(this.user_screening, screening, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }); 
  }

  screeningVis(screening : any) : Observable<any> {
    return this.httpClient.post<any>(this.user_screeningVis, screening, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }); 
  }
}
