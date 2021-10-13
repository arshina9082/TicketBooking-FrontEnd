import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { concatAll } from 'rxjs/operators';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userDetails:any;
  a : any;
  b: any;
  c: any;
  d: any;
  totalfare: any;

  

  constructor(private userService: UserService, private router: Router, ) { }

  


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

  // ticketpage(){
  //   this.router.navigateByUrl('/ticket')
  // }

  onSubmit(form : any){
    console.log(form.value)
    this.userService.getticket(form.value).subscribe(
      res => {  
        this.userService.f=res;
        this.a=res;
        this.b = this.a[0].fare
        this.c = form.value.seats
        this.a[0].fare = (this.b*this.c);
        this.a[0]._id = form.value.seats;
        console.log(this.a[0].fare)
        console.log(this.a);   
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
