import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UiComponent } from './ui.component';
import { EnumListComponent } from './enum-list/enum-list.component';
import { EnumDetailComponent } from './enum-detail/enum-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {path: "", pathMatch: "full", redirectTo: "enum-list"},
      {path: "enum-list", component: EnumListComponent},
      {path: "enum-detail", component: EnumDetailComponent}
    ]  
  }  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UiRoutingModule { }
