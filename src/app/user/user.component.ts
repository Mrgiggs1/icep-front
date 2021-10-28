import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  arrayStud: any;
  arrayStaff: any;
  currentIndex = -1;
  page = 1;
  count = 0;
  tableSize = 2;
  tableSizes = [2,4,6];
  new_data: any;

  constructor(public appService: AppService) { }
  
  ngOnInit(): void {
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

  handlePageChange(event: number): void{
    this.page = event;
    this.ngOnInit();
  }

  handlePageSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }
}

