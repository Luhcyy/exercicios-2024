import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  videoPath:string
  videoImagePath:string

  constructor() {
    this.videoPath = "/assets/video.png"
    this.videoImagePath = "/assets/master_photo-cropped.png"
  }

  ngOnInit(): void {
  }

}
