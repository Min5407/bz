import type { GetServerSideProps, NextPage } from "next";
import CommonStyles from "../../styles/Common.module.css";
import { getCurrentWeather, getForeCastData } from "../../src/api";
import {
  GetCurrentWeatherQuery,
  GetForeCastDataQuery,
} from "../../src/generated/graphql";
import { ForeCastSection } from "../../src/components/city/forecast";
import { Header } from "../../src/components/city/header";
import { Weather } from "../../src/components/city/weather";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const city = String(query.city);

  const [currentWeatherData, forecastData] = await Promise.all([
    getCurrentWeather({ city }),
    getForeCastData({ city }),
  ]);

  const forecastDataInDays = () => {
    const { list, city } = forecastData.getForeCast;
    const foreCastDayList = [];

    let startIndex = 0;

    for (let i = 0; i < list.length; i++) {
      const isFinalDayTime = list[i].dt_txt.includes("21:00:00");

      if (isFinalDayTime) {
        const day = list.slice(startIndex, i + 1);
        foreCastDayList.push(day);
        startIndex = i + 1;
      }
    }

    return { city, foreCastDayList };
  };
  return {
    props: {
      currentWeatherData: currentWeatherData.getCurrent,
      forecastData: forecastDataInDays(),
    },
  };
};

const CityPage = ({
  currentWeatherData,
  forecastData,
}: {
  currentWeatherData: GetCurrentWeatherQuery["getCurrent"];
  forecastData: {
    city: GetForeCastDataQuery["getForeCast"]["city"];
    foreCastDayList: GetForeCastDataQuery["getForeCast"]["list"][];
  };
}) => {
  return (
    <main className={CommonStyles.container}>
      <Header name={currentWeatherData.name} />
      <Weather data={currentWeatherData} />
      <ForeCastSection forecastData={forecastData.foreCastDayList} />
    </main>
  );
};

export default CityPage;
