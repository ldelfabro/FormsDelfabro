import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalRegistrarComponent } from './modal-registrar/modal-registrar.component';
import { ModalLoguearComponent } from './modal-loguear/modal-loguear.component';
import { PipeModuleModule } from 'src/app/Pipes/pipe-module.module';
import { LayoutModuleRoutingModule } from './layout-module-routing.module';
import { RouterModule } from '@angular/router';
import { PrimerEntregableComponent } from './Principal/principal.component';

@NgModule({
  declarations: [
    ModalRegistrarComponent,
    ModalLoguearComponent,
    PrimerEntregableComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    LeftPanelComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModuleModule,
    LayoutModuleRoutingModule,
    MaterialModule
  ],
  exports : [
    PrimerEntregableComponent
  ]
})
export class LayoutModuleModule { }
