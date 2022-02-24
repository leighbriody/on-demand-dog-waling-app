import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindingWalkersPage } from './finding-walkers.page';

const routes: Routes = [
  {
    path: '',
    component: FindingWalkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindingWalkersPageRoutingModule {}
