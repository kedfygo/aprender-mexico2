import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemaComponent } from './components/tema/tema.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AgregarComponent } from './components/mantenimiento/agregar.component';


// Rutas
import { APP_ROUTING } from './app.routes';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';

// Servicios
import { PreguntasService } from './services/preguntas.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemaComponent,
    NavbarComponent,
    MantenimientoComponent,
    AgregarComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    PreguntasService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
