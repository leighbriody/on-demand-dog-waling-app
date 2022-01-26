import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginOwnerPageRoutingModule } from './login-owner-routing.module';

import { LoginOwnerPage } from './login-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginOwnerPageRoutingModule
  ],
  declarations: [LoginOwnerPage]
})
export class LoginOwnerPageModule {}
