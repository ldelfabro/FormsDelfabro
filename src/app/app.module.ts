import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimerEntregableComponent } from './Componentes/Principal/principal.component';
import { ModalRegistrarComponent } from './Componentes/Layout/modal-registrar/modal-registrar.component';
import { ModalLoguearComponent } from './Componentes/Layout/modal-loguear/modal-loguear.component';
import { TituloDirective } from './Directivas/titulo.directive';
import { HttpClientModule } from '@angular/common/http';
import { PipeModuleModule } from './Pipes/pipe-module.module';
import { LayoutModuleModule } from './Componentes/Layout/layout-module.module';
import { AlumnoModuleModule } from './Componentes/ABMs/Alumno/alumno-module.module';
import { ProfesorModuleModule } from './Componentes/ABMs/Profesor/profesor-module.module';

@NgModule({
  declarations: [
    AppComponent,
    PrimerEntregableComponent,
    TituloDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModuleModule,
    AlumnoModuleModule,
    ProfesorModuleModule   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
