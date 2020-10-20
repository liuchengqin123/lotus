import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from "../share/share.module";
import {MinerInfoComponent, OverViewDialogComponent} from './miner-info/miner-info.component';
import {AppRoutingModule} from "./app-routing.module";




@NgModule({
  declarations: [
    DashboardComponent,
    MinerInfoComponent,
    OverViewDialogComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    AppRoutingModule,
  ],

})
export class PagesModule { }
