import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuarioComponent } from './lista/lista.component';
import { IndexUsuarioComponent } from './index-usuarios/index.component';
import { AbmUsuarioComponent } from './abm-usuarios/abm-usuario.component';

const rutas : Routes = [
  { path : '', component : IndexUsuarioComponent, children : [
    { path: 'Index', component : ListaUsuarioComponent },    
    { path: 'Create', component : AbmUsuarioComponent },
    { path: 'Update/:parametro', component : AbmUsuarioComponent },
    { path: 'Delete/:parametro', component : AbmUsuarioComponent }]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioModuleRoutingModule { }