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

  user_screening =  "http://localhost:3000/screening/stud_staff";
  user_screeningVis =  "http://localhost:3000/screening/visitor";
  userStud =        "http://localhost:3000/user/student";
  userStaff =       "http://localhost:3000/user/staff";
  userLogin =       "http://localhost:3000/login";

  statUrl =         "http://localhost:3000/statistics/campus";
  statStudUrl =     "http://localhost:3000/statistics/campus/student";
  statStaffUrl =    "http://localhost:3000/statistics/campus/staff";
  statConstUrl =    "http://localhost:3000/statistics/campus/constractor";
  statVisUrl  =     "http://localhost:3000/statistics/campus/visitor";
  statSympUrl =     "http://localhost:3000/statistics/campus/symptoms";
  hotspotUrl =      "http://localhost:3000/statistics/hotspot/";

    //weekly statistics root
  weelyDataUrl =    "http://localhost:3000/statistics/campus/weekly";
  weekStudUrl =     "http://localhost:3000/statistics/campus/student/weekStud";
  weekStaffUrl =    "http://localhost:3000/statistics/campus/staff/weekStaff";
  weekConstUrl =    "http://localhost:3000/statistics/campus/constractor/weekCons";
  weekVisUrl  =     "http://localhost:3000/statistics/campus/visitor/weekVis";
  weekSympUrl =     "http://localhost:3000/statistics/campus/symptoms/weekSymp";
  //end stats

  //monthly stats root
  monDataUrl =    "http://localhost:3000/statistics/campus/monthly";
  monStudUrl =     "http://localhost:3000/statistics/campus/student/monthStud";
  monStaffUrl =    "http://localhost:3000/statistics/campus/staff/monthStaff";
  monConstUrl =    "http://localhost:3000/statistics/campus/constractor/monthCons";
  monVisUrl  =     "http://localhost:3000/statistics/campus/visitor/monthVis";
  monSympUrl =     "http://localhost:3000/statistics/campus/symptoms/monthSymp";
  //end stat monthly

  userProfile =     "http://localhost:3000/user/user-profile";

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
  

  getClient() : Observable<any> {
    return this.httpClient.get(this.user_screening); 
  }

  getStud() : Observable<any> {
    return this.httpClient.get(this.userStud);
  }

  getStaff() : Observable<any> {
    return this.httpClient.get(this.userStaff);
  }

  getDaily(newScreening : any) : Observable<any> {
    return this.httpClient.post(this.statUrl, newScreening);
  }
  getDailyStud(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.statStudUrl, newScreening);
  }

  getDailyStaff(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.statStaffUrl, newScreening);
  }

  getDailyVis(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.statVisUrl, newScreening);
  }

  getDailySymp(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.statSympUrl, newScreening);
  }
  
  //weekly get method
  getWeekData(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.weelyDataUrl, newScreening);
  }
  getWeekStud(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.weekStudUrl, newScreening);
  }

  getWeekStaff(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.weekStaffUrl, newScreening);
  }
  
  getWeekConst(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.weekConstUrl, newScreening);
  }

  getWeekVis(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.weekVisUrl, newScreening);
  }

  getWeekSymp(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.weekSympUrl, newScreening);
  }
  //end of weekly

  //beginning of Monthly
  getMonthData(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.monDataUrl, newScreening);
  }
  getMonthStud(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.monStudUrl, newScreening);
  }

  getMonthStaff(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.monStaffUrl, newScreening);
  }
  

  getMonthVis(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.monVisUrl, newScreening);
  }

  getMonthSymp(newScreening: any) : Observable<any> {
    return this.httpClient.post(this.monSympUrl, newScreening);
  }

  //end of monthly

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
