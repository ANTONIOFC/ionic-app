import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './containers/index-page/index-page.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: IndexPageComponent,
    children: [
      {
        path: 'one',
        outlet: 'one',
        loadChildren: '../tab-one/tab-one.module#TabOneModule'
      },
      {
        path: 'two',
        outlet: 'two',
        loadChildren: '../tab-two/tab-two.module#TabTwoModule'
      },
      {
        path: 'three',
        outlet: 'three',
        loadChildren: '../tab-three/tab-three.module#TabThreeModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(one:one)',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexPageRoutingModule { }
