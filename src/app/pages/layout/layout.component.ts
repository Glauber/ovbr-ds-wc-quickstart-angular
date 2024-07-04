import { Component } from '@angular/core'
import { SharedService } from '../../shared.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(public sharedService: SharedService) {}

  // Vai usar o estado compartilhado para abrir e fechar o menu
  toggleMenu() {
    this.sharedService.isOpen = !this.sharedService.isOpen
  }
}
