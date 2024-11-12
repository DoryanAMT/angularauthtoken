import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// formularios
import { FormsModule } from '@angular/forms';

//peticiones
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceEmpleados } from './services/service.empleados';
import { MenuComponent } from './components/menu/menu.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HomeComponent } from './components/home/home.component';
import { SubordinadosComponent } from './components/subordinados/subordinados.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    EmpleadosComponent,
    HomeComponent,
    SubordinadosComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    ServiceEmpleados
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
