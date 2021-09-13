import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormReactComponent } from './pages/form-react/form-react.component';
import { DynamicFormBuilderComponent } from './pages/form-react/dynamic-form-builder/dynamic-form-builder.component';
import { OptionFieldComponent } from './option-field/option-field.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardFullComponent } from './pages/dashboard-full/dashboard-full.component';




@NgModule({
  declarations: [DashboardFullComponent,FormReactComponent, DynamicFormBuilderComponent, OptionFieldComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
   FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
