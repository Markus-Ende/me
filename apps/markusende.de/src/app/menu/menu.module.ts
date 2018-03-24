import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuContentWrapperComponent } from './menu-content-wrapper/menu-content-wrapper.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuService } from './shared/menu.service';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    MenuButtonComponent,
    MenuContentWrapperComponent,
    MainMenuComponent
  ],
  exports: [MenuButtonComponent, MenuContentWrapperComponent],
  providers: [MenuService]
})
export class MenuModule {}
