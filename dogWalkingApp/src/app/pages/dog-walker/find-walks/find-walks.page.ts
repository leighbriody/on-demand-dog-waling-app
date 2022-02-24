
import { element } from 'protractor';
import { DataService, DogWalker } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleMapService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-find-walks',
  templateUrl: './find-walks.page.html',
  styleUrls: ['./find-walks.page.scss'],
})
export class FindWalksPage implements OnInit {

   countys:[]
  // requests: Request[];
  requests:Request[];
  dogWalkerUser: DogWalker;

   testCountys
  availableCounty

   slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  //google map settings
  zoom = 12;
  markers = []
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
  newLat:any;
  newLong:any;
  length:number;
  
  constructor(private dataservice : DataService ,  private router: Router , private googleMapService : GoogleMapService)  { }

  ngOnInit() {
       //get the logged in walker users county which they are available to walk
       this.dataservice.getDogWalkerUser().subscribe((data: DogWalker) => {   
        this.availableCounty = data.availableCounty;
        this.dataservice.getActiveRequestsForCounty(this.availableCounty).subscribe(res => {
         
          this.requests = res;    

         
         })
      })

         
     //google maps logic

     //we need to get the current users pposition and display as centre 
    //get the markers array
    const markers = this.googleMapService.markers.getValue();   
    
    
    navigator.geolocation.getCurrentPosition((position) => { //use geo location getting the current co ordinates and passing into current location
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude ,
      }
    
      this.googleMapService.currentLocation.next(this.center);
      this.addMarker(position.coords.latitude, position.coords.longitude);
    }) 
  
    


  //loop over the users available to walk countys and get all requests which are active

   
  }

  acceptRequest(request:Request){

    //need to get the current walkers long and lat and add to accept request
    

    //then accept the walk request
    navigator.geolocation.getCurrentPosition((position) => { //use geo location getting the current co ordinates and passing into current location
     
    
      this.googleMapService.currentLocation.next(this.center);
      this.dataservice.acceptOwnersWalkRequest(position.coords.latitude, position.coords.longitude , request , this.dogWalkerUser);
  
    }) 
 

    //then when the status is changed to 
  }

  
  getAvailableWalks(){
 
  }

  joinRapidWalk(rapidWalkId:string){

    this.router.navigate(['/rapid-walk-walker', rapidWalkId]);
  }

  viewOwnerOnMap(request : Request){
  
    this.center = {
      lat: request.lat,
      lng: request.lng,
    }
  
    this.addMarker(request.lat, request.lng);
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
  

}

