/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createMetaTrader5 = /* GraphQL */ `mutation CreateMetaTrader5(
  $input: CreateMetaTrader5Input!
  $condition: ModelMetaTrader5ConditionInput
) {
  createMetaTrader5(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMetaTrader5MutationVariables,
  APITypes.CreateMetaTrader5Mutation
>;
export const updateMetaTrader5 = /* GraphQL */ `mutation UpdateMetaTrader5(
  $input: UpdateMetaTrader5Input!
  $condition: ModelMetaTrader5ConditionInput
) {
  updateMetaTrader5(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMetaTrader5MutationVariables,
  APITypes.UpdateMetaTrader5Mutation
>;
export const deleteMetaTrader5 = /* GraphQL */ `mutation DeleteMetaTrader5(
  $input: DeleteMetaTrader5Input!
  $condition: ModelMetaTrader5ConditionInput
) {
  deleteMetaTrader5(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMetaTrader5MutationVariables,
  APITypes.DeleteMetaTrader5Mutation
>;
