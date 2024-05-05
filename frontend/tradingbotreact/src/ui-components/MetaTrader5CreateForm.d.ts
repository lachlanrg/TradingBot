/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MetaTrader5CreateFormInputValues = {
    accountNumber?: string;
};
export declare type MetaTrader5CreateFormValidationValues = {
    accountNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MetaTrader5CreateFormOverridesProps = {
    MetaTrader5CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    accountNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MetaTrader5CreateFormProps = React.PropsWithChildren<{
    overrides?: MetaTrader5CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MetaTrader5CreateFormInputValues) => MetaTrader5CreateFormInputValues;
    onSuccess?: (fields: MetaTrader5CreateFormInputValues) => void;
    onError?: (fields: MetaTrader5CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MetaTrader5CreateFormInputValues) => MetaTrader5CreateFormInputValues;
    onValidate?: MetaTrader5CreateFormValidationValues;
} & React.CSSProperties>;
export default function MetaTrader5CreateForm(props: MetaTrader5CreateFormProps): React.ReactElement;
