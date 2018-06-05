import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabThreeRoutingModule } from './tab-three.routing';
import { TabThreeComponent } from './containers/tab-three/tab-three.component';

@NgModule({
  imports: [
    CommonModule,
    TabThreeRoutingModule
  ],
  declarations: [TabThreeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabThreeModule { }
