import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userDetails:any;

  

  constructor(private userService: UserService, private router: Router, ) { }

  model = {
    source:'',
    dest:'',
    date:'',
    time:'',
    seats:'',
  };

  serverErrorMessages: any;

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  ticketpage(){
    this.router.navigateByUrl('/ticket')
  }

  onSubmit(form : NgForm){
    this.userService.ticketform(form.value).subscribe(
      res => {
        this.router.navigateByUrl('/ticket');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }



}
