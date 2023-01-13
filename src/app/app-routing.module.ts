import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './Componentes/Layout/middle/middle.component';
import { PrimerEntregableComponent } from './Componentes/Layout/Principal/principal.component';

const routes: Routes = [
  {
    path: 'home',
    component: PrimerEntregableComponent,
    data: {
      nombre: 'home'
    },
    children: [
      {
        path: '',
        component: MiddleComponent,
        data: {
          nombre: 'Bienvenido'
        }
      },
      {
        path: 'usuario',
        loadChildren: () => import('./Componentes/ABMs/Usuarios/profesor-module.module').then(m => m.UsuarioModuleModule),
        data: {
          nombre: 'Productos'
        }
      },
      {
        path: 'curso',
        loadChildren: () => import('./Componentes/ABMs/Curso/curso.module').then(m => m.CursoModule),
        data: {
          nombre: 'Proveedores'
        }
      },
      {
        path: 'alumno',
        loadChildren: () => import('./Componentes/ABMs/Alumno/alumno-module.module').then(m => m.AlumnoModuleModule),
        data: {
          nombre: 'Productos'
        }
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
