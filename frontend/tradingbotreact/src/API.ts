/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  password: string,
  userMetaTrader5Id?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userMetaTrader5Id?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  password: string,
  metaTrader5?: MetaTrader5 | null,
  createdAt: string,
  updatedAt: string,
  userMetaTrader5Id?: string | null,
};

export type MetaTrader5 = {
  __typename: "MetaTrader5",
  id: string,
  accountNumber: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  metaTrader5UserId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  password?: string | null,
  userMetaTrader5Id?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateMetaTrader5Input = {
  id?: string | null,
  accountNumber: string,
  metaTrader5UserId?: string | null,
};

export type ModelMetaTrader5ConditionInput = {
  accountNumber?: ModelStringInput | null,
  and?: Array< ModelMetaTrader5ConditionInput | null > | null,
  or?: Array< ModelMetaTrader5ConditionInput | null > | null,
  not?: ModelMetaTrader5ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  metaTrader5UserId?: ModelIDInput | null,
};

export type UpdateMetaTrader5Input = {
  id: string,
  accountNumber?: string | null,
  metaTrader5UserId?: string | null,
};

export type DeleteMetaTrader5Input = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userMetaTrader5Id?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelMetaTrader5FilterInput = {
  id?: ModelIDInput | null,
  accountNumber?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMetaTrader5FilterInput | null > | null,
  or?: Array< ModelMetaTrader5FilterInput | null > | null,
  not?: ModelMetaTrader5FilterInput | null,
  metaTrader5UserId?: ModelIDInput | null,
};

export type ModelMetaTrader5Connection = {
  __typename: "ModelMetaTrader5Connection",
  items:  Array<MetaTrader5 | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userMetaTrader5Id?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMetaTrader5FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountNumber?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMetaTrader5FilterInput | null > | null,
  or?: Array< ModelSubscriptionMetaTrader5FilterInput | null > | null,
  metaTrader5UserId?: ModelSubscriptionIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    password: string,
    metaTrader5?:  {
      __typename: "MetaTrader5",
      id: string,
      accountNumber: string,
      createdAt: string,
      updatedAt: string,
      metaTrader5UserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMetaTrader5Id?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    password: string,
    metaTrader5?:  {
      __typename: "MetaTrader5",
      id: string,
      accountNumber: string,
      createdAt: string,
      updatedAt: string,
      metaTrader5UserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMetaTrader5Id?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    password: string,
    metaTrader5?:  {
      __typename: "MetaTrader5",
      id: string,
      accountNumber: string,
      createdAt: string,
      updatedAt: string,
      metaTrader5UserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMetaTrader5Id?: string | null,
  } | null,
};

export type CreateMetaTrader5MutationVariables = {
  input: CreateMetaTrader5Input,
  condition?: ModelMetaTrader5ConditionInput | null,
};

export type CreateMetaTrader5Mutation = {
  createMetaTrader5?:  {
    __typename: "MetaTrader5",
    id: string,
    accountNumber: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
      userMetaTrader5Id?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    metaTrader5UserId?: string | null,
  } | null,
};

export type UpdateMetaTrader5MutationVariables = {
  input: UpdateMetaTrader5Input,
  condition?: ModelMetaTrader5ConditionInput | null,
};

export type UpdateMetaTrader5Mutation = {
  updateMetaTrader5?:  {
    __typename: "MetaTrader5",
    id: string,
    accountNumber: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
      userMetaTrader5Id?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    metaTrader5UserId?: string | null,
  } | null,
};

export type DeleteMetaTrader5MutationVariables = {
  input: DeleteMetaTrader5Input,
  condition?: ModelMetaTrader5ConditionInput | null,
};

export type DeleteMetaTrader5Mutation = {
  deleteMetaTrader5?:  {
    __typename: "MetaTrader5",
    id: string,
    accountNumber: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
      userMetaTrader5Id?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    metaTrader5UserId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    password: string,
    metaTrader5?:  {
      __typename: "MetaTrader5",
      id: string,
      accountNumber: string,
      createdAt: string,
      updatedAt: string,
      metaTrader5UserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMetaTrader5Id?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
      userMetaTrader5Id?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMetaTrader5QueryVariables = {
  id: string,
};

export type GetMetaTrader5Query = {
  getMetaTrader5?:  {
    __typename: "MetaTrader5",
    id: string,
    accountNumber: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
      userMetaTrader5Id?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    metaTrader5UserId?: string | null,
  } | null,
};

export type ListMetaTrader5sQueryVariables = {
  filter?: ModelMetaTrader5FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMetaTrader5sQuery = {
  listMetaTrader5s?:  {
    __typename: "ModelMetaTrader5Connection",
    items:  Array< {
      __typename: "MetaTrader5",
      id: string,
      accountNumber: string,
      createdAt: string,
      updatedAt: string,
      metaTrader5UserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    password: string,
    metaTrader5?:  {
      __typename: "MetaTrader5",
      id: string,
      accountNumber: string,
      createdAt: string,
      updatedAt: string,
      metaTrader5UserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMetaTrader5Id?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    password: string,
    metaTrader5?:  {
      __typename: "MetaTrader5",
      id: string,
      accountNumber: string,
      createdAt: string,
      updatedAt: string,
      metaTrader5UserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMetaTrader5Id?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    password: string,
    metaTrader5?:  {
      __typename: "MetaTrader5",
      id: string,
      accountNumber: string,
      createdAt: string,
      updatedAt: string,
      metaTrader5UserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMetaTrader5Id?: string | null,
  } | null,
};

export type OnCreateMetaTrader5SubscriptionVariables = {
  filter?: ModelSubscriptionMetaTrader5FilterInput | null,
};

export type OnCreateMetaTrader5Subscription = {
  onCreateMetaTrader5?:  {
    __typename: "MetaTrader5",
    id: string,
    accountNumber: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
      userMetaTrader5Id?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    metaTrader5UserId?: string | null,
  } | null,
};

export type OnUpdateMetaTrader5SubscriptionVariables = {
  filter?: ModelSubscriptionMetaTrader5FilterInput | null,
};

export type OnUpdateMetaTrader5Subscription = {
  onUpdateMetaTrader5?:  {
    __typename: "MetaTrader5",
    id: string,
    accountNumber: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
      userMetaTrader5Id?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    metaTrader5UserId?: string | null,
  } | null,
};

export type OnDeleteMetaTrader5SubscriptionVariables = {
  filter?: ModelSubscriptionMetaTrader5FilterInput | null,
};

export type OnDeleteMetaTrader5Subscription = {
  onDeleteMetaTrader5?:  {
    __typename: "MetaTrader5",
    id: string,
    accountNumber: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
      userMetaTrader5Id?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    metaTrader5UserId?: string | null,
  } | null,
};
