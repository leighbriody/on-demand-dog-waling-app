import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerPetsPage } from './owner-pets.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerPetsPageRoutingModule {}
