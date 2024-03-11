/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getHeader } from "../graphql/queries";
import { updateHeader } from "../graphql/mutations";
const client = generateClient();
export default function HeaderUpdateForm(props) {
  const {
    id: idProp,
    header: headerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    location: "",
    phone: "",
    email: "",
    custom_url1: "",
    custom_url2: "",
    custom_url3: "",
    summary: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [location, setLocation] = React.useState(initialValues.location);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [custom_url1, setCustom_url1] = React.useState(
    initialValues.custom_url1
  );
  const [custom_url2, setCustom_url2] = React.useState(
    initialValues.custom_url2
  );
  const [custom_url3, setCustom_url3] = React.useState(
    initialValues.custom_url3
  );
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = headerRecord
      ? { ...initialValues, ...headerRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setLocation(cleanValues.location);
    setPhone(cleanValues.phone);
    setEmail(cleanValues.email);
    setCustom_url1(cleanValues.custom_url1);
    setCustom_url2(cleanValues.custom_url2);
    setCustom_url3(cleanValues.custom_url3);
    setSummary(cleanValues.summary);
    setErrors({});
  };
  const [headerRecord, setHeaderRecord] = React.useState(headerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getHeader.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHeader
        : headerModelProp;
      setHeaderRecord(record);
    };
    queryData();
  }, [idProp, headerModelProp]);
  React.useEffect(resetStateValues, [headerRecord]);
  const validations = {
    title: [],
    location: [],
    phone: [],
    email: [],
    custom_url1: [],
    custom_url2: [],
    custom_url3: [],
    summary: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title: title ?? null,
          location: location ?? null,
          phone: phone ?? null,
          email: email ?? null,
          custom_url1: custom_url1 ?? null,
          custom_url2: custom_url2 ?? null,
          custom_url3: custom_url3 ?? null,
          summary: summary ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateHeader.replaceAll("__typename", ""),
            variables: {
              input: {
                id: headerRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "HeaderUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              location,
              phone,
              email,
              custom_url1,
              custom_url2,
              custom_url3,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location: value,
              phone,
              email,
              custom_url1,
              custom_url2,
              custom_url3,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              phone: value,
              email,
              custom_url1,
              custom_url2,
              custom_url3,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              phone,
              email: value,
              custom_url1,
              custom_url2,
              custom_url3,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Custom url1"
        isRequired={false}
        isReadOnly={false}
        value={custom_url1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              phone,
              email,
              custom_url1: value,
              custom_url2,
              custom_url3,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.custom_url1 ?? value;
          }
          if (errors.custom_url1?.hasError) {
            runValidationTasks("custom_url1", value);
          }
          setCustom_url1(value);
        }}
        onBlur={() => runValidationTasks("custom_url1", custom_url1)}
        errorMessage={errors.custom_url1?.errorMessage}
        hasError={errors.custom_url1?.hasError}
        {...getOverrideProps(overrides, "custom_url1")}
      ></TextField>
      <TextField
        label="Custom url2"
        isRequired={false}
        isReadOnly={false}
        value={custom_url2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              phone,
              email,
              custom_url1,
              custom_url2: value,
              custom_url3,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.custom_url2 ?? value;
          }
          if (errors.custom_url2?.hasError) {
            runValidationTasks("custom_url2", value);
          }
          setCustom_url2(value);
        }}
        onBlur={() => runValidationTasks("custom_url2", custom_url2)}
        errorMessage={errors.custom_url2?.errorMessage}
        hasError={errors.custom_url2?.hasError}
        {...getOverrideProps(overrides, "custom_url2")}
      ></TextField>
      <TextField
        label="Custom url3"
        isRequired={false}
        isReadOnly={false}
        value={custom_url3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              phone,
              email,
              custom_url1,
              custom_url2,
              custom_url3: value,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.custom_url3 ?? value;
          }
          if (errors.custom_url3?.hasError) {
            runValidationTasks("custom_url3", value);
          }
          setCustom_url3(value);
        }}
        onBlur={() => runValidationTasks("custom_url3", custom_url3)}
        errorMessage={errors.custom_url3?.errorMessage}
        hasError={errors.custom_url3?.hasError}
        {...getOverrideProps(overrides, "custom_url3")}
      ></TextField>
      <TextField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              phone,
              email,
              custom_url1,
              custom_url2,
              custom_url3,
              summary: value,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || headerModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || headerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
