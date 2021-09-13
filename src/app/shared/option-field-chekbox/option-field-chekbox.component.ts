import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '../form-component.model';

@Component({
  selector: 'app-option-field-chekbox',
  templateUrl: './option-field-chekbox.component.html',
  styleUrls: ['./option-field-chekbox.component.css']
})
export class OptionFieldChekboxComponent implements OnInit {

  @Input() field:FormComponent;
  @Input() formCard:FormGroup;
  changedItem:boolean = false ;

  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.formCard.controls[this.field.controlName].valid; }
  get isDirty() { return this.formCard.controls[this.field.controlName].dirty; }
  get isTouched() { return this.formCard.controls[this.field.controlName].touched; }
  get isRequired() { return this.formCard.controls[this.field.controlName].errors.required; }

  onPrimaryToggled(newValue: any) {
    if (newValue.returnValue === true) {
      this.changedItem = !this.changedItem;
    const toChange = this.formCard.get(this.field.controlName).patchValue(this.changedItem);
    }
  } 

}
