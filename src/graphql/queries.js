/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHeader = /* GraphQL */ `
  query GetHeader($id: ID!) {
    getHeader(id: $id) {
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
export const listHeaders = /* GraphQL */ `
  query ListHeaders(
    $filter: ModelHeaderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeaders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getClearance = /* GraphQL */ `
  query GetClearance($id: ID!) {
    getClearance(id: $id) {
      id
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClearances = /* GraphQL */ `
  query ListClearances(
    $filter: ModelClearanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClearances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAchievement = /* GraphQL */ `
  query GetAchievement($id: ID!) {
    getAchievement(id: $id) {
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
export const listAchievements = /* GraphQL */ `
  query ListAchievements(
    $filter: ModelAchievementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEmployeeSkill = /* GraphQL */ `
  query GetEmployeeSkill($id: ID!) {
    getEmployeeSkill(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEmployeeSkills = /* GraphQL */ `
  query ListEmployeeSkills(
    $filter: ModelEmployeeSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEmployeeRole = /* GraphQL */ `
  query GetEmployeeRole($id: ID!) {
    getEmployeeRole(id: $id) {
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
export const listEmployeeRoles = /* GraphQL */ `
  query ListEmployeeRoles(
    $filter: ModelEmployeeRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const employeeRolesByEmployerID = /* GraphQL */ `
  query EmployeeRolesByEmployerID(
    $employerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeeRolesByEmployerID(
      employerID: $employerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEmployer = /* GraphQL */ `
  query GetEmployer($id: ID!) {
    getEmployer(id: $id) {
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
export const listEmployers = /* GraphQL */ `
  query ListEmployers(
    $filter: ModelEmployerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
