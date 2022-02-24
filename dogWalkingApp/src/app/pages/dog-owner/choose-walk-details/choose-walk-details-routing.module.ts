import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseWalkDetailsPage } from './choose-walk-details.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseWalkDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseWalkDetailsPageRoutingModule {}
