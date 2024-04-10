import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pending-topic',
  templateUrl: './pending-topic.component.html',
  styleUrls: ['./pending-topic.component.scss']
})
export class PendingTopicComponent implements OnInit {
  @Input() subject: string = "";
  @Input() content: string = "";

  constructor() {
    
  }

  ngOnInit(): void {
    
  }


}
