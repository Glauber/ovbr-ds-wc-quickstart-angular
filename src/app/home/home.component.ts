import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  onLoad($event) {
    console.log('Arquivo carregado...')
  }

  onError($event) {
    console.log('Erro ao carregar arquivo:', $event)
  }
}
