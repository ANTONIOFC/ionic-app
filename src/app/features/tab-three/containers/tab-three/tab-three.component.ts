import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.css']
})
export class TabThreeComponent implements OnInit {

  image: SafeResourceUrl;

  constructor(private domSanititer: DomSanitizer) { }

  async takePhoto() {
    const { Camera } = Plugins;

    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64
    });
    this.image = this.domSanititer.bypassSecurityTrustResourceUrl(
      result && result.base64Data
    );
  }

  ngOnInit() {
  }

}
