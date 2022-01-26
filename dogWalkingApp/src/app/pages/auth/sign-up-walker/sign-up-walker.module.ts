import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpWalkerPageRoutingModule } from './sign-up-walker-routing.module';

import { SignUpWalkerPage } from './sign-up-walker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpWalkerPageRoutingModule
  ],
  declarations: [SignUpWalkerPage]
})
export class SignUpWalkerPageModule {}
