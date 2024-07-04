import { Component, ViewChild } from '@angular/core';
import { BrMenuComponent } from '@govbr-ds/webcomponents';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  @ViewChild('menu') menu!: BrMenuComponent;

  toggleMenu() {
    this.menu.toggle();
  }
}