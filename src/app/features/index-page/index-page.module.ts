import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPageRoutingModule } from './index.routing';
import { IndexPageComponent } from './containers/index-page/index-page.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IndexPageRoutingModule
  ],
  declarations: [IndexPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexPageModule { }
