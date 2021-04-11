import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastSessionsPage } from './past-sessions.page';

const routes: Routes = [
  {
    path: '',
    component: PastSessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastSessionsPageRoutingModule {}
