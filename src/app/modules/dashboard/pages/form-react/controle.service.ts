import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable()
export class ControlService {
  constructor() { }

  toFormGroup(items: any ) {
    const group: any = {};

    items.forEach(item => {
      group[item.name] = item.required ? new FormControl(item.value || '', Validators.required) : new FormControl(item.value || '');
    });
    return new FormGroup(group);
  }
}