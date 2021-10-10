import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: any;
  serverErrorMessage: any;


  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(()=> this.showSucessMessage=false,4000);
        this.resetForm(form);
      },
      err => {
        if (err.status===422){
          this.serverErrorMessage = err.error.join('<br/>'); 
        }
        else
        this.serverErrorMessage= "Something went wrong contact admin";
      }

    );

    }

    resetForm(form: NgForm) {
      this.userService.selectedUser = {
        fullName: '',
        email: '',
        password: ''
      };
      form.resetForm();
      this.serverErrorMessage = '';
    }

  }
