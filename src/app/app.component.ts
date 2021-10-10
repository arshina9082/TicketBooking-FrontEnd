import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmyticket';

  constructor( private router: Router, ) { }

  businfo(){
    this.router.navigateByUrl('bus')
  }

  flightinfo(){
    this.router.navigateByUrl('flight')
  }

  traininfo(){
    this.router.navigateByUrl('train')
  }
}
