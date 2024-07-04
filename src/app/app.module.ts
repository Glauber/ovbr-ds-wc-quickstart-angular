import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
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
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LancamentoListaComponent } from './pages/lancamento-lista/lancamento-lista.component';
import { LancamentoComponent } from './pages/lancamento/lancamento.component'

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
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
