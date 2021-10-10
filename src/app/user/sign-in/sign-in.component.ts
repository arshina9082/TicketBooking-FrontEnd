import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService,private router: Router,private authService: SocialAuthService) { }

  // public token:Array<string>=[];
  model = {
    email:'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  serverErrorMessages: any;
  ngOnInit(): void {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
    }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
 SignIn() {
   console.log("hiii")
   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data=>{
  //  console.log("hii ")
  })
   this.router.navigateByUrl("/userprofile");
  }
  
}
     

  // this.authService.authState.subscribe((user) => {
  //   // this.userService.signInWithGoogle();
    
  //   this.router.navigateByUrl('/userprofile');
  // });

  // this.userService.signInWithGoogle().subscribe(
  //   res =>{
  //     this.userService.setToken(res['token']);
  //     this.router.navigateByUrl('/userprofile');    
  //   },
  //   err => {
  //     this.serverErrorMessages = err.error.message;
  //   }

  // );








