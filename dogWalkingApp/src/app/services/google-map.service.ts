import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Markers, Position } from '../interfaces/googlemaps';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {

  public markers: BehaviorSubject<Markers[]> = new BehaviorSubject<Markers[]>([]);
  public currentLocation: BehaviorSubject<Position> = new BehaviorSubject<Position>(null);
  
  constructor() { }
}
