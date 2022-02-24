import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkerHomePageRoutingModule } from './walker-home-routing.module';

import { WalkerHomePage } from './walker-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkerHomePageRoutingModule
  ],
  declarations: [WalkerHomePage]
})
export class WalkerHomePageModule {}
