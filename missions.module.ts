import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MissionsRoutingModule } from './missions-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListMissionsComponent } from './list-missions/list-missions.component';
import { OrdresDeMissionComponent } from './ordres-de-mission/ordres-de-mission.component';
import { RequestsMissionComponent } from './requests-mission/requests-mission.component';

import { ValidateOrdreMissionComponent } from "./validate-ordre-de-mission/validate-ordre-mission.component";
import { NoteDeFraisComponent } from './note-de-frais/note-de-frais.component';



@NgModule({
  declarations: [ListMissionsComponent, OrdresDeMissionComponent, RequestsMissionComponent,ValidateOrdreMissionComponent,NoteDeFraisComponent],
  imports: [
    CommonModule,
    MissionsRoutingModule,
    NgxDatatableModule,
    FormsModule, 
    NgSelectModule,
    ToastrModule,
    OrderModule,
    ReactiveFormsModule,
    CollapseModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class MissionsModule { }
