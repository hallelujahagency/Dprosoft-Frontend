export interface FormComponent {
  controlName: string;
  controlType: string;
  controlLabel?: string;
  valueType?: string;
  styleSize?: string;
  currentValue?: string; 
  placeholder?: string;
  options?: Array<{
    optionName: string;
    value: string;
  }>;
  validators?: {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
  };
}