import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Bus } from './bus.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User ={
    fullName: '',
    email: '',
    password: ''
  };

 
  selectedBus: Bus={
    source:'',
    dest:'',
    time:null,
    date:null,
    fare:null,
    seats:null

  };

  f: any;
  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  


  constructor(private http: HttpClient,private authService: SocialAuthService) { }

hi(){
  console.log(this.f)
}

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register' ,user,this.noAuthHeader)
  }

  login(authCredentials: string) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  ticketform(bus: Bus) {
    return this.http.post(environment.apiBaseUrl + '/postbus', bus);

  }

  getticket(form: any):Observable<any>{
    console.log(form);
    return this.http.post(environment.apiBaseUrl + '/getbus', form);
  }


  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile',);
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = localStorage.getItem('token');
    if(token){
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn(){
    var userPayload=this.getUserPayload();
    if(userPayload)
      return userPayload.exp > Date.now()/1000;
    else
      return false;
  }

  signInWithGoogle() {
    console.log("hiii")
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  refreshToken(){
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }




}

