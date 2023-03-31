import { FormControl, ValidatorFn } from "@angular/forms";

export interface IFormControls {
    [key: string]: FormControl
}

export interface IFormGroups {
    title: string;
    inputs: Array<IFormField>;
}

export interface IFormField {
    name: string;
    tag: 'input' | 'select';
    type?: string;
    options?: Array<IFieldOptions>;
    label?: string;
    placeholder?: string;
    isRequired?: boolean;
    value?: any;
    col?: string;
    validators?: Array<ValidatorFn>;
    disabled?: boolean;
    dependencies?: Array<IFormDependencies>;
}

export interface IFormDependencies {
    inputName: string;
    value: any;
    criteria: 'equals' | 'different';
}

export interface IFieldOptions {
    key: string;
    value: string;
    isSelected?: boolean;
}