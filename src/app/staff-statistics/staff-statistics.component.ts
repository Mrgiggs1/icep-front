import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-staff-statistics',
  templateUrl: './staff-statistics.component.html',
  styleUrls: ['./staff-statistics.component.css']
})
export class StaffStatisticsComponent implements OnInit {
  dailyData: any;
  dailyStud: any;
  dailyStaff: any;
  dailyConst: any;
  dailyVis: any;
  dailySymp: any;
  //total_hotspot: any[] = [];

  weekData: any;
  weeklyStaff: any;
  weeklyStud: any;
  weeklyConst: any;
  weeklyVis: any;
  weekSymp: any;

  monthData: any;
  monthStaff: any;
  monthStud: any;
  monthConst: any;
  monthVis: any;
  monthSymp: any;
  // total_soshn: any; total_soshs: any; total_rank: any; total_arc: any; total_art: any; 
  // total_emal: any; total_main: any; total_pol: any;

  campus: String[] = ["soshn", "soshs", "rank", "arc", "art", "emal", "main", "pol"];

  constructor(public appService: AppService) { }

  

  ngOnInit(): void {
    

    // this.appService.getDailyConst().subscribe( 
    //   (      response: any) => {
    //     this.dailyConst = response;
    //   }, (error: any) => {
    //     console.log(error , 'GET error!!!')
    // });
    //Weekly statistics data
  }

  campusSubmit(screeningFormVis: NgForm) {
    let newScreening = {
      campusID: screeningFormVis.value.campus
    }
    
    // this.appService.getDaily(newScreening).subscribe( 
    //   (data: any) => {
    //     console.log(data);
    //   }, (error: any) => {
    //     console.log(error, 'POST error!!!')
    // });

    //Daily Data
    this.appService.getDaily(newScreening).subscribe( 
      (      response: any) => {
        this.dailyData = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyStud(newScreening).subscribe( 
      (      response: any) => {
        this.dailyStud = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyStaff(newScreening).subscribe( 
      (      response: any) => {
        this.dailyStaff = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyVis(newScreening).subscribe( 
      (      response: any) => {
        this.dailyVis = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailySymp(newScreening).subscribe( 
      (      response: any) => {
        this.dailySymp = response;
      }, (error: any) => {
        console.log(error , 'GET error!!!')
    });

    //Weekly statistics data
    this.appService.getWeekData(newScreening).subscribe(   
      (      response: any) => {
          this.weekData = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
  
      this.appService.getWeekStud(newScreening).subscribe( 
        (      response: any) => {
          this.weeklyStud = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
  
      this.appService.getWeekStaff(newScreening).subscribe( 
        (      response: any) => {
          this.weeklyStaff = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
  
      this.appService.getWeekConst(newScreening).subscribe( 
        (      response: any) => {
          this.weeklyConst = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
  
      this.appService.getWeekVis(newScreening).subscribe( 
        (      response: any) => {
          this.weeklyVis = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
  
      this.appService.getWeekSymp(newScreening).subscribe( 
        (      response: any) => {
          this.weekSymp = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
      //end of weekly

      //beginning of montlhy
    this.appService.getMonthData(newScreening).subscribe(   
      (      response: any) => {
          this.monthData = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
  
      this.appService.getMonthStud(newScreening).subscribe( 
        (      response: any) => {
          this.monthStud = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
  
      this.appService.getMonthStaff(newScreening).subscribe( 
        (      response: any) => {
          this.monthStaff = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });

  
      this.appService.getMonthVis(newScreening).subscribe( 
        (      response: any) => {
          this.monthVis = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });
  
      this.appService.getMonthSymp(newScreening).subscribe( 
        (      response: any) => {
          this.monthSymp = response;
        }, (error: any) => {
          console.log(error , 'GET error!!!')
      });

      //end of monthly

  }

}
