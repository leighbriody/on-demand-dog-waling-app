import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginWalkerPageRoutingModule } from './login-walker-routing.module';

import { LoginWalkerPage } from './login-walker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginWalkerPageRoutingModule
  ],
  declarations: [LoginWalkerPage]
})
export class LoginWalkerPageModule {}
