import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';

import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { EnumListComponent } from './enum-list/enum-list.component';
import { EnumDetailComponent } from './enum-detail/enum-detail.component';

@NgModule({
  declarations: [UiComponent, EnumListComponent, EnumDetailComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    LayoutModule
  ],
  exports: [
    EnumListComponent,
    EnumDetailComponent
  ]
})
export class UiModule { }
