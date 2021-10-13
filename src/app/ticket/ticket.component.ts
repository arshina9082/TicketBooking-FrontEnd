import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public ticketDetails:any;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
}

d:any=this.userService.f;



}
