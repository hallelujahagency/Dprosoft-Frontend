import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BasicLayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BasicLayoutComponent
	]
})
export class LayoutsModule { }
