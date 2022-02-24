import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerHomePageRoutingModule } from './owner-home-routing.module';

import { OwnerHomePage } from './owner-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerHomePageRoutingModule
  ],
  declarations: [OwnerHomePage]
})
export class OwnerHomePageModule {}
