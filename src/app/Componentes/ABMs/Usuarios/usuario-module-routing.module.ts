import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuarioComponent } from './lista/lista.component';
import { IndexUsuarioComponent } from './index-usuarios/index.component';
import { AbmUsuarioComponent } from './abm-usuarios/abm-usuario.component';
import { PerfilUsuarioGuard } from 'src/app/Guards/perfil-usuario.guard';

const rutas : Routes = [
  { path : '', component : IndexUsuarioComponent, children : [
    { path: 'Index', component : ListaUsuarioComponent },    
    { path: 'Create', canActivate: [PerfilUsuarioGuard], component : AbmUsuarioComponent },
    { path: 'Update/:parametro', canActivate: [PerfilUsuarioGuard], component : AbmUsuarioComponent },
    { path: 'Delete/:parametro', canActivate: [PerfilUsuarioGuard], component : AbmUsuarioComponent }]
  },
  {
    path: '',
    redirectTo: 'Index',
    pathMatch: 'full',
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