import { Component, OnInit , Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-option-field',
  templateUrl: './option-field.component.html',
  styleUrls: ['./option-field.component.css']
})
export class OptionFieldComponent implements OnInit {

  @Input() field: any;
  @Input() formRegister: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.formRegister.controls[this.field.name].valid; }

}
