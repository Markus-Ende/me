import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'me-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent implements OnInit {
  public buttonIcon: string;
  constructor(private menuService: MenuService, private dialog: MatDialog) {}

  ngOnInit() {
  }

  toggleMenu(): void {
    this.menuService.toggleMainMenu();
  }
}
