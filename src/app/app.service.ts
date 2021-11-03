import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(public httpClient: HttpClient, public router: Router) { }
  user: any;

  allScreened =        "http://localhost:3000/screening/allscreens";
  user_screening =     "http://localhost:3000/screening/stud_staff";
  user_screeningVis =  "http://localhost:3000/screening/visitor";
  userStud =           "http://localhost:3000/user/student";
  userStaff =          "http://localhost:3000/user/staff";
  userLogin =          "http://localhost:3000/login";
  refrashTokenUrl =    "http://localhost:3000/login/refrash_token";

  statUrl =         "http://localhost:3000/statistics/campus";
  statStudUrl =     "http://localhost:3000/statistics/campus/student";
  statStaffUrl =    "http://localhost:3000/statistics/campus/staff";
  statVisUrl  =     "http://localhost:3000/statistics/campus/visitor";
  statSympUrl =     "http://localhost:3000/statistics/campus/symptoms";
 
  

    //weekly statistics root
  weelyDataUrl =    "http://localhost:3000/statistics/campus/weekly";
  weekStudUrl =     "http://localhost:3000/statistics/campus/student/weekStud";
  weekStaffUrl =    "http://localhost:3000/statistics/campus/staff/weekStaff";
  weekVisUrl  =     "http://localhost:3000/statistics/campus/visitor/weekVis";
  weekSympUrl =     "http://localhost:3000/statistics/campus/symptoms/weekSymp";
  //end stats

  //monthly stats root
  monDataUrl =     "http://localhost:3000/statistics/campus/monthly";
  monStudUrl =     "http://localhost:3000/statistics/campus/student/monthStud";
  monStaffUrl =    "http://localhost:3000/statistics/campus/staff/monthStaff";
  monVisUrl  =     "http://localhost:3000/statistics/campus/visitor/monthVis";
  monSympUrl =     "http://localhost:3000/statistics/campus/symptoms/monthSymp";
  //end stat monthly

  userProfile =     "http://localhost:3000/user/user-profile";

  adminProfileUrl =        "http://localhost:3000/user/admin-profile";
  staffProfileUrl =        "http://localhost:3000/user/staff-profile";
  studentProfileUrl =      "http://localhost:3000/user/student-profile";
  dashboardUrl =           "http://localhost:3000/user/dashboard";
  allusers =               "http://localhost:3000/user/allusers";
  edit_admin =             "http://localhost:3000/user/edit_admin";
  //screen reports

  reportUrl =         "http://localhost:3000/screen_report/stud_staff"
  getUsertUrl =       "http://localhost:3000/screen_report/user"
  adminReportUrl =    "http://localhost:3000/screen_report/admin"
  reportData =        "http://localhost:3000/screen_report/report";
  
  

  deteteUrl =   "http://localhost:3000/screen_report/delete/";
  vaccinesUrl = "http://localhost:3000/landing/vaccines";

  getStudDaily(token : any) : Observable<any> {
    return this.httpClient.post<any>("http://localhost:3000/screen_report/stud_daily_report", token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
       })
     });
   }

   getStudWeekly(token : any) : Observable<any> {
    return this.httpClient.post<any>("http://localhost:3000/screen_report/stud_weekly_report", token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
       })
     });
   }


  getUser(token : any) : Observable<any> {
   return this.httpClient.post<any>(this.dashboardUrl, token, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  getVaccines(camp_id: any) : Observable<any> {
    return this.httpClient.get("http://localhost:3000/landing/" + camp_id);
  }

  // count number of row in screening table 
  getScreenRows(camp_id: any) : Observable<any> {
    return this.httpClient.get("http://localhost:3000/landing/screen_rows" + camp_id);
  }

  deleteScreen(index: any) : Observable<any> {
    return this.httpClient.delete("http://localhost:3000/screen_report/delete/" + index);
  }

  adminScreenReport(token : any, report: any) : Observable<any> { 
    return this.httpClient.post<any>(this.adminReportUrl, report, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  screenReport(token : any) : Observable<any> { 
    return this.httpClient.post<any>(this.reportUrl, token, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  adminProfile(token : any) : Observable<any> { 
    return this.httpClient.post<any>(this.adminProfileUrl, token, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }
  
  editAdminProfile(new_data : any) : Observable<any> { 
    return this.httpClient.post<any>(this.edit_admin, new_data, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    });
  }

  refrash_token() : Observable<any> { 
    return this.httpClient.get<any>(this.refrashTokenUrl, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    });
  }
  
  staffProfile(token : any) : Observable<any> {
    return this.httpClient.post<any>(this.staffProfileUrl, token, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  studentProfile(token : any) : Observable<any> { 
    return this.httpClient.post<any>(this.studentProfileUrl, token, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  getReport(token : any) : Observable<any> {
    return this.httpClient.post<any>(this.reportData, token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
      })
    });
  }

  getAllUsers() : Observable<any> {
    return this.httpClient.get(this.allusers);
  }

  getAllScreens() : Observable<any> {
    return this.httpClient.get(this.allScreened);
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

  logOut(){
    localStorage.clear();
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
