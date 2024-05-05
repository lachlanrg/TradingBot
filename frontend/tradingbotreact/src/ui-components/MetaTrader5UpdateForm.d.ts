/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MetaTrader5 } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MetaTrader5UpdateFormInputValues = {
    accountNumber?: string;
};
export declare type MetaTrader5UpdateFormValidationValues = {
    accountNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MetaTrader5UpdateFormOverridesProps = {
    MetaTrader5UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    accountNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MetaTrader5UpdateFormProps = React.PropsWithChildren<{
    overrides?: MetaTrader5UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    metaTrader5?: MetaTrader5;
    onSubmit?: (fields: MetaTrader5UpdateFormInputValues) => MetaTrader5UpdateFormInputValues;
    onSuccess?: (fields: MetaTrader5UpdateFormInputValues) => void;
    onError?: (fields: MetaTrader5UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MetaTrader5UpdateFormInputValues) => MetaTrader5UpdateFormInputValues;
    onValidate?: MetaTrader5UpdateFormValidationValues;
} & React.CSSProperties>;
export default function MetaTrader5UpdateForm(props: MetaTrader5UpdateFormProps): React.ReactElement;
