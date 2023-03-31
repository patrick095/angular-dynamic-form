import { RouteEnums } from "../enums/route.enum";
import { IFormGroups } from "../interfaces/form.interfaces";
import { AccountInfoFormData } from "./account-info.form-data";
import { AddressInfoFormData } from "./address-info.form-data";
import { PersonalInfoFormData } from "./personal-info.form-data";

export class FormDataFactory {
    public createData(route: RouteEnums) {
        const forms: Record<string, Array<IFormGroups>> = {
            [RouteEnums.PERSONAL]: new PersonalInfoFormData().all,
            [RouteEnums.ADDRESS]: new AddressInfoFormData().all,
            [RouteEnums.ACCOUNT]: new AccountInfoFormData().all
        }

        return forms[route] ?? null;
    }
}