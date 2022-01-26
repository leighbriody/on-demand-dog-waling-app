import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedOutHomePage } from './logged-out-home.page';

const routes: Routes = [
  {
    path: '',
    component: LoggedOutHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedOutHomePageRoutingModule {}
