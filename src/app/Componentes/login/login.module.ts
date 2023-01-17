import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../Layout/footer/footer.component';
import { HeaderComponent } from '../Layout/header/header.component';



@NgModule({
  declarations: [
    LoginComponent
    ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
    ]
})
export class LoginModule { }
