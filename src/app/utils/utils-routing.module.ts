import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UtilsComponent} from './utils.component';
import { CalcComponent } from './calc/calc.component';
import { TrimComponent } from './trim/trim.component';

const routes: Routes = [
  {
    path: '',
    component: UtilsComponent,
    children: [
      {path: "", pathMatch: "full", redirectTo: "home"},
      {path: "home", component: CalcComponent},
      {path: "trim", component: TrimComponent}
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
export class UtilsRoutingModule { }
