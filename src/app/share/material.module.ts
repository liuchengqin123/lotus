import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from "@angular/material/slider";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {A11yModule} from "@angular/cdk/a11y";
import {CdkTableModule} from "@angular/cdk/table";
import {MatBadgeModule} from "@angular/material/badge";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatRippleModule} from "@angular/material/core";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    A11yModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatBadgeModule,
    MatRippleModule,
    MatSortModule,
    MatDialogModule,
    MatExpansionModule,
    MatSidenavModule,
  ],
})
export class MaterialModule { }
