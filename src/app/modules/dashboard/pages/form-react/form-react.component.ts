import { Component, OnInit, OnDestroy } from '@angular/core';
import { formTypeFields } from './data';

import { formPannel } from 'src/app/shared/form-data';
import { FormCard } from 'src/app/shared/form-card.model';

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.css']
})
export class FormReactComponent implements OnInit {

  fields = formTypeFields;
  unsubcribe: any;

  formCard : FormCard [] = formPannel;

  constructor() {
    
    
  }

  ngOnInit(): void {
   

  }


}
