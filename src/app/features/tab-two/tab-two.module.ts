import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabTwoRoutingModule } from './tab-two.routing';
import { TabTwoComponent } from './containers/tab-two/tab-two.component';

@NgModule({
  imports: [
    CommonModule,
    TabTwoRoutingModule
  ],
  declarations: [TabTwoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabTwoModule { }
