/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    password
    metaTrader5 {
      id
      accountNumber
      createdAt
      updatedAt
      metaTrader5UserId
      __typename
    }
    createdAt
    updatedAt
    userMetaTrader5Id
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      password
      createdAt
      updatedAt
      userMetaTrader5Id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getMetaTrader5 = /* GraphQL */ `query GetMetaTrader5($id: ID!) {
  getMetaTrader5(id: $id) {
    id
    accountNumber
    user {
      id
      username
      email
      password
      createdAt
      updatedAt
      userMetaTrader5Id
      __typename
    }
    createdAt
    updatedAt
    metaTrader5UserId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMetaTrader5QueryVariables,
  APITypes.GetMetaTrader5Query
>;
export const listMetaTrader5s = /* GraphQL */ `query ListMetaTrader5s(
  $filter: ModelMetaTrader5FilterInput
  $limit: Int
  $nextToken: String
) {
  listMetaTrader5s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      accountNumber
      createdAt
      updatedAt
      metaTrader5UserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMetaTrader5sQueryVariables,
  APITypes.ListMetaTrader5sQuery
>;
