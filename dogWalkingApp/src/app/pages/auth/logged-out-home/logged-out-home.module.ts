import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedOutHomePageRoutingModule } from './logged-out-home-routing.module';

import { LoggedOutHomePage } from './logged-out-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggedOutHomePageRoutingModule
  ],
  declarations: [LoggedOutHomePage]
})
export class LoggedOutHomePageModule {}
