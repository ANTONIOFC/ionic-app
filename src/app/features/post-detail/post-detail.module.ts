import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailRoutingModule } from './post-detail.routing';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PostDetailRoutingModule
  ],
  declarations: [PostDetailComponent]
})
export class PostDetailModule { }
