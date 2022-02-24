import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindingWalkersPageRoutingModule } from './finding-walkers-routing.module';

import { FindingWalkersPage } from './finding-walkers.page';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindingWalkersPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [FindingWalkersPage]
})
export class FindingWalkersPageModule {}
