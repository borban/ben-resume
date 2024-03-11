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
import { getAchievement } from "../graphql/queries";
import { updateAchievement } from "../graphql/mutations";
const client = generateClient();
export default function AchievementUpdateForm(props) {
  const {
    id: idProp,
    achievement: achievementModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    location: "",
    valid_start: "",
    valid_end: "",
    verification_url: "",
    verification_code: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [location, setLocation] = React.useState(initialValues.location);
  const [valid_start, setValid_start] = React.useState(
    initialValues.valid_start
  );
  const [valid_end, setValid_end] = React.useState(initialValues.valid_end);
  const [verification_url, setVerification_url] = React.useState(
    initialValues.verification_url
  );
  const [verification_code, setVerification_code] = React.useState(
    initialValues.verification_code
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = achievementRecord
      ? { ...initialValues, ...achievementRecord }
      : initialValues;
    setName(cleanValues.name);
    setLocation(cleanValues.location);
    setValid_start(cleanValues.valid_start);
    setValid_end(cleanValues.valid_end);
    setVerification_url(cleanValues.verification_url);
    setVerification_code(cleanValues.verification_code);
    setErrors({});
  };
  const [achievementRecord, setAchievementRecord] =
    React.useState(achievementModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAchievement.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAchievement
        : achievementModelProp;
      setAchievementRecord(record);
    };
    queryData();
  }, [idProp, achievementModelProp]);
  React.useEffect(resetStateValues, [achievementRecord]);
  const validations = {
    name: [],
    location: [],
    valid_start: [],
    valid_end: [],
    verification_url: [],
    verification_code: [],
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
          name: name ?? null,
          location: location ?? null,
          valid_start: valid_start ?? null,
          valid_end: valid_end ?? null,
          verification_url: verification_url ?? null,
          verification_code: verification_code ?? null,
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
            query: updateAchievement.replaceAll("__typename", ""),
            variables: {
              input: {
                id: achievementRecord.id,
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
      {...getOverrideProps(overrides, "AchievementUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              location,
              valid_start,
              valid_end,
              verification_url,
              verification_code,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
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
              name,
              location: value,
              valid_start,
              valid_end,
              verification_url,
              verification_code,
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
        label="Valid start"
        isRequired={false}
        isReadOnly={false}
        value={valid_start}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              location,
              valid_start: value,
              valid_end,
              verification_url,
              verification_code,
            };
            const result = onChange(modelFields);
            value = result?.valid_start ?? value;
          }
          if (errors.valid_start?.hasError) {
            runValidationTasks("valid_start", value);
          }
          setValid_start(value);
        }}
        onBlur={() => runValidationTasks("valid_start", valid_start)}
        errorMessage={errors.valid_start?.errorMessage}
        hasError={errors.valid_start?.hasError}
        {...getOverrideProps(overrides, "valid_start")}
      ></TextField>
      <TextField
        label="Valid end"
        isRequired={false}
        isReadOnly={false}
        value={valid_end}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              location,
              valid_start,
              valid_end: value,
              verification_url,
              verification_code,
            };
            const result = onChange(modelFields);
            value = result?.valid_end ?? value;
          }
          if (errors.valid_end?.hasError) {
            runValidationTasks("valid_end", value);
          }
          setValid_end(value);
        }}
        onBlur={() => runValidationTasks("valid_end", valid_end)}
        errorMessage={errors.valid_end?.errorMessage}
        hasError={errors.valid_end?.hasError}
        {...getOverrideProps(overrides, "valid_end")}
      ></TextField>
      <TextField
        label="Verification url"
        isRequired={false}
        isReadOnly={false}
        value={verification_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              location,
              valid_start,
              valid_end,
              verification_url: value,
              verification_code,
            };
            const result = onChange(modelFields);
            value = result?.verification_url ?? value;
          }
          if (errors.verification_url?.hasError) {
            runValidationTasks("verification_url", value);
          }
          setVerification_url(value);
        }}
        onBlur={() => runValidationTasks("verification_url", verification_url)}
        errorMessage={errors.verification_url?.errorMessage}
        hasError={errors.verification_url?.hasError}
        {...getOverrideProps(overrides, "verification_url")}
      ></TextField>
      <TextField
        label="Verification code"
        isRequired={false}
        isReadOnly={false}
        value={verification_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              location,
              valid_start,
              valid_end,
              verification_url,
              verification_code: value,
            };
            const result = onChange(modelFields);
            value = result?.verification_code ?? value;
          }
          if (errors.verification_code?.hasError) {
            runValidationTasks("verification_code", value);
          }
          setVerification_code(value);
        }}
        onBlur={() =>
          runValidationTasks("verification_code", verification_code)
        }
        errorMessage={errors.verification_code?.errorMessage}
        hasError={errors.verification_code?.hasError}
        {...getOverrideProps(overrides, "verification_code")}
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
          isDisabled={!(idProp || achievementModelProp)}
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
              !(idProp || achievementModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
