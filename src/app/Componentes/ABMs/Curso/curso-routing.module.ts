import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexCursoComponent } from './index-curso/index-curso.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';
import { AbmCursoComponent } from './abm-curso/abm-curso.component';
import { PerfilUsuarioGuard } from 'src/app/Guards/perfil-usuario.guard';

const rutas : Routes = [
  { path : '', component : IndexCursoComponent, children : [
  { path: 'Index', component : ListaCursoComponent },
  { path: 'Create', canActivate: [PerfilUsuarioGuard], component : AbmCursoComponent },
  { path: 'Update/:parametro', canActivate: [PerfilUsuarioGuard], component : AbmCursoComponent },
  { path: 'View/:parametro', canActivate: [PerfilUsuarioGuard], component : AbmCursoComponent },
  { path: 'Delete/:parametro', canActivate: [PerfilUsuarioGuard], component : AbmCursoComponent }]
}]

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
export class CursoRoutingModule { }
