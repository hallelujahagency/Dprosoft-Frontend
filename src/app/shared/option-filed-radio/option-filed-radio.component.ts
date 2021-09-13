import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '../form-component.model';

@Component({
  selector: 'app-option-filed-radio',
  templateUrl: './option-filed-radio.component.html',
  styleUrls: ['./option-filed-radio.component.css']
})
export class OptionFiledRadioComponent implements OnInit {

  @Input() field:FormComponent;
  @Input() formCard:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.formCard.controls[this.field.controlName].valid; }
  get isDirty() { return this.formCard.controls[this.field.controlName].dirty; }
  get isTouched() { return this.formCard.controls[this.field.controlName].touched; }
  get isRequired() { return this.formCard.controls[this.field.controlName].errors.required; }

  onPrimaryToggled(newValue: any, changedItem: string) {
    if (newValue.returnValue === true) {
    const toChange = this.formCard.get(this.field.controlName).patchValue(changedItem);
    }
  }  


}
