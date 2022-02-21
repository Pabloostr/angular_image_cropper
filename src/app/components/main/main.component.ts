import { Component, OnInit } from '@angular/core';

import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  imageChangeEvent: any;
  croppedImage: any;
  localImage: any;
  

  ngOnInit(): void {
    this.localImage = localStorage.getItem("image");
  }

  fileChangeEvent(event: any): void {
    this.imageChangeEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = event.base64;
  }

  imageLoaded(image: LoadedImage) { }

  cropperReady() { }

  loadImageFailed() {
    alert("Image failed :(")
  }

  saveImage(): void {
    localStorage.setItem("image", this.croppedImage);
    this.localImage = localStorage.getItem("image")
  }
}
