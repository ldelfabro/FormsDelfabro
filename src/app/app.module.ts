import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Componentes/Layout/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimerEntregableComponent } from './Componentes/Principal/principal.component';
import { ModalRegistrarComponent } from './Componentes/Layout/modal-registrar/modal-registrar.component';
import { ModalLoguearComponent } from './Componentes/Layout/modal-loguear/modal-loguear.component';
import { NombreCompletoProfesorPipe } from './Pipes/nombre-completo-profesor.pipe';
import { NombreCompletoAlumnoPipe } from './Pipes/nombre-completo-alumno.pipe';
import { FooterComponent } from './Componentes/Layout/footer/footer.component';
import { MiddleComponent } from './Componentes/Layout/middle/middle.component';
import { IndexComponent } from './Componentes/ABMs/Profesor/index/index.component';
import { ListaComponent } from './Componentes/ABMs/Profesor/lista/lista.component';
import { ListaAlumnoComponent } from './Componentes/ABMs/Alumno/lista-alumno/lista-alumno.component';
import { IndexAlumnoComponent } from './Componentes/ABMs/Alumno/index-alumno/index-alumno.component';
import { AltaAlumnoComponent } from './Componentes/ABMs/Alumno/alta-alumno/alta-alumno.component';
import { LeftPanelComponent } from './Componentes/Layout/left-panel/left-panel.component';
import { TituloDirective } from './Directivas/titulo.directive';
import { HttpClientModule } from '@angular/common/http';
import { ArraySortPipe } from './Pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimerEntregableComponent,
    ModalRegistrarComponent,
    ModalLoguearComponent,
    NombreCompletoProfesorPipe,
    NombreCompletoAlumnoPipe,
    FooterComponent,
    MiddleComponent,
    IndexComponent,
    ListaComponent,
    ListaAlumnoComponent,
    IndexAlumnoComponent,
    AltaAlumnoComponent,
    LeftPanelComponent,
    TituloDirective,
    ArraySortPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
