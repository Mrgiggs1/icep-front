import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScreeningComponent } from './screening/screening.component';
import { AdminComponent } from './admin/admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { ScreenReportComponent } from './screen-report/screen-report.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LandingComponent } from './landing/landing.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'screening', component: ScreeningComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'user-profile' ,component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'user' ,component: UserComponent, canActivate: [AuthGuard]},
  {path: 'screen-report' ,component: ScreenReportComponent, canActivate: [AuthGuard]},
  {path: 'statistics' ,component: StatisticsComponent, canActivate: [AuthGuard]},
  {path: 'staff-dashboard', component: StaffDashboardComponent},
  {path: 'student-dashboard', component: StudentDashboardComponent},
  {path: 'staff-profile', component: StaffProfileComponent},
  {path: 'student-profile', component: StudentProfileComponent},
  {path: 'landing' ,component: LandingComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
