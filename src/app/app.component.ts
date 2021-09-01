import { Component, Input , HostBinding} from '@angular/core';
import { AppService } from './app.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid Compliance';
  
  
  constructor(public appService: AppService) { }

  
}
