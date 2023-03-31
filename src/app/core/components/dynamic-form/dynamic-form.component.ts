import { Component, Input } from '@angular/core';
import { FormType } from '../../types/form.type';
import { IFormDependencies, IFormGroups } from '../../interfaces/form.interfaces';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  @Input()
  form!: FormType<unknown>;
  @Input() formGroups: Array<IFormGroups> = [];

  constructor() {}

  checkDependencies(dependencies?: Array<IFormDependencies>): boolean {
    if (!dependencies?.length) {
      return true;
    }

    return dependencies.some((dependency) => {
      const control = this.form.get(dependency.inputName);
  
      switch (dependency.criteria) {
        case 'equals':
          return control?.value === dependency.value;
        case 'different':
          return control?.value && control?.value !== dependency.value;
        default:
          return false;
      }
    });
  }
}
