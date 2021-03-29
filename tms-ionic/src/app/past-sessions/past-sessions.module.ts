import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastSessionsPageRoutingModule } from './past-sessions-routing.module';

import { PastSessionsPage } from './past-sessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastSessionsPageRoutingModule
  ],
  declarations: [PastSessionsPage]
})
export class PastSessionsPageModule {}
