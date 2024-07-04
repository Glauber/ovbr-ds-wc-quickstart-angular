import { Component } from '@angular/core'
import { SharedService } from '../shared.service'

/**
 * Componente do cabeçalho da aplicação.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public title: string = 'Web Components GovBR-DS - Quickstart Angular'
  public signature: string = 'Padrão Digital de Governo'
  public image = {
    src: 'assets/logo_angular.png',
    alt: 'Logo de exemplo',
  }

  constructor(public sharedService: SharedService) {}

  public links: any[] = [
    {
      name: 'Web Components',
      href: 'https://www.gov.br/ds/webcomponents',
      title: 'Web Components',
      target: '_blank',
    },
    {
      name: 'Padrão Digital de Governo',
      href: 'https://gov.br/ds',
      title: 'Padrão Digital de Governo',
      target: '_blank',
    },
  ]

  public functions: any[] = [
    {
      icon: 'code',
      name: 'Repositórios de Web Components',
      url: 'https://gitlab.com/govbr-ds/bibliotecas/wc',
      tooltipText: 'Contribua com os projetos de Web Components',
      tooltipPlace: 'bottom',
    },
    {
      icon: 'discord',
      iconFamily: 'fab',
      name: 'Discord',
      url: 'https://discord.gg/U5GwPfqhUP',
      tooltipText: 'Faça parte da nossa comunidade no discord',
      tooltipPlace: 'bottom',
    },
    {
      icon: 'book',
      name: 'Wiki',
      url: 'https://gov.br/ds/wiki/',
      tooltipText: 'Conheça nossa Wiki',
      tooltipPlace: 'bottom',
    },
  ]

  public toggleMenu(): void {
    this.sharedService.isOpen = !this.sharedService.isOpen
  }
}
