import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseSignInPageRoutingModule } from './choose-sign-in-routing.module';

import { ChooseSignInPage } from './choose-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseSignInPageRoutingModule
  ],
  declarations: [ChooseSignInPage]
})
export class ChooseSignInPageModule {}
