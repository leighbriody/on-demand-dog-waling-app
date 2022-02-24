import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseWalkDetailsPageRoutingModule } from './choose-walk-details-routing.module';

import { ChooseWalkDetailsPage } from './choose-walk-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseWalkDetailsPageRoutingModule
  ],
  declarations: [ChooseWalkDetailsPage]
})
export class ChooseWalkDetailsPageModule {}
