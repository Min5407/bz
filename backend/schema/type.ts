import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class GeoLocation {
  @Field(() => Number)
  lon: number;

  @Field(() => Number)
  lat: number;
}

@ObjectType()
export class Weather {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  main: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  icon: string;
}

@ObjectType()
export class Main {
  @Field(() => Number)
  temp: number;

  @Field(() => Number)
  feels_like: number;

  @Field(() => Number)
  temp_min: number;

  @Field(() => Number)
  temp_max: number;

  @Field(() => Number)
  pressure: number;

  @Field(() => Number)
  humidity: number;
}

@ObjectType()
export class Wind {
  @Field(() => Number)
  speed: number;

  @Field(() => Number)
  deg: number;
}

@ObjectType()
export class Rain {
  @Field(() => Number)
  oneHour?: number;
  threeHour?: number;
}

@ObjectType()
export class Clouds {
  @Field(() => Number)
  all: number;
}

@ObjectType()
export class Sys {
  @Field(() => Number)
  type?: number;

  @Field(() => Number)
  id?: number;

  @Field(() => String)
  country?: string;

  @Field(() => Number)
  sunrise?: number;

  @Field(() => Number)
  sunset?: number;

  @Field(() => String)
  pod?: string;
}

@ObjectType()
export class WeatherData {
  @Field(() => GeoLocation)
  coord: GeoLocation;

  @Field(() => String)
  base: string;

  @Field(() => [Weather])
  weather: Weather[];

  @Field(() => Main)
  main: Main;

  @Field(() => Number)
  visibility: number;

  @Field(() => Wind)
  wind: Wind;

  @Field(() => Rain)
  rain?: Rain;

  @Field(() => Clouds)
  clouds: Clouds;

  @Field(() => Number)
  dt: number;

  @Field(() => Sys)
  sys: Sys;

  @Field(() => Number)
  timezone: number;

  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  cod: number;
}

@ObjectType()
class City {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => GeoLocation)
  coord: GeoLocation;

  @Field(() => String)
  country: string;

  @Field(() => Number)
  population: number;

  @Field(() => Number)
  timezone: number;

  @Field(() => Number)
  sunrise: number;

  @Field(() => Number)
  sunset: number;
}

@ObjectType()
class WeatherItem {
  @Field(() => Number)
  dt: number;

  @Field(() => Main)
  main: Main;

  @Field(() => [Weather])
  weather: Weather[];

  @Field(() => Clouds)
  clouds: Clouds;

  @Field(() => Wind)
  wind: Wind;

  @Field(() => Number)
  visibility: number;

  @Field(() => Number)
  pop: number;

  @Field(() => Sys)
  sys: Sys;

  @Field(() => String)
  dt_txt: string;

  @Field(() => Rain, { nullable: true }) // RainInfo can be nullable
  rain?: Rain;
}

@ObjectType()
export class ForeCastData {
  @Field(() => String)
  cod: string;

  @Field(() => Number)
  message: number;

  @Field(() => Number)
  cnt: number;

  @Field(() => [WeatherItem])
  list: WeatherItem[];

  @Field(() => City)
  city: City;
}
