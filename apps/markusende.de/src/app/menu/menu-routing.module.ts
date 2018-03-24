import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  { path: 'main', component: MainMenuComponent, outlet: 'menu' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
