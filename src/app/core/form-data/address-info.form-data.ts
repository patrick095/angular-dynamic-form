import { IFormGroups } from "../interfaces/form.interfaces";

export class AddressInfoFormData {
    public get all(): Array<IFormGroups> {
        return [
            {
                title: 'Address Infos',
                inputs: [
                    {
                        name: 'line1',
                        tag: 'input',
                        type: 'text',
                        isRequired: true,
                        col: 'col-8',
                        label: 'Address Line 1',
                    },
                    {
                        name: 'line2',
                        tag: 'input',
                        type: 'text',
                        isRequired: true,
                        col: 'col-8',
                        label: 'Address Line 2',
                    },
                    {
                        name: 'city',
                        tag: 'input',
                        type: 'text',
                        isRequired: true,
                        col: 'col-4',
                        label: 'city',
                    },
                    {
                        name: 'state',
                        tag: 'input',
                        type: 'text',
                        isRequired: true,
                        col: 'col-3',
                        label: 'State',
                    },
                    {
                        name: 'zip',
                        tag: 'input',
                        type: 'number',
                        isRequired: true,
                        col: 'col-3',
                        label: 'Zip/Postal Code',
                    },
                    {
                        name: 'country',
                        tag: 'select',
                        options: [
                            {
                                key: 'Brazil',
                                value: '55'
                            },
                            {
                                key: 'United States',
                                value: '001'
                            },
                            {
                                key: 'Other',
                                value: '999'
                            }
                        ],
                        isRequired: true,
                        col: 'col-4',
                        label: 'Country',
                    }
                ]
            }
        ]
    }
}