import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailRoutingModule } from './post-detail.routing';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { DetailModalComponent } from './containers/detail-modal/detail-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    PostDetailRoutingModule
  ],
  entryComponents: [DetailModalComponent],
  declarations: [PostDetailComponent, DetailModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostDetailModule { }
