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
export declare type ClearanceCreateFormInputValues = {
    type?: string;
    status?: string;
};
export declare type ClearanceCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClearanceCreateFormOverridesProps = {
    ClearanceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClearanceCreateFormProps = React.PropsWithChildren<{
    overrides?: ClearanceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClearanceCreateFormInputValues) => ClearanceCreateFormInputValues;
    onSuccess?: (fields: ClearanceCreateFormInputValues) => void;
    onError?: (fields: ClearanceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClearanceCreateFormInputValues) => ClearanceCreateFormInputValues;
    onValidate?: ClearanceCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClearanceCreateForm(props: ClearanceCreateFormProps): React.ReactElement;
