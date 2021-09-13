import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {  SharedModule } from "../../shared/shared.module";
import { RequestsRoutingModule } from "./requests-routing.module";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { CardFormLayoutComponent } from './components/card-form-layout/card-form-layout.component';



@NgModule({
  declarations: [FormBuilderComponent, CardFormLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    SharedModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
