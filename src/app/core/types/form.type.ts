import { FormBase } from "../form-factory/form-base";

export type FormType<T extends any> = T & FormBase;