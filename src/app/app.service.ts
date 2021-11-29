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

  allScreened =        "https://covid-compliance.herokuapp.com/screening/allscreens";
  user_screening =     "https://covid-compliance.herokuapp.com/screening/stud_staff";
  user_screeningVis =  "https://covid-compliance.herokuapp.com/screening/visitor";
  userStud =           "https://covid-compliance.herokuapp.com/user/student";
  userStaff =          "https://covid-compliance.herokuapp.com/user/staff";
  userLogin =          "https://covid-compliance.herokuapp.com/login";
  refrashTokenUrl =    "https://covid-compliance.herokuapp.com/login/refrash_token";

  statUrl =         "https://covid-compliance.herokuapp.com/statistics/campus";
  statStudUrl =     "https://covid-compliance.herokuapp.com/statistics/campus/student";
  statStaffUrl =    "https://covid-compliance.herokuapp.com/statistics/campus/staff";
  statVisUrl  =     "https://covid-compliance.herokuapp.com/statistics/campus/visitor";
  statSympUrl =     "https://covid-compliance.herokuapp.com/statistics/campus/symptoms";
 
  

    //weekly statistics root
  weelyDataUrl =    "https://covid-compliance.herokuapp.com/statistics/campus/weekly";
  weekStudUrl =     "https://covid-compliance.herokuapp.com/statistics/campus/student/weekStud";
  weekStaffUrl =    "https://covid-compliance.herokuapp.com/statistics/campus/staff/weekStaff";
  weekVisUrl  =     "https://covid-compliance.herokuapp.com/statistics/campus/visitor/weekVis";
  weekSympUrl =     "https://covid-compliance.herokuapp.com/statistics/campus/symptoms/weekSymp";
  //end stats

  //monthly stats root
  monDataUrl =     "https://covid-compliance.herokuapp.com/statistics/campus/monthly";
  monStudUrl =     "https://covid-compliance.herokuapp.com/statistics/campus/student/monthStud";
  monStaffUrl =    "https://covid-compliance.herokuapp.com/statistics/campus/staff/monthStaff";
  monVisUrl  =     "https://covid-compliance.herokuapp.com/statistics/campus/visitor/monthVis";
  monSympUrl =     "https://covid-compliance.herokuapp.com/statistics/campus/symptoms/monthSymp";
  //end stat monthly

  userProfile =     "https://covid-compliance.herokuapp.com//user/user-profile";

  adminProfileUrl =        "https://covid-compliance.herokuapp.com/user/admin-profile";
  staffProfileUrl =        "https://covid-compliance.herokuapp.com/user/staff-profile";
  studentProfileUrl =      "https://covid-compliance.herokuapp.com/user/student-profile";
  dashboardUrl =           "https://covid-compliance.herokuapp.com/user/dashboard";
  allusers =               "https://covid-compliance.herokuapp.com/user/allusers";
  edit_admin =             "https://covid-compliance.herokuapp.com/user/edit_admin";
  //screen reports

  reportUrl =         "https://covid-compliance.herokuapp.com/screen_report/stud_staff"
  getUsertUrl =       "https://covid-compliance.herokuapp.com/screen_report/user"
  adminReportUrl =    "https://covid-compliance.herokuapp.com/screen_report/admin"
  reportData =        "https://covid-compliance.herokuapp.com/screen_report/report";
  
  

  deteteUrl =   "https://covid-compliance.herokuapp.com/screen_report/delete/";
  vaccinesUrl = "https://covid-compliance.herokuapp.com/landing/vaccines"; 
  announcementUrl = "https://covid-compliance.herokuapp.com/announcements";

  Announcements(newAnnouncement : any, token : any) : Observable<any> { 
    return this.httpClient.post<any>(this.announcementUrl, newAnnouncement, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  corsPol() : Observable<any> {
    return this.httpClient.get("https://covid-compliance.herokuapp.com/landing/reqPolicy");
   }


  //this is screen report for student /////////////////////////////////////////////////////////////
  getStudDaily(token : any) : Observable<any> {
    return this.httpClient.post<any>("https://covid-compliance.herokuapp.com/screen_report/stud_daily_report", token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
       })
     });
   }

   getStudWeekly(token : any) : Observable<any> {
    return this.httpClient.post<any>("https://covid-compliance.herokuapp.com/screen_report/stud_weekly_report", token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
       })
     });
   } 

   getStudMonthly(token : any) : Observable<any> {
    return this.httpClient.post<any>("https://covid-compliance.herokuapp.com/screen_report/stud_monthly_report", token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
       })
     });
   }
   //////////////////////////////////////////////////////////////////////////////////////////////////

  
  //this is screen report for staff /////////////////////////////////////////////////////////////
  getStaffDaily(token : any) : Observable<any> {
    return this.httpClient.post<any>("https://covid-compliance.herokuapp.com/screen_report/staff_daily_report", token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
       })
     });
   }

   getStaffWeekly(token : any) : Observable<any> {
    return this.httpClient.post<any>("https://covid-compliance.herokuapp.com/screen_report/staff_weekly_report", token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
       })
     });
   } 

   getStaffMonthly(token : any) : Observable<any> {
    return this.httpClient.post<any>("https://covid-compliance.herokuapp.com/screen_report/staff_monthly_report", token, { 
       headers: new HttpHeaders({
         'Authorization': `Bearer ${token}`
       })
     });
   }
   //////////////////////////////////////////////////////////////////////////////////////////////////

  getUser(token : any) : Observable<any> {
   return this.httpClient.post<any>(this.dashboardUrl, token, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  getVaccines(camp_id: any) : Observable<any> {
    return this.httpClient.get("https://covid-compliance.herokuapp.com/landing/" + camp_id);
  }

  // count number of row in screening table 
  getScreenRows(camp_id: any) : Observable<any> {
    return this.httpClient.get("https://covid-compliance.herokuapp.com/landing/screen_rows" + camp_id);
  }

  deleteScreen(index: any) : Observable<any> {
    return this.httpClient.delete("https://covid-compliance.herokuapp.com/screen_report/delete/" + index);
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
    localStorage.removeItem('token');
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
