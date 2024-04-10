import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {

  private topicSource = new BehaviorSubject<{subject: string, content: string }>({subject: '', content: ''});
  currentTopic = this.topicSource.asObservable();

  constructor() { }

  changeTopic(subject: string, content: string){
    this.topicSource.next({subject, content})
  }
}
