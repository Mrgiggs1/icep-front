import { Component, Input , HostBinding} from '@angular/core';
import { AppService } from './app.service';
import { RouterOutlet, Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid Compliance';
  showMenu: boolean = false;
  showFooter: boolean = false;
  
  constructor(public appService: AppService, public router: Router) { 

    //method for hiding menu in login and landing page
    router.events.forEach((event)=> {
      if(event instanceof NavigationStart){
        this.showMenu = event.url !== "/landing" && event.url !== "/login"
      }
    });
  
    //method for hiding footer in login
    router.events.forEach((event)=> {
      if(event instanceof NavigationStart){
        this.showFooter = event.url !== "/login"
      }
    });
    
  }
  
   
  

  
  
  


  
}
