import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { MatBadgePosition } from '@angular/material/badge';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements  OnInit, AfterViewInit{
  positionOption: TooltipPosition = 'above';
  position = new FormControl(this.positionOption);
  badgePosition: MatBadgePosition  = 'before';
  constructor() {
  }
  ngOnInit(): void{
  }
  ngAfterViewInit(): void {
  }

  // getSectors(){
  //   return this.lotusClient.minerSectorCount( new MinerSectorCountRequest({minerId: 't01001'})).subscribe(
  //     res => console.log(res)
  //   );
  // }

  // getMinerWork(){
  //   return this.lotusClient.minerWorkers( new MinerWorkersRequest()).subscribe(
  //     res => console.log(res)
  //   );
  // }
}
