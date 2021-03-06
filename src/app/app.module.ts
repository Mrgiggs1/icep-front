import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScreeningComponent } from './screening/screening.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { ScreenReportComponent } from './screen-report/screen-report.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentReportsComponent } from './student-reports/student-reports.component';
import { StaffReportsComponent } from './staff-reports/staff-reports.component';
import { StudentStatistictComponent } from './student-statistict/student-statistict.component';
import { StaffStatisticsComponent } from './staff-statistics/staff-statistics.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';

//for toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    ScreeningComponent,
    AdminComponent,
    UserProfileComponent,
    UserComponent,
    ScreenReportComponent,
    StatisticsComponent,
    LandingComponent,
    StaffDashboardComponent,
    StudentDashboardComponent,
    StaffProfileComponent,
    StudentProfileComponent,
    StudentReportsComponent,
    StaffReportsComponent,
    StudentStatistictComponent,
    StaffStatisticsComponent,
    NavComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
