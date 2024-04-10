import { Component, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit {
  isSent = false;
  hideTopicForm = false;

  @Output() sendEvent = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  toggleSuccessMessage() {

  }

  onSend() {
    setTimeout(() => {
    this.hideTopicForm = true;
    this.isSent = true;
    }, 1000);
  }
}
