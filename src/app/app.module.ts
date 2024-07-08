import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
// import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { CookiebarComponent } from './cookiebar/cookiebar.component'
import { CustomValueAccessorDirective } from './directives/CustomValueAccessor.directives'
import { FooterComponent } from './footer/footer.component'
import { FormComponent } from './form/form.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { MenuComponent } from './menu/menu.component'
import { MessageComponent } from './message/message.component'
import { InicioComponent } from './pages/inicio/inicio.component'
import { LancamentoListaComponent } from './pages/lancamento-lista/lancamento-lista.component'
import { LancamentoComponent } from './pages/lancamento/lancamento.component'
import { LayoutComponent } from './pages/layout/layout.component'
import { PesquisaLancamentoComponent } from './pages/pesquisa-lancamento/pesquisa-lancamento.component'
import { SignInComponent } from './sign-in/sign-in.component';
import { RelatorioLancamentoComponent } from './pages/relatorio-lancamento/relatorio-lancamento.component';
import { RelatorioFinanceiroComponent } from './pages/relatorio-financeiro/relatorio-financeiro.component';
import { ServicosLoteComponent } from './pages/servicos-lote/servicos-lote.component'

@NgModule({
  declarations: [
    AppComponent,
    CookiebarComponent,
    CustomValueAccessorDirective,
    BreadcrumbComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MessageComponent,
    SignInComponent,
    LayoutComponent,
    InicioComponent,
    LancamentoListaComponent,
    LancamentoComponent,
    PesquisaLancamentoComponent,
    RelatorioLancamentoComponent,
    RelatorioFinanceiroComponent,
    ServicosLoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgxMaskDirective
  ],
  providers: [
    // provideNgxMask({})
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
