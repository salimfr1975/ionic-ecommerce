import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalimPage } from './salim.page';

const routes: Routes = [
  {
    path: '',
    component: SalimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalimPageRoutingModule {}
