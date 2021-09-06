import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  dailyData: any;
  dailyStud: any;
  dailyStaff: any;
  dailyConst: any;
  dailyVis: any;
  dailySymp: any;
  total_hotspot: any[] = [];

  // total_soshn: any; total_soshs: any; total_rank: any; total_arc: any; total_art: any; 
  // total_emal: any; total_main: any; total_pol: any;

  campus: String[] = ["soshn", "soshs", "rank", "arc", "art", "emal", "main", "pol"];

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDaily().subscribe( 
      response => {
        this.dailyData = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyStud().subscribe( 
      response => {
        this.dailyStud = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyStaff().subscribe( 
      response => {
        this.dailyStaff = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyConst().subscribe( 
      response => {
        this.dailyConst = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyVis().subscribe( 
      response => {
        this.dailyVis = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailySymp().subscribe( 
      response => {
        this.dailySymp = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    for (var _i = 0; _i < 8; _i++) {
      this.appService.getHotspot(this.campus[_i]).subscribe( 
        response => {
          this.total_hotspot[_i] = response[0]
        },error => {
          console.log(error , 'GET error!!!')
      });
    }
    console.log(this.total_hotspot[0])
  }
}
