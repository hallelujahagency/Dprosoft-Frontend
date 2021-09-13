import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SettingsRoutingModule } from './settings-routing.module';
import { OrdreMissionTemplateComponent } from './ordre-mission-template/ordre-mission-template.component';
import { WorflowConfigureComponent } from './worflow-configure/worflow-configure.component';
import { ServicesEntrepriseComponent } from './services-entreprise/services-entreprise.component';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';
import { ClasseCollaborateurComponent } from './classe-collaborateur/classe-collaborateur.component';





@NgModule({
  declarations: [OrdreMissionTemplateComponent, WorflowConfigureComponent, ServicesEntrepriseComponent, CollaborateursComponent, ClasseCollaborateurComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    ToastrModule,
    NgxDatatableModule,
    MatTableModule,
    PaginationModule.forRoot(),
    OrderModule,
    DragDropModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
  ]
})
export class SettingsModule { }
