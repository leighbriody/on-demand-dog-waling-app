import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.page.html',
  styleUrls: ['./login-owner.page.scss' , '../auth.scss'],
})
export class LoginOwnerPage implements OnInit {

  //set login variables
  email:string;
  password:string;

   //user logged in is our flag
   userLoggedIn:boolean = false;

  constructor( private router: Router , private auth : AuthService ) { }

  ngOnInit() {
  }

  SignIn(){
    
    this.auth.loginAsOwner(this.email , this.password);
  
  }

}
