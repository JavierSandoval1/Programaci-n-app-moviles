import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CoversorPage } from './coversor.page';
import { CoversorPageRoutingModule } from './coversor-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoversorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CoversorPage]
})
export class CoversorPageModule {}
