import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapidWalkWalkerPageRoutingModule } from './rapid-walk-walker-routing.module';

import { RapidWalkWalkerPage } from './rapid-walk-walker.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RapidWalkWalkerPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [RapidWalkWalkerPage]
})
export class RapidWalkWalkerPageModule {}
