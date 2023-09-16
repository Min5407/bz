import { Resolver, Query, Arg } from "type-graphql";
import { ForeCastData, WeatherData } from "./type";
import currentWeatherDB from "../currentWeatherDB.json";
import forecastDB from "../forecastDB.json";

const getCurrentWeatherData = async (city: keyof typeof currentWeatherDB) => {
  const response: WeatherData = currentWeatherDB[city];

  return response;
};

@Resolver(WeatherData)
export class WeatherDataResolver {
  @Query(() => WeatherData)
  async getCurrent(
    @Arg("city", () => String) city: keyof typeof currentWeatherDB
  ): Promise<WeatherData | undefined> {
    const result = await getCurrentWeatherData(city);

    return result;
  }
}

const getForeCastData = async (city: keyof typeof forecastDB) => {
  const response: ForeCastData = forecastDB[city];

  return response;
};

@Resolver(ForeCastData)
export class ForeCastDataResolver {
  @Query(() => ForeCastData)
  async getForeCast(
    @Arg("city", () => String) city: keyof typeof forecastDB
  ): Promise<ForeCastData | undefined> {
    const result = await getForeCastData(city);

    return result;
  }
}
