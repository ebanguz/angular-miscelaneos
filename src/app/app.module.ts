import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { AppResaltadoDirective } from './app-resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

@NgModule({
  imports: [BrowserModule, FormsModule, APP_ROUTING],
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    AppResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    NavbarComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
    UsuarioNuevoComponent,
    UsuarioDetalleComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
