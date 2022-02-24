import { getAuth } from 'firebase/auth';

import { DataService, DogOwner, DogWalker, walkersWhoAccepted } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleMapService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-finding-walkers',
  templateUrl: './finding-walkers.page.html',
  styleUrls: ['./finding-walkers.page.scss'],
})
export class FindingWalkersPage implements OnInit {
  numberDogs: number;
  price: number;

  constructor(private dataService: DataService, private activatedRouter: ActivatedRoute, private googleMapService: GoogleMapService) { }

  walkRequestId: string;
  markers = []
  zoom = 12;
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  }

  map: google.maps.Map;
  newLat: any;
  newLong: any;


  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  walkersWhoAcceptedRequest: walkersWhoAccepted[];

  ngOnInit() {
    //we want to get the sub collection of walkers who accepted offer
    //get the id and log
    this.walkRequestId = this.activatedRouter.snapshot.paramMap.get("id");
    //now that we have that walk request id we need to listen for the walkers who accepted our offer
    //walk requests / id of request just created / walkers who accepted requests
    this.dataService.getWalkersWhoAcceptedRequest(this.walkRequestId).subscribe(res => {
      console.log("walkers who accepted ", res);
      console.log("walkers who accepted array", this.walkersWhoAcceptedRequest);
      this.walkersWhoAcceptedRequest = res;
    })

    //on init we need to centre the user
    //google maps logic

    //we need to get the current users pposition and display as centre 
    //get the markers array
    const markers = this.googleMapService.markers.getValue();


    navigator.geolocation.getCurrentPosition((position) => { //use geo location getting the current co ordinates and passing into current location
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }

      this.googleMapService.currentLocation.next(this.center);
      this.addMarker(position.coords.latitude, position.coords.longitude);
    })

  }

  //we will have an array of accepted requests

  //we want to get all accepted requests which are from todays date , and have a status of waiting response

  viewOnMap(walker: walkersWhoAccepted) {
    this.center = {
      lat: walker.lat,
      lng: walker.lng,
    }

    this.addMarker(walker.lat, walker.lng);
    this.googleMapService.currentLocation.next(this.center);
  }


  addMarker(lat, lng): void {                     // pushing the marker we got from current location into array of markers
    this.markers.push({
      location: 'home',
      position: {
        lat,
        lng,
      },
    });
    this.googleMapService.markers.next(this.markers);
    this.newLat = "";
    this.newLong = "";
  }


  acceptWalkersRequest(walkRequestId: string, ownerEmail: string, walkerEmail: string, walkerLat: number, walkerLng: number , price:number , numberPets:number , durationMins:number) {

    let owner = <DogOwner>{};
    let walker = <DogWalker>{};

    let walkerName;
    let walkPrice;
  

    this.dataService.getOwnerByEmail(ownerEmail).subscribe(res => {
      console.log("created owner res ", res);
      owner.firstName = res.firstName,
        owner.lastName = res.lastName,
        owner.city = res.city,
        owner.street = res.street,
        owner.eircode = res.eircode,
        owner.email = res.email;
    })

    //get walker object
    console.log("walker email ", walkerEmail);
    this.dataService.getWalkerByEmail(walkerEmail).subscribe(res => {
      console.log("created owner res ", res);
      walker.firstName = res.firstName,
        walker.lastName = res.lastName,
        walker.eircode = res.eircode,
        walker.phoneNumber = res.phoneNumber,
        walker.county = res.county,
        walker.addressLine = res.addressLine,
        walker.username = res.username,
        walker.availableCounty = res.availableCounty;

    })

    //get price and number pets and add to rapid walk 
    this.dataService.getWalkRequestById(walkRequestId).subscribe( res => {
      this.numberDogs = res.numberPets;
      this.price = res.price;
    })
    //get current logged in owner lat and long and add to request 
    navigator.geolocation.getCurrentPosition((position) => { //use geo location getting the current co ordinates and passing into current location

      let ownerLat = position.coords.latitude;
      let ownerLng = position.coords.longitude;

      console.log("rapid walk created lat details below")
      console.log("owner ", ownerLat, " ", ownerLng);
      console.log("walker", walkerLat, walkerLng)


      console.log("about to make rapid walk with mins" , durationMins);
      this.dataService.createRapidWalk(walkRequestId, ownerEmail, walkerEmail, price , numberPets , "walk details need to go in", walkerLat, walkerLng, ownerLat, ownerLng , durationMins);
    })







    //we then need to add the rapid walk id on to the walk request

  }
}
