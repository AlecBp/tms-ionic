import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingSessionsPageRoutingModule } from './upcoming-sessions-routing.module';

import { UpcomingSessionsPage } from './upcoming-sessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingSessionsPageRoutingModule
  ],
  declarations: [UpcomingSessionsPage]
})
export class UpcomingSessionsPageModule {}
