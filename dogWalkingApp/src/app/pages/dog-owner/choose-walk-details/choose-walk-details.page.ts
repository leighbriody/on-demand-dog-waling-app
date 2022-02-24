import { DogOwner } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { DataService, Dog } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { GoogleMapService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-choose-walk-details',
  templateUrl: './choose-walk-details.page.html',
  styleUrls: ['./choose-walk-details.page.scss'],
})
export class ChooseWalkDetailsPage implements OnInit {

  dogOnwer: DogOwner;
  ownersPets: Dog[];
  walkPrice:number;
  selectedValue:number;
  numberPetsSelected

  firstNameHere
  countyHere
  emailHere
  note
  dogsIdSelectedForWalk : string[] = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  lat
  lng

 

  counter = 0;
  constructor(private dataService: DataService ,  private router: Router , private googleMapService : GoogleMapService) { }

  ngOnInit() {

    //on initlaise of this page we need to get the users pets 
    //store in array
    this.dataService.getAllOwnersPets().subscribe(res =>{
      console.log("All pets in data res" , res);
      this.ownersPets = res;
    })

    this.walkPrice = 0;
  }

  //when duration of walk is changed
  timeChanged(){
    console.log("time changed");
    this.walkPrice = (this.selectedValue / 30 ) * 10;
  }

  //get the current walk price based on duration
  getWalkPrice(minutes){
    console.log("changed " , minutes);
    this.walkPrice = (this.selectedValue / 30 ) * 10;
  }


   makeRequestForWalkers(){

      let numPetsSelected = 0;
      for(let dog of  this.ownersPets){
          if(dog.isChecked){
        
            console.log("pet is checked" , dog);
            numPetsSelected++;
            let dogSelected = {} as Dog;
            dogSelected.age = dog.age;
            dogSelected.breed = dog.breed;
            dogSelected.description = dog.description;
            dogSelected.gender = dog.gender;
            dogSelected.height = dog.height;
            dogSelected.id = dog.id;
            dogSelected.isChecked = dog.isChecked;
            dogSelected.name = dog.name;
            this.dogsIdSelectedForWalk.push(dogSelected.id);
          }
      }

      this.numberPetsSelected = numPetsSelected;
      
      console.log(numPetsSelected , " selected for walk " , this.dogsIdSelectedForWalk );

    this.walkPrice = (this.selectedValue / 30 ) * 10;

    //get current logged in owner details
    this.dataService.getOwner().subscribe((data: DogOwner) => {
      this.dogOnwer = {
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        city:data.city,
        county:data.county,
        eircode:data.eircode,
        phone:data.phone,
        street:data.street
      }
      this.firstNameHere = data.firstName
      this.countyHere = data.county;
      this.emailHere = data.email;
    })

    //get current logged in owners geo lat and long and add to request
    navigator.geolocation.getCurrentPosition((position) => { 
        this.lat =  position.coords.latitude;
        this.lng = position.coords.longitude;
        this.dataService.sendWalkersRequest( this.dogsIdSelectedForWalk  , this.lat , this.lng , this.dogOnwer ,  this.numberPetsSelected , this.selectedValue , this.walkPrice , this.note);
    }) 

  
  }
}
