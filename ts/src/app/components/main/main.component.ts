import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  videoPath: string;
  videoImagePath: string;
  hideText: boolean = true // Propriedade para controlar a visibilidade do texto adicional
  showMoreText: boolean = false; // Propriedade para controlar a visibilidade do texto adicional
  showDiscussionsSection = true;
  showTopicForm = false;
  

  constructor() {
    this.videoPath = "/assets/video.png";
    this.videoImagePath = "/assets/master_photo-cropped.png";
}

  ngOnInit(): void {
}

toggleShowMoreText() {
   this.showMoreText = !this.showMoreText; // Alterna o estado da visibilidade do texto
    this.hideText = !this.hideText; // Alterna o estado da visibilidade do texto
}

toggleTopicForm () {
  this.showDiscussionsSection = !this.showDiscussionsSection;
  this.showTopicForm = !this.showTopicForm;
}


}
