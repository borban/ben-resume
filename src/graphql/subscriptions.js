/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHeader = /* GraphQL */ `
  subscription OnCreateHeader($filter: ModelSubscriptionHeaderFilterInput) {
    onCreateHeader(filter: $filter) {
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
export const onUpdateHeader = /* GraphQL */ `
  subscription OnUpdateHeader($filter: ModelSubscriptionHeaderFilterInput) {
    onUpdateHeader(filter: $filter) {
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
export const onDeleteHeader = /* GraphQL */ `
  subscription OnDeleteHeader($filter: ModelSubscriptionHeaderFilterInput) {
    onDeleteHeader(filter: $filter) {
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
export const onCreateClearance = /* GraphQL */ `
  subscription OnCreateClearance(
    $filter: ModelSubscriptionClearanceFilterInput
  ) {
    onCreateClearance(filter: $filter) {
      id
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateClearance = /* GraphQL */ `
  subscription OnUpdateClearance(
    $filter: ModelSubscriptionClearanceFilterInput
  ) {
    onUpdateClearance(filter: $filter) {
      id
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteClearance = /* GraphQL */ `
  subscription OnDeleteClearance(
    $filter: ModelSubscriptionClearanceFilterInput
  ) {
    onDeleteClearance(filter: $filter) {
      id
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAchievement = /* GraphQL */ `
  subscription OnCreateAchievement(
    $filter: ModelSubscriptionAchievementFilterInput
  ) {
    onCreateAchievement(filter: $filter) {
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
export const onUpdateAchievement = /* GraphQL */ `
  subscription OnUpdateAchievement(
    $filter: ModelSubscriptionAchievementFilterInput
  ) {
    onUpdateAchievement(filter: $filter) {
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
export const onDeleteAchievement = /* GraphQL */ `
  subscription OnDeleteAchievement(
    $filter: ModelSubscriptionAchievementFilterInput
  ) {
    onDeleteAchievement(filter: $filter) {
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
export const onCreateEmployeeSkill = /* GraphQL */ `
  subscription OnCreateEmployeeSkill(
    $filter: ModelSubscriptionEmployeeSkillFilterInput
  ) {
    onCreateEmployeeSkill(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateEmployeeSkill = /* GraphQL */ `
  subscription OnUpdateEmployeeSkill(
    $filter: ModelSubscriptionEmployeeSkillFilterInput
  ) {
    onUpdateEmployeeSkill(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteEmployeeSkill = /* GraphQL */ `
  subscription OnDeleteEmployeeSkill(
    $filter: ModelSubscriptionEmployeeSkillFilterInput
  ) {
    onDeleteEmployeeSkill(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateEmployeeRole = /* GraphQL */ `
  subscription OnCreateEmployeeRole(
    $filter: ModelSubscriptionEmployeeRoleFilterInput
  ) {
    onCreateEmployeeRole(filter: $filter) {
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
export const onUpdateEmployeeRole = /* GraphQL */ `
  subscription OnUpdateEmployeeRole(
    $filter: ModelSubscriptionEmployeeRoleFilterInput
  ) {
    onUpdateEmployeeRole(filter: $filter) {
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
export const onDeleteEmployeeRole = /* GraphQL */ `
  subscription OnDeleteEmployeeRole(
    $filter: ModelSubscriptionEmployeeRoleFilterInput
  ) {
    onDeleteEmployeeRole(filter: $filter) {
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
export const onCreateEmployer = /* GraphQL */ `
  subscription OnCreateEmployer($filter: ModelSubscriptionEmployerFilterInput) {
    onCreateEmployer(filter: $filter) {
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
export const onUpdateEmployer = /* GraphQL */ `
  subscription OnUpdateEmployer($filter: ModelSubscriptionEmployerFilterInput) {
    onUpdateEmployer(filter: $filter) {
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
export const onDeleteEmployer = /* GraphQL */ `
  subscription OnDeleteEmployer($filter: ModelSubscriptionEmployerFilterInput) {
    onDeleteEmployer(filter: $filter) {
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
