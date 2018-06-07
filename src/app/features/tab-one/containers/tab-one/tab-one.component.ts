import { Component, OnInit } from '@angular/core';

import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { Observable, of, from as fromPromise } from 'rxjs';

const { Toast, Geolocation } = Capacitor.Plugins;

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  public coordinates$: Observable<GeolocationPosition>;

  constructor() { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition(): Promise<Observable<GeolocationPosition|Error>> {
    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    return this.coordinates$ = fromPromise(Plugins.Geolocation.getCurrentPosition());
  }

  async show() {
    await Toast.show({
      text: 'Hello!'
    });
  }


}
