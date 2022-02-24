import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-owner',
  templateUrl: './sign-up-owner.page.html',
  styleUrls: ['./sign-up-owner.page.scss' , '../auth.scss'],
})
export class SignUpOwnerPage implements OnInit {

  //set our variables
  email:string;
  password:string;

  //track user logged in status
  userLoggedIn:boolean;

  //make injection as we need to access firebase auth
  constructor(private auth :AuthService) { }

  ngOnInit() {
  }


  signUp(){
    //call sign up as owner method and clear fields
    this.auth.signUpAsOwner(this.email , this.password);
     
    console.log("sign up as owner ts trigger" , this.email , this.password);
      this.email ="";
      this.password = "";
  }

}
