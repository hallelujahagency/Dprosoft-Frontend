import { FormComponent } from './form-component.model';


export interface FormCard {
    title?:string;
    type?:string;
    key?:string;
    style?:string;
    component: FormComponent[];
  }