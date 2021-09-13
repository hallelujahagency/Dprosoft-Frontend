import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,  } from '@angular/forms';
import { FormComponent } from '../form-component.model';

@Component({
  selector: 'app-option-field-text',
  templateUrl: './option-field-text.component.html',
  styleUrls: ['./option-field-text.component.css']
})
export class OptionFieldTextComponent implements OnInit {

  @Input() field:FormComponent;
  @Input() formCard:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.formCard.controls[this.field.controlName].valid; }
  get isDirty() { return this.formCard.controls[this.field.controlName].dirty; }
  get isTouched() { return this.formCard.controls[this.field.controlName].touched; }
  get isRequired() { return this.formCard.controls[this.field.controlName].errors.required; }
  get isMin() { return this.formCard.controls[this.field.controlName].errors.minlength; }
}
