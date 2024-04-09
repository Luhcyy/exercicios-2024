import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {
showAnsweredTopics = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleAnsweredTopics() {
    this.showAnsweredTopics = !this.showAnsweredTopics
  }

}
