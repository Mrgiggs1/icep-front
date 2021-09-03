import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { }

  user_screening =  "http://localhost:3000/screening";
  userStud =        "http://localhost:3000/user/student";
  userStaff =       "http://localhost:3000/user/staff";
  userLogin =       "http://localhost:3000/login";
  statUrl =         "http://localhost:3000/statistics/campus";
  statStudUrl =     "http://localhost:3000/statistics/campus/student";
  statStaffUrl =    "http://localhost:3000/statistics/campus/staff";
  statConstUrl =    "http://localhost:3000/statistics/campus/constractor";
  statVisUrl  =     "http://localhost:3000/statistics/campus/visitor";
  statSympUrl =     "http://localhost:3000/statistics/campus/symptoms";
  hotspot =         "http://localhost:3000/statistics/hotspot/campu";

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

  getHotspot() : Observable<any> {
    return this.httpClient.get(this.hotspot);
  }
  
  // login() : Observable<any> {
  //   return this.httpClient.get(this.userStaff);
  // }

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
}
