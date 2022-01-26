import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpOwnerPageRoutingModule } from './sign-up-owner-routing.module';

import { SignUpOwnerPage } from './sign-up-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpOwnerPageRoutingModule
  ],
  declarations: [SignUpOwnerPage]
})
export class SignUpOwnerPageModule {}
