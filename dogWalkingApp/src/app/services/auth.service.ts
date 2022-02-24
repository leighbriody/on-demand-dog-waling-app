import { DogWalker } from './data.service';
import { collection, doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //store our auth in a varibale
  auth = getAuth();

  constructor(private firestore : Firestore , private router: Router) { 
    
  }
 
  signUpAsOwner(email:string , password:string){
    //create user with credentials
    createUserWithEmailAndPassword(this.auth , email , password).then(cred => {   
      const usersRef = collection(this.firestore,'dogowners'); 
       setDoc(doc(this.firestore, "dogowners", email), {
       username: email,
     });
      }) .catch(async (error) => {
        //if the email is already in use , check if its as dog walker
        if(error.code === "auth/email-already-in-use"){
          const docRef = doc(this.firestore, "dogowners", email);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
          } else {
            // doc.data() will be undefined in this case so they do not exists as a dog owner
            //therefore we can go ahead and create them as one
            console.log("User already existed as a dog walker but now they are an owner aswel")
            setDoc(doc(this.firestore, "dogowners", email), {
              username: email,
            });
          }
        }
      });
  }


  SignUpAsDogWalker(email:string , password:string , firstName:string , lastName:string , eircode:string , phoneNumber:string , county:string , addressLine:String ){
       
        createUserWithEmailAndPassword(this.auth , email , password).then(cred => {
          //when they sign up we want to set a unique id on that document 
          const usersRef = collection(this.firestore,'dogowners');
          //add document
           setDoc(doc(this.firestore, "dogwalkers", email), {
          
         });     
          }) .catch(async (error) => {   
            //if the email is already in use
            if(error.code === "auth/email-already-in-use"){
              //we want to check and see if that user already exists as a dog owner (as they may just be dog walker)
              const docRef = doc(this.firestore, "dogwalkers", email);
              const docSnap = await getDoc(docRef);  
              if (docSnap.exists()) {
              } else {
                // doc.data() will be undefined in this case so they do not exists as a dog owner
                //therefore we can go ahead and create them as one
                console.log("User already existed as a dog owner but now they are an walker also")
                setDoc(doc(this.firestore, "dogwalkers", email), {
                  username: email,
                  firstName:firstName,
                  lastName:lastName,
                  eircode:eircode,
                  phoneNumber:phoneNumber,
                  county:county,
                  addressLine:addressLine
                });
              }
            }
    
          });
  }

  loginAsOwner(email:string , password:string  ){

    signInWithEmailAndPassword(this.auth , email ,password).then(cred => {
      //clear fields and re direct
    
      console.log("login walker triggered in autth" , email , password);
      this.router.navigateByUrl('/owner-home');
    })
    
  }

  loginAsWalker(email:string , password:string  ){

    signInWithEmailAndPassword(this.auth , email ,password).then(cred => {
      //clear fields and re direct
    
      console.log("login walker triggered in autth" , email , password);
      this.router.navigateByUrl('/walker-home');
    })
    
  }
}
