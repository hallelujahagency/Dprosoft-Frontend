import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule, 
    RouterModule,
    ToastrModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
