/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateMetaTrader5 = /* GraphQL */ `subscription OnCreateMetaTrader5(
  $filter: ModelSubscriptionMetaTrader5FilterInput
) {
  onCreateMetaTrader5(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMetaTrader5SubscriptionVariables,
  APITypes.OnCreateMetaTrader5Subscription
>;
export const onUpdateMetaTrader5 = /* GraphQL */ `subscription OnUpdateMetaTrader5(
  $filter: ModelSubscriptionMetaTrader5FilterInput
) {
  onUpdateMetaTrader5(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMetaTrader5SubscriptionVariables,
  APITypes.OnUpdateMetaTrader5Subscription
>;
export const onDeleteMetaTrader5 = /* GraphQL */ `subscription OnDeleteMetaTrader5(
  $filter: ModelSubscriptionMetaTrader5FilterInput
) {
  onDeleteMetaTrader5(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMetaTrader5SubscriptionVariables,
  APITypes.OnDeleteMetaTrader5Subscription
>;
