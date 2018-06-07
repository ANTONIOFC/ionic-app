import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: 'detail',
    component: PostDetailComponent,
    outlet: 'post-detail'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostDetailRoutingModule { }
