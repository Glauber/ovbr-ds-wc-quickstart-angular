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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
      },
      {
        path: 'lancamento-lista',
        component: LancamentoListaComponent,
        data: { breadCrumb: 'Lista de Lançamentos' },
      },
      { path: 'lancamento/:id', component: LancamentoComponent },

    ],
  },
];


@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule { }
