import { NgModule } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { MinerInfoComponent } from "./miner-info/miner-info.component";

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full'},
  { path: 'minerInfo', component: MinerInfoComponent, pathMatch: 'full'}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
