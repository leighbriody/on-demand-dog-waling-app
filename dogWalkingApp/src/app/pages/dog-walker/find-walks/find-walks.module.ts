import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindWalksPageRoutingModule } from './find-walks-routing.module';

import { FindWalksPage } from './find-walks.page';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindWalksPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [FindWalksPage]
})
export class FindWalksPageModule {}
