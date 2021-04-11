import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingSessionsPage } from './upcoming-sessions.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingSessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingSessionsPageRoutingModule {}
