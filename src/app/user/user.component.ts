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
  page: number = 1;
  page2: number = 2;
  new_data: any;

  constructor(public appService: AppService) { }
  
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
}

