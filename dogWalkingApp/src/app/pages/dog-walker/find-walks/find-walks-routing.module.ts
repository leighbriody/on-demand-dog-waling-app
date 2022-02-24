import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindWalksPage } from './find-walks.page';

const routes: Routes = [
  {
    path: '',
    component: FindWalksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindWalksPageRoutingModule {}
