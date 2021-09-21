import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

fileName = 'Daily.xlsx';
  fileNam = 'Weekly.xlsx';
  fileNa = 'Monthly.xlsx';
  dailyData: any;
  dailyStud: any;
  dailyStaff: any;
  dailyConst: any;
  dailyVis: any;
  dailySymp: any;

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

  
  campus: String[] = ["soshn", "soshs", "rank", "arc", "art", "emal", "main", "pol"];

  constructor(public appService: AppService) { }

  //method for exporting PDF (Daily)
  public dayPDF():void {
    let DATA = document.getElementById('tbldaily') as HTMLCanvasElement;
    //const DATA = document.getElementById("tblDaily") 
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('daily-stats.pdf');
    });     
  }

  //method for exporting PDF (Daily)
  public weekPDF():void {
    let DATA = document.getElementById('tblweekly') as HTMLCanvasElement;
    //const DATA = document.getElementById("tblDaily") 
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('weekly-stats.pdf');
    });     
  }

  //method for exporting PDF (Daily)
  public monthPDF():void {
    let DATA = document.getElementById('tblmonthly') as HTMLCanvasElement;
    //const DATA = document.getElementById("tblDaily") 
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('monthly-stats.pdf');
    });     
  }

  exportexcel(): void
  {
        //daily
        let element = document.getElementById('tbldaily');

        //daily
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
        
        //daily
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Daily');
        XLSX.writeFile(wb, this.fileName);
        
  }

        /* Weekly */
        exportexcelW(): void
  {
   
      //weekly
      let elemen = document.getElementById('tblweekly');
      
      
      //weekly
      const wz: XLSX.WorkSheet =XLSX.utils.table_to_sheet(elemen);
      
      
      //weekly
      const ww: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(ww, wz, 'Weekly');
      XLSX.writeFile(ww, this.fileNam);
    
  }

      /* Monthly */
      exportexcelM(): void
  {
    
      //monthly
      let eleme = document.getElementById('tblmonthly');

      
      //monthly
      const wp: XLSX.WorkSheet =XLSX.utils.table_to_sheet(eleme);
      
      //monthly
      const wm: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wm, wp, 'Monthly');
      XLSX.writeFile(wm, this.fileNa);
  }

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
