import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimerEntregableComponent } from './Componentes/Principal/principal.component';
import { TituloDirective } from './Directivas/titulo.directive';
import { HttpClientModule } from '@angular/common/http';
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
