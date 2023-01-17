import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }