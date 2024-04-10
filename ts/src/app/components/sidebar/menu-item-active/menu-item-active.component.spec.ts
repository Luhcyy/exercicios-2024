import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemActiveComponent } from './menu-item-active.component';

describe('MenuItemActiveComponent', () => {
  let component: MenuItemActiveComponent;
  let fixture: ComponentFixture<MenuItemActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
