import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item-active',
  templateUrl: './menu-item-active.component.html',
  styleUrls: ['./menu-item-active.component.scss']
})
export class MenuItemActiveComponent implements OnInit {

  @Input()
  itemText:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
