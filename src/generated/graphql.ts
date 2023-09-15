import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Dog = {
  __typename?: 'Dog';
  ageInWeeks: Scalars['Float']['output'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String']['output'];
  breed: Scalars['String']['output'];
  color: Scalars['String']['output'];
  description: Array<Scalars['String']['output']>;
  fee: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  name: Scalars['ID']['output'];
  sex: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
};

export type DogAttribute = {
  __typename?: 'DogAttribute';
  key: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  dog?: Maybe<Dog>;
  dogs: Array<Dog>;
};


export type QueryDogArgs = {
  name: Scalars['String']['input'];
};

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'Dog', name: string, breed: string }> };


export const GetDogsDocument = gql`
    query getDogs {
  dogs {
    name
    breed
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getDogs(variables?: GetDogsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetDogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogsQuery>(GetDogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDogs', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;