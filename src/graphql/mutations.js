/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHeader = /* GraphQL */ `
  mutation CreateHeader(
    $input: CreateHeaderInput!
    $condition: ModelHeaderConditionInput
  ) {
    createHeader(input: $input, condition: $condition) {
      id
      title
      location
      phone
      email
      custom_url1
      custom_url2
      custom_url3
      summary
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHeader = /* GraphQL */ `
  mutation UpdateHeader(
    $input: UpdateHeaderInput!
    $condition: ModelHeaderConditionInput
  ) {
    updateHeader(input: $input, condition: $condition) {
      id
      title
      location
      phone
      email
      custom_url1
      custom_url2
      custom_url3
      summary
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHeader = /* GraphQL */ `
  mutation DeleteHeader(
    $input: DeleteHeaderInput!
    $condition: ModelHeaderConditionInput
  ) {
    deleteHeader(input: $input, condition: $condition) {
      id
      title
      location
      phone
      email
      custom_url1
      custom_url2
      custom_url3
      summary
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createClearance = /* GraphQL */ `
  mutation CreateClearance(
    $input: CreateClearanceInput!
    $condition: ModelClearanceConditionInput
  ) {
    createClearance(input: $input, condition: $condition) {
      id
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateClearance = /* GraphQL */ `
  mutation UpdateClearance(
    $input: UpdateClearanceInput!
    $condition: ModelClearanceConditionInput
  ) {
    updateClearance(input: $input, condition: $condition) {
      id
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteClearance = /* GraphQL */ `
  mutation DeleteClearance(
    $input: DeleteClearanceInput!
    $condition: ModelClearanceConditionInput
  ) {
    deleteClearance(input: $input, condition: $condition) {
      id
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAchievement = /* GraphQL */ `
  mutation CreateAchievement(
    $input: CreateAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    createAchievement(input: $input, condition: $condition) {
      id
      name
      location
      valid_start
      valid_end
      verification_url
      verification_code
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAchievement = /* GraphQL */ `
  mutation UpdateAchievement(
    $input: UpdateAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    updateAchievement(input: $input, condition: $condition) {
      id
      name
      location
      valid_start
      valid_end
      verification_url
      verification_code
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAchievement = /* GraphQL */ `
  mutation DeleteAchievement(
    $input: DeleteAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    deleteAchievement(input: $input, condition: $condition) {
      id
      name
      location
      valid_start
      valid_end
      verification_url
      verification_code
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEmployeeSkill = /* GraphQL */ `
  mutation CreateEmployeeSkill(
    $input: CreateEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    createEmployeeSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEmployeeSkill = /* GraphQL */ `
  mutation UpdateEmployeeSkill(
    $input: UpdateEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    updateEmployeeSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEmployeeSkill = /* GraphQL */ `
  mutation DeleteEmployeeSkill(
    $input: DeleteEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    deleteEmployeeSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEmployeeRole = /* GraphQL */ `
  mutation CreateEmployeeRole(
    $input: CreateEmployeeRoleInput!
    $condition: ModelEmployeeRoleConditionInput
  ) {
    createEmployeeRole(input: $input, condition: $condition) {
      id
      name
      start_date
      end_date
      description
      employerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEmployeeRole = /* GraphQL */ `
  mutation UpdateEmployeeRole(
    $input: UpdateEmployeeRoleInput!
    $condition: ModelEmployeeRoleConditionInput
  ) {
    updateEmployeeRole(input: $input, condition: $condition) {
      id
      name
      start_date
      end_date
      description
      employerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEmployeeRole = /* GraphQL */ `
  mutation DeleteEmployeeRole(
    $input: DeleteEmployeeRoleInput!
    $condition: ModelEmployeeRoleConditionInput
  ) {
    deleteEmployeeRole(input: $input, condition: $condition) {
      id
      name
      start_date
      end_date
      description
      employerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEmployer = /* GraphQL */ `
  mutation CreateEmployer(
    $input: CreateEmployerInput!
    $condition: ModelEmployerConditionInput
  ) {
    createEmployer(input: $input, condition: $condition) {
      id
      name
      location
      EmployeeRoles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEmployer = /* GraphQL */ `
  mutation UpdateEmployer(
    $input: UpdateEmployerInput!
    $condition: ModelEmployerConditionInput
  ) {
    updateEmployer(input: $input, condition: $condition) {
      id
      name
      location
      EmployeeRoles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEmployer = /* GraphQL */ `
  mutation DeleteEmployer(
    $input: DeleteEmployerInput!
    $condition: ModelEmployerConditionInput
  ) {
    deleteEmployer(input: $input, condition: $condition) {
      id
      name
      location
      EmployeeRoles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
