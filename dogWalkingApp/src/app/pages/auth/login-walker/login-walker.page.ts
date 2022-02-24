import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-walker',
  templateUrl: './login-walker.page.html',
  styleUrls: ['./login-walker.page.scss' , '../auth.scss'],
})
export class LoginWalkerPage implements OnInit {

    //set login variables
    email:string;
    password:string;

    //user logged in is our flag
   userLoggedIn:boolean = false;

  constructor(private router: Router , private auth :AuthService) { }

  ngOnInit() {
  }

  SignIn(){
   
    //call the firestore sign in method passing the email and password , along with a then 

    this.auth.loginAsWalker(this.email,this.password);
 
  }

}
