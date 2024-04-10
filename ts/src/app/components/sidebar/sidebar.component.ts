import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  eventLogoPath:string

  constructor() {
    this.eventLogoPath = "/assets/13-slaca-cropped.png"
  }

  ngOnInit(): void {

  }

}


