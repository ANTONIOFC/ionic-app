import { WebPlugin } from '@capacitor/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

export interface IMotionPWADatasOptions {
  alpha?: number;
  beta?: number;
  bubbles?: boolean;
  cancelBubble?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  defaultPrevented?: boolean;
  eventPhase?: number;
  gamma?: number;
  timeStamp?: number;
  type?: string;
  message?: string;
}

export class MotionPWA extends WebPlugin {

  public datas: BehaviorSubject<IMotionPWADatasOptions> = new BehaviorSubject(null);

  constructor() {
    // Call super with the name of our plugin (this should match the native name),
    // along with the platforms this plugin will activate on. For example, it's possible
    // to use a web plugin for Android and iOS by adding them to the platforms list (lowercased)
    super({
      name: 'MotionPWA',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }) {
    console.log('ECHO', options);
    return Promise.resolve();
  }

  async start() {
    console.log('starting...');
    await window.addEventListener('deviceorientation', (event) => {
      console.log('ready!');
      console.log(event);
      this.datas.next(event);
    });
    return Promise.resolve();
  }
}
