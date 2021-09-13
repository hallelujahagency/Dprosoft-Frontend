import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditProfilComponent } from './pages/edit-profil/edit-profil.component';
import { ProfilComponent } from './pages/profil/profil.component'; 



@NgModule({
  declarations: [EditProfilComponent, ProfilComponent],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    CollapseModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
  ]
})
export class UserAccountModule { }
 