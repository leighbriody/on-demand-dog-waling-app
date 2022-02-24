import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapidWalkOwnerPageRoutingModule } from './rapid-walk-owner-routing.module';

import { RapidWalkOwnerPage } from './rapid-walk-owner.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RapidWalkOwnerPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [RapidWalkOwnerPage]
})
export class RapidWalkOwnerPageModule {}
