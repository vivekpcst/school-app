import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoworkPageRoutingModule } from './cowork-routing.module';

import { CoworkPage } from './cowork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoworkPageRoutingModule
  ],
  declarations: [CoworkPage]
})
export class CoworkPageModule {}
