import { TopicServiceService } from 'src/app/services/Topic-service.service';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit {
  isSent = false;
  hideTopicForm = false;

  subject = '';
  content = '';

  @Output() sendClicked = new EventEmitter<void>()

  constructor(private topicService: TopicServiceService) { }

  ngOnInit(): void {
  }

  toggleSuccessMessage() {

  }

  onSend() {
    this.topicService.changeTopic(this.subject, this.content);
    setTimeout(() => {
    
    this.isSent = true;
    this.hideTopicForm = true;
    this.sendClicked.emit();
    }, 1000);
  }
}
