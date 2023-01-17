import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RegistroRoutingModule { }
