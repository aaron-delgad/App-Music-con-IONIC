import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  userImge = 'assets/img/fondo.jpg';
  photo: SafeResourceUrl;

  constructor(private readonly domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.domSanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }

}
