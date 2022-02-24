import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerPetsPageRoutingModule } from './owner-pets-routing.module';

import { OwnerPetsPage } from './owner-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerPetsPageRoutingModule
  ],
  declarations: [OwnerPetsPage]
})
export class OwnerPetsPageModule {}
