import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class MenuService {
  constructor(private readonly router: Router) {}

  toggleMainMenu(): void {
    const isMenuOpen = () => this.router.url.includes('menu');

    this.router.navigate([
      { outlets: { menu: isMenuOpen() ? null : ['main'] } }
    ]);
  }
}
