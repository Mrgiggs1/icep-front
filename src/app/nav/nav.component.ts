import { Component, OnInit, Input , HostBinding} from '@angular/core';
import { AppService } from '../app.service';
import { RouterOutlet, Router, NavigationStart} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public appService: AppService, public router: Router) { }

  token: any;
  user: any;

  public logOut(): void{
    //on logout
    //clear localStorage
    //then navigate back to login page

    this.appService.logOut();
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
    
  }
}