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
export declare type HeaderUpdateFormInputValues = {
    title?: string;
    location?: string;
    phone?: string;
    email?: string;
    custom_url1?: string;
    custom_url2?: string;
    custom_url3?: string;
    summary?: string;
};
export declare type HeaderUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    custom_url1?: ValidationFunction<string>;
    custom_url2?: ValidationFunction<string>;
    custom_url3?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderUpdateFormOverridesProps = {
    HeaderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    custom_url1?: PrimitiveOverrideProps<TextFieldProps>;
    custom_url2?: PrimitiveOverrideProps<TextFieldProps>;
    custom_url3?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeaderUpdateFormProps = React.PropsWithChildren<{
    overrides?: HeaderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    header?: any;
    onSubmit?: (fields: HeaderUpdateFormInputValues) => HeaderUpdateFormInputValues;
    onSuccess?: (fields: HeaderUpdateFormInputValues) => void;
    onError?: (fields: HeaderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeaderUpdateFormInputValues) => HeaderUpdateFormInputValues;
    onValidate?: HeaderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HeaderUpdateForm(props: HeaderUpdateFormProps): React.ReactElement;
