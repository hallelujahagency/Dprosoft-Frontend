import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from 'src/app/core/layouts/layouts.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

import { HttpConfigInterceptor } from './core/interceptor/http-config.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation:'decreasing'
    }),
    RouterModule,
    ReactiveFormsModule ,
    LayoutsModule,
    SharedModule,
  ],
  providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
