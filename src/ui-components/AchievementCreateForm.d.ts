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
export declare type AchievementCreateFormInputValues = {
    name?: string;
    location?: string;
    valid_start?: string;
    valid_end?: string;
    verification_url?: string;
    verification_code?: string;
};
export declare type AchievementCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    valid_start?: ValidationFunction<string>;
    valid_end?: ValidationFunction<string>;
    verification_url?: ValidationFunction<string>;
    verification_code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AchievementCreateFormOverridesProps = {
    AchievementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    valid_start?: PrimitiveOverrideProps<TextFieldProps>;
    valid_end?: PrimitiveOverrideProps<TextFieldProps>;
    verification_url?: PrimitiveOverrideProps<TextFieldProps>;
    verification_code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AchievementCreateFormProps = React.PropsWithChildren<{
    overrides?: AchievementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AchievementCreateFormInputValues) => AchievementCreateFormInputValues;
    onSuccess?: (fields: AchievementCreateFormInputValues) => void;
    onError?: (fields: AchievementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AchievementCreateFormInputValues) => AchievementCreateFormInputValues;
    onValidate?: AchievementCreateFormValidationValues;
} & React.CSSProperties>;
export default function AchievementCreateForm(props: AchievementCreateFormProps): React.ReactElement;
