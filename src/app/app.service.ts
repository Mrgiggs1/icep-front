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

  getClient() : Observable<any> {
    return this.httpClient.get(this.user_screening); 
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
  
  //weekly get method
  getWeekData() : Observable<any> {
    return this.httpClient.get(this.weelyDataUrl);
  }
  getWeekStud() : Observable<any> {
    return this.httpClient.get(this.weekStudUrl);
  }

  getWeekStaff() : Observable<any> {
    return this.httpClient.get(this.weekStaffUrl);
  }
  
  getWeekConst() : Observable<any> {
    return this.httpClient.get(this.weekConstUrl);
  }

  getWeekVis() : Observable<any> {
    return this.httpClient.get(this.weekVisUrl);
  }

  getWeekSymp() : Observable<any> {
    return this.httpClient.get(this.weekSympUrl);
  }
  //end of weekly

  //beginning of Monthly
  getMonthData() : Observable<any> {
    return this.httpClient.get(this.monDataUrl);
  }
  getMonthStud() : Observable<any> {
    return this.httpClient.get(this.monStudUrl);
  }

  getMonthStaff() : Observable<any> {
    return this.httpClient.get(this.monStaffUrl);
  }
  
  getMonthConst() : Observable<any> {
    return this.httpClient.get(this.monConstUrl);
  }

  getMonthVis() : Observable<any> {
    return this.httpClient.get(this.monVisUrl);
  }

  getMonthSymp() : Observable<any> {
    return this.httpClient.get(this.monSympUrl);
  }

  //end of monthly

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
