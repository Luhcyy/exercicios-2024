import { Component, OnInit, Input } from '@angular/core';
import { TopicServiceService } from 'src/app/services/Topic-service.service';

@Component({
  selector: 'app-pending-topic',
  templateUrl: './pending-topic.component.html',
  styleUrls: ['./pending-topic.component.scss']
})
export class PendingTopicComponent implements OnInit {
  subject: string = '';
  content: string = '';

  constructor(private topicService: TopicServiceService) {
    
  }

  ngOnInit(): void {
    this.topicService.currentTopic.subscribe(topic =>{
      this.subject = topic.subject;
      this.content = topic.content;
    })
  }


}
