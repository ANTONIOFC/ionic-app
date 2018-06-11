import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { of, Observable } from 'rxjs';

import { MotionPWA, IMotionPWADatasOptions } from '../../../../../plugins/motion/pwa/motion-pwa.plugin';
import { CameraPWA } from '../../../../../plugins/camera/pwa/camera-pwa.plugin';

// Instantiate custom plugin
const motionPWA = new MotionPWA();
const cameraPWA = new CameraPWA();

const { Toast, Motion } = Plugins;

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.css']
})
export class TabThreeComponent implements OnInit {

  public motionDatas: Observable<any> = of({message: 'loading...'});

  constructor() { }

  ngOnInit() {
    this.startMotion();
    this.startCamera();
  }

  async startCamera() {
    await cameraPWA.start();
    this.savePic();
  }

  savePic(){
    console.log('pic saved!')
  }

  takeSnapshot() {
    const img = document.querySelector('img') || document.createElement('img');
    const video = document.querySelector('video') || document.createElement('video');
    let canvas = document.querySelector('canvas') || document.createElement('canvas');
    let context;
    const width = video.offsetWidth
      , height = video.offsetHeight;

    canvas = canvas || document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);

    img.src = canvas.toDataURL('image/png');
    document.body.appendChild('imgSnap');
  }


  startMotion() {
    const ready = Capacitor.isPluginAvailable('Motion');
    if (!ready) {
      this.motionDatas = of({message: 'error Capacitaor Motion not available'});
      return this.handlError();
    }
    Motion.addListener('orientation', (data) => {
      console.log('::::: data motion', data);
      this.motionDatas = of(data);
    });
  }

  async handlError() {
    const ERROR_MSG = 'error Capacitaor Motion not available';
    this.motionDatas = of({message: ERROR_MSG});
    this.show({message: ERROR_MSG});
    console.log('error Capacitaor Motion not available');
    // use custom plugin
    await motionPWA.start();
    this.motionDatas = motionPWA.datas;
  }

  async show(option: {message: string} = {message: 'Plugin not working'}) {
    await Toast.show({
      text: option.message
    });
  }


}
