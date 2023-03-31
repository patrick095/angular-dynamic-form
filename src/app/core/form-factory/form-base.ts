import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { IFormControls } from '../interfaces/form.interfaces';

export class FormBase extends FormGroup {
    constructor(private formControls: IFormControls) {
        super(formControls);
        for (const control in this.formControls) {
            Object.defineProperty(this, control, {
                get: () => this.get(control) as AbstractControl,
                set: (args: any) => this.get(control)?.setValue(args),
            });
        }
    }

    public getData(): any {
        console.log(this.value);

        const formData: any = {};
        for (const key in this.value) {
            if (this.value[key]) formData[key] = this.value[key];
        }
        return formData;
    }

    public addRequired(controlName: string): void {
        this.get(controlName)?.addValidators([Validators.required]);
    }

    public removeRequired(controlName: string): void {
        this.get(controlName)?.removeValidators(Validators.required);
    }
}
