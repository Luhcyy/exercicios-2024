import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTopicComponent } from './pending-topic.component';

describe('PendingTopicComponent', () => {
  let component: PendingTopicComponent;
  let fixture: ComponentFixture<PendingTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
