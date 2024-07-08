import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { CookiebarComponent } from './cookiebar/cookiebar.component'
import { FormComponent } from './form/form.component'
import { HomeComponent } from './home/home.component'
import { SignInComponent } from './sign-in/sign-in.component'

import { LancamentoListaComponent } from './pages/lancamento-lista/lancamento-lista.component'
import { LancamentoComponent } from './pages/lancamento/lancamento.component'
import { LayoutComponent } from './pages/layout/layout.component'
import { PesquisaLancamentoComponent } from './pages/pesquisa-lancamento/pesquisa-lancamento.component'
import { RelatorioFinanceiroComponent } from './pages/relatorio-financeiro/relatorio-financeiro.component'
import { RelatorioLancamentoComponent } from './pages/relatorio-lancamento/relatorio-lancamento.component'
import { ServicosLoteComponent } from './pages/servicos-lote/servicos-lote.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
      },
      {
        path: 'pesquisar-lancamento',
        component: PesquisaLancamentoComponent,
        data: { breadCrumb: 'Pesquisa de Lançamentos' },
      },
      {
        path: 'relatorio-lancamento',
        component: RelatorioLancamentoComponent,
        data: { breadCrumb: 'RELATORIO DE LANÇAMENTOS' },
      },
      {
        path: 'relatorio-financeiro',
        component: RelatorioFinanceiroComponent,
        data: { breadCrumb: 'RELATORIO FINANCEIRO' },
      },
      {
        path: 'servicos-lote',
        component: ServicosLoteComponent,
        data: { breadCrumb: 'SERVIÇOS EM LOTE' },
      },
      {
        path: 'lancamento-lista',
        component: LancamentoListaComponent,
        data: { breadCrumb: 'Lista de Lançamentos' },
      },
      { path: 'lancamento/:id', component: LancamentoComponent },

    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadCrumb: 'Home' },
  },
  {
    path: 'formulario',
    component: FormComponent,
    data: { breadCrumb: 'Formulário' },
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: { breadCrumb: 'Sign-In' },
  },
  {
    path: 'cookiebar',
    component: CookiebarComponent,
    data: { breadCrumb: 'Cookiebar' },
  },

];


@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule { }
