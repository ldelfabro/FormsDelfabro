import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaUsuarioSistemaComponent } from './Componentes_Usuarios/alta-usuario-sistema/alta-usuario-sistema.component';
import { CabeceraComponent } from './Componentes_Usuarios/cabecera/cabecera.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Componentes/Layout/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimerEntregableComponent } from './Componentes/primer-entregable/primer-entregable.component';
import { ModalRegistrarComponent } from './Componentes/Layout/modal-registrar/modal-registrar.component';
import { ModalLoguearComponent } from './Componentes/Layout/modal-loguear/modal-loguear.component';
import { NombreCompletoProfesorPipe } from './Pipes/nombre-completo-profesor.pipe';
import { NombreCompletoAlumnoPipe } from './Pipes/nombre-completo-alumno.pipe';
import { FooterComponent } from './Componentes/Layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaUsuarioSistemaComponent,
    CabeceraComponent,
    HeaderComponent,
    PrimerEntregableComponent,
    ModalRegistrarComponent,
    ModalLoguearComponent,
    NombreCompletoProfesorPipe,
    NombreCompletoAlumnoPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
