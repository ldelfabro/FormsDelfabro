import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TituloDirective } from './Directivas/titulo.directive';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModuleModule } from './Componentes/Layout/layout-module.module';
import { AlumnoModuleModule } from './Componentes/ABMs/Alumno/alumno-module.module';
import { UsuarioModuleModule } from './Componentes/ABMs/Usuarios/profesor-module.module';
import { MaterialModule } from './modules/material/material.module';
import { CursoModule } from './Componentes/ABMs/Curso/curso.module';

@NgModule({
  declarations: [
    AppComponent,
    TituloDirective
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModuleModule,
    AlumnoModuleModule,
    UsuarioModuleModule,
    CursoModule   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }