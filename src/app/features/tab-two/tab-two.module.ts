import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabTwoRoutingModule } from './tab-two.routing';
import { TabTwoComponent } from './containers/tab-two/tab-two.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TabTwoRoutingModule
  ],
  declarations: [TabTwoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabTwoModule { }
