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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    LeftPanelComponent,
    ModalRegistrarComponent,
    ModalLoguearComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModuleModule,
    LayoutModuleRoutingModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    LeftPanelComponent,
    ModalRegistrarComponent,
    ModalLoguearComponent
    ]
})
export class LayoutModuleModule { }
