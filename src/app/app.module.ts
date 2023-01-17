import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TituloDirective } from './Directivas/titulo.directive';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { LayoutModuleModule } from './Componentes/Layout/layout-module.module';

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
 //   MaterialModule,
    LayoutModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }