import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { CalcComponent } from './calc/calc.component';
import { TrimComponent } from './trim/trim.component';
import { UtilsComponent } from './utils.component';

@NgModule({
  declarations: [UtilsComponent, CalcComponent, TrimComponent],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    LayoutModule
  ]
})
export class UtilsModule { }
