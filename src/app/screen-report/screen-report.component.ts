import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-screen-report',
  templateUrl: './screen-report.component.html',
  styleUrls: ['./screen-report.component.css']
})
export class ScreenReportComponent implements OnInit {
  arrayStud: any;
  arrayStaff: any;
  currentIndex = -1;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3,6,9,12];
  token: any;
  screeningData: any;
  user: any;
  durationRole: any;
  dele: any;
  temp: any;

  fileName = 'Reports.xlsx';

  constructor(private appService: AppService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void{
    this.appService.getStud().subscribe( 
      response => {
        this.arrayStud = response;
      }, error => {
        console.log(error , 'GET Info!!!')
    });

    this.appService.getStaff().subscribe( 
      response => {
        this.arrayStaff = response;
      }, error => {
        console.log(error , 'GET Info!!!')
    });
  }

  reportSubmit(filterForm: NgForm) {
    let report = {
      duration: filterForm.value.duration,
      role: filterForm.value.role,
      temp: filterForm.value.temp
      
    }

    this.appService.adminScreenReport(this.token, report).subscribe(
      response => {
        this.durationRole = response;
        console.log(this.durationRole);
      }, error => {
        console.log(error , 'Screen report error!!!')
    });
    
    
  }

  deleteRow(d: any){
    const index = this.durationRole.indexOf(d);
    this.dele = this.durationRole.splice(index, 1);

    this.appService.deleteScreen(this.dele[0].screen_id).subscribe( 
      response => {
        this.durationRole = response;
        this.toastr.success("Successfully deteted");
        // console.log("succesffully deleted 2");
       
      }, error => {
        console.log(error , 'GET Info!!!')
    });
  }

  exportexcel(): void
  {
        //daily
        let element = document.getElementById('tblreport');

        //daily
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
        
        //daily
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Reports');
        XLSX.writeFile(wb, this.fileName);
        
  }

  public dayPDF():void {
    let DATA = document.getElementById('tblreport') as HTMLCanvasElement;
    //const DATA = document.getElementById("tblDaily") 
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('Reports.pdf');
    }); 

  }

  handlePageChange(event: number): void{
    this.page = event;
    this.fetchPosts();
  }

  handlePageSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
