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

export type City = {
  __typename?: 'City';
  coord: GeoLocation;
  country: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  population: Scalars['Float']['output'];
  sunrise: Scalars['Float']['output'];
  sunset: Scalars['Float']['output'];
  timezone: Scalars['Float']['output'];
};

export type Clouds = {
  __typename?: 'Clouds';
  all: Scalars['Float']['output'];
};

export type ForeCastData = {
  __typename?: 'ForeCastData';
  city: City;
  cnt: Scalars['Float']['output'];
  cod: Scalars['String']['output'];
  list: Array<WeatherItem>;
  message: Scalars['Float']['output'];
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
};

export type Main = {
  __typename?: 'Main';
  feels_like: Scalars['Float']['output'];
  humidity: Scalars['Float']['output'];
  pressure: Scalars['Float']['output'];
  temp: Scalars['Float']['output'];
  temp_max: Scalars['Float']['output'];
  temp_min: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCurrent: WeatherData;
  getForeCast: ForeCastData;
};


export type QueryGetCurrentArgs = {
  city: Scalars['String']['input'];
};


export type QueryGetForeCastArgs = {
  city: Scalars['String']['input'];
};

export type Rain = {
  __typename?: 'Rain';
  oneHour: Scalars['Float']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  country: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  pod: Scalars['String']['output'];
  sunrise: Scalars['Float']['output'];
  sunset: Scalars['Float']['output'];
  type: Scalars['Float']['output'];
};

export type Weather = {
  __typename?: 'Weather';
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  main: Scalars['String']['output'];
};

export type WeatherData = {
  __typename?: 'WeatherData';
  base: Scalars['String']['output'];
  clouds: Clouds;
  cod: Scalars['Float']['output'];
  coord: GeoLocation;
  dt: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  main: Main;
  name: Scalars['String']['output'];
  rain: Rain;
  sys: Sys;
  timezone: Scalars['Float']['output'];
  visibility: Scalars['Float']['output'];
  weather: Array<Weather>;
  wind: Wind;
};

export type WeatherItem = {
  __typename?: 'WeatherItem';
  clouds: Clouds;
  dt: Scalars['Float']['output'];
  dt_txt: Scalars['String']['output'];
  main: Main;
  pop: Scalars['Float']['output'];
  rain?: Maybe<Rain>;
  sys: Sys;
  visibility: Scalars['Float']['output'];
  weather: Array<Weather>;
  wind: Wind;
};

export type Wind = {
  __typename?: 'Wind';
  deg: Scalars['Float']['output'];
  speed: Scalars['Float']['output'];
};

export type GetCurrentWeatherQueryVariables = Exact<{
  city: Scalars['String']['input'];
}>;


export type GetCurrentWeatherQuery = { __typename?: 'Query', getCurrent: { __typename?: 'WeatherData', name: string, timezone: number, sys: { __typename?: 'Sys', country: string }, main: { __typename?: 'Main', temp: number, feels_like: number, humidity: number }, weather: Array<{ __typename?: 'Weather', description: string }>, wind: { __typename?: 'Wind', speed: number } } };

export type GetForeCastDataQueryVariables = Exact<{
  city: Scalars['String']['input'];
}>;


export type GetForeCastDataQuery = { __typename?: 'Query', getForeCast: { __typename?: 'ForeCastData', list: Array<{ __typename?: 'WeatherItem', dt_txt: string, weather: Array<{ __typename?: 'Weather', description: string }>, main: { __typename?: 'Main', temp_min: number, temp_max: number } }>, city: { __typename?: 'City', timezone: number } } };


export const GetCurrentWeatherDocument = gql`
    query getCurrentWeather($city: String!) {
  getCurrent(city: $city) {
    name
    timezone
    sys {
      country
    }
    main {
      temp
      feels_like
      humidity
    }
    weather {
      description
    }
    wind {
      speed
    }
  }
}
    `;
export const GetForeCastDataDocument = gql`
    query getForeCastData($city: String!) {
  getForeCast(city: $city) {
    list {
      dt_txt
      weather {
        description
      }
      main {
        temp_min
        temp_max
      }
    }
    city {
      timezone
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCurrentWeather(variables: GetCurrentWeatherQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCurrentWeatherQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCurrentWeatherQuery>(GetCurrentWeatherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCurrentWeather', 'query');
    },
    getForeCastData(variables: GetForeCastDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetForeCastDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetForeCastDataQuery>(GetForeCastDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getForeCastData', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;