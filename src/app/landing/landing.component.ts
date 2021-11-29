import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  camp_id: String[] = ["soshn", "soshs", "rank", "arc", "art", "emal", "main", "pol"];
  vaccines: any[] = [];
  tot_screening: any[] = [];


  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.corsPol().subscribe( 
      response => {
        console.log(response);
        
      }, error => {
        console.log(error , 'CORS Policy Headers Error ')
    });

    for(let i = 0; i < 8; i++){
      this.appService.getVaccines(this.camp_id[i]).subscribe( 
        response => {
          if (i == 1){
            this.vaccines[i] = this.vaccines[0] + response[0].tot_v
          }else{
            this.vaccines[i] = response[0].tot_v
          }
          console.log(this.vaccines[i])
        }, error => {
          console.log(error , 'GET Info!!!')
      });
    }
    // for(let i = 0; i < 8; i++){
    //   this.appService.getScreenRows(this.camp_id[i]).subscribe( 
    //     response => {
    //       this.tot_screening[i] = response[0]
    //       console.log(this.tot_screening[i])
    //     }, error => {
    //       console.log(error , 'GET Info!!!')
    //   });
    // }
  }


}
