import { FormControl, Validators } from '@angular/forms';
import { IFormControls, IFormGroups } from '../interfaces/form.interfaces';
import { FormType } from '../types/form.type';
import { FormBase } from './form-base';

export class FormFactory {
    public createForm<T>(groups: Array<IFormGroups>): FormType<T> {
        const controls: IFormControls = {};
        if (groups) {
            groups.forEach((group) => {
                if (group) {
                    group.inputs.forEach(
                        ({ name, validators = [], value = null, isRequired, tag, }) => {
                            controls[name] = new FormControl(
                                tag === 'select' && !value ? '' : value,
                                isRequired
                                    ? [...validators, Validators.required]
                                    : validators
                            );
                        }
                    );
                }
            });
        }
        return new FormBase(controls) as FormType<T>;
    }
}
