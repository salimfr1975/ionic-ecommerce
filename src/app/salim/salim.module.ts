import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalimPageRoutingModule } from './salim-routing.module';

import { SalimPage } from './salim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalimPageRoutingModule
  ],
  declarations: [SalimPage]
})
export class SalimPageModule {}
