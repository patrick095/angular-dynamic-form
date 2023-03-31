import { Validators } from "@angular/forms";
import { IFormGroups } from "../interfaces/form.interfaces";

export class AccountInfoFormData {
    public get all(): Array<IFormGroups> {
        return [
            {
                title: 'Account Infos',
                inputs: [
                    {
                        name: 'user',
                        tag: 'input',
                        type: 'text',
                        isRequired: true,
                        col: 'col-4',
                        label: 'User Name',
                    },
                    {
                        name: 'email',
                        tag: 'input',
                        type: 'email',
                        isRequired: true,
                        validators: [Validators.email],
                        col: 'col-6',
                        label: 'Email',
                    },
                    {
                        name: 'password',
                        tag: 'input',
                        type: 'password',
                        isRequired: true,
                        col: 'col-4',
                        label: 'Password',
                    },
                    {
                        name: 'confirmPass',
                        tag: 'input',
                        type: 'password',
                        isRequired: true,
                        col: 'col-4',
                        label: 'Confirm Password',
                    }
                ]
            }
        ]
    }
}