import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OptionFieldTextComponent } from './option-field-text/option-field-text.component';
import { OptionFieldChekboxComponent } from './option-field-chekbox/option-field-chekbox.component';
import { OptionFieldSelectComponent } from './option-field-select/option-field-select.component';
import { OptionFiledRadioComponent } from './option-filed-radio/option-filed-radio.component';
import { ErrorCinqCentPageComponent } from './error-cinq-cent-page/error-cinq-cent-page.component';
import { OptionFieldLocalisationComponent } from './option-field-localisation/option-field-localisation.component';

 

@NgModule({
  declarations: [
    OptionFieldTextComponent,
    OptionFieldChekboxComponent, 
    OptionFieldSelectComponent, 
    OptionFiledRadioComponent, 
    ErrorCinqCentPageComponent,
    OptionFieldLocalisationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
           OptionFieldTextComponent,
           OptionFieldChekboxComponent, 
           OptionFieldSelectComponent, 
           OptionFiledRadioComponent,
           OptionFieldLocalisationComponent
          ]
})
export class SharedModule { }
