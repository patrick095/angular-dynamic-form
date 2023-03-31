import { IFormGroups } from "../interfaces/form.interfaces";

export class PersonalInfoFormData {
    public get all(): Array<IFormGroups> {
        return [
            {
                title: 'Personal Infos',
                inputs: [
                    {
                        name: 'firstName',
                        tag: 'input',
                        type: 'text',
                        isRequired: true,
                        col: 'col-6',
                        label: 'First Name',
                    },
                    {
                        name: 'lastName',
                        tag: 'input',
                        type: 'text',
                        isRequired: true,
                        col: 'col-6',
                        label: 'Last Name',
                    },
                    {
                        name: 'age',
                        tag: 'input',
                        type: 'number',
                        isRequired: true,
                        col: 'col-3',
                        label: 'Age',
                    },
                    {
                        name: 'maritalStatus',
                        tag: 'select',
                        options: [
                            {
                                key: 'Single',
                                value: 'single'
                            },
                            {
                                key: 'Married',
                                value: 'married'
                            },
                            {
                                key: 'Divorced',
                                value: 'divorced'
                            },
                            {
                                key: 'Widowed',
                                value: 'widowed'
                            }
                        ],
                        isRequired: true,
                        col: 'col-3',
                        label: 'Marital Status',
                    },
                    {
                        name: 'spouse',
                        tag: 'input',
                        type: 'text',
                        col: 'col-3',
                        label: "Spouse's Name",
                        dependencies: [
                            {
                                inputName: 'maritalStatus',
                                value: 'married',
                                criteria: 'equals'
                            }
                        ]
                    }
                ]
            }
        ]
    }
}