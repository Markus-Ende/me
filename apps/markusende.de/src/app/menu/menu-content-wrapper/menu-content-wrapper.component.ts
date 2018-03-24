import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-menu-content-wrapper',
  templateUrl: './menu-content-wrapper.component.html',
  styleUrls: ['./menu-content-wrapper.component.scss']
})
export class MenuContentWrapperComponent implements OnInit {
  public showMenu = false;
  constructor() {}

  ngOnInit() {}
}
