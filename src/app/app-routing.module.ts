import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './Componentes/Layout/middle/middle.component';
import { PrimerEntregableComponent } from './Componentes/Layout/Principal/principal.component';
import { AuthGuard } from './Guards/auth.guard';
import { PerfilUsuarioGuard } from './Guards/perfil-usuario.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./Componentes/login/login.module').then(m => m.LoginModule),
      data: {
        nombre: 'Login'
      }
    },
    {
      path: 'registro',
      loadChildren: () => import('./Componentes/registro/registro.module').then(m => m.RegistroModule),
        data: {
          nombre: 'Registrar'
        }
    }, 
    {
    path: 'home',
    component: PrimerEntregableComponent,
    canActivate: [AuthGuard],
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
        canActivate: [PerfilUsuarioGuard],
        loadChildren: () => import('./Componentes/ABMs/Usuarios/usuario-module.module').then(m => m.UsuarioModuleModule),
        data: {
          nombre: 'Usuarios'
        }
      },
      {
        path: 'curso',
        loadChildren: () => import('./Componentes/ABMs/Curso/curso.module').then(m => m.CursoModule),
        data: {
          nombre: 'Cursos'
        }
      },
      {
        path: 'alumno',
        loadChildren: () => import('./Componentes/ABMs/Alumno/alumno-module.module').then(m => m.AlumnoModuleModule),
        data: {
          nombre: 'Alumnos'
        }
      },
      {
        path: 'inscripcion',
        loadChildren: () => import('./Componentes/ABMs/Inscripcion/inscripcion.module').then(m => m.InscripcionModule),
        data: {
          nombre: 'Inscripciones'
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
