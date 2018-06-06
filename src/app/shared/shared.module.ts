import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { GenericHttpService } from './generic-http/generic-http.service';
import { HttpClientModule } from '@angular/common/http';


const COMPONENTS: any[] = [
  MapComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [COMPONENTS],
  exports: [...COMPONENTS, CommonModule, HttpClientModule],
  providers: [GenericHttpService]
})
export class SharedModule { }
