import { Component, Input, OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormCard } from 'src/app/shared/form-card.model';

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent implements OnInit {


  @Input() formCardSingle: FormCard;
  formDynamic: FormGroup;
  payLoad = '';
  submitted: boolean;
  constructor() { }

  ngOnInit(){

      const formGroup = {};
      this.formCardSingle.component.forEach(formControl => {
        formGroup[formControl.controlName] = new FormControl('');
      });
      this.formDynamic = new FormGroup(formGroup);

     
      
  }


  submitForm() {

  
    this.submitted = true;
    this.payLoad = JSON.stringify(this.formDynamic.getRawValue());
     console.log(this.payLoad);
 

     
  }

}
