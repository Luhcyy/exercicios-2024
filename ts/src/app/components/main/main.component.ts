import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  hideText: boolean = true // Propriedade para controlar a visibilidade do texto adicional
  showMoreText: boolean = false; // Propriedade para controlar a visibilidade do texto adicional
  showDiscussionsSection = true;
  showTopicForm = false;
  
  pendingTopics: any[] = [];
  

  constructor() {

}

  ngOnInit(): void {
}

toggleShowMoreText() {
    this.showMoreText = !this.showMoreText; 
    this.hideText = !this.hideText; 
}

toggleTopicForm () {
  this.showDiscussionsSection = !this.showDiscussionsSection;
  this.showTopicForm = !this.showTopicForm;
}

addPendingTopic() {
  this.pendingTopics.push({})
}


}
