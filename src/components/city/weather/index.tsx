import { GetCurrentWeatherQuery } from "../../../generated/graphql";
import { formatDate, getTimeInTimeZone } from "../../../utils/date";
import { WeatherIcon } from "../../weatherIcon/WeatherIcon";
import Styles from "./style.module.css";

interface Props {
  data: GetCurrentWeatherQuery["getCurrent"];
}
export const Weather = ({ data }: Props) => {
  const { main, name, sys, weather, wind, timezone } = data;
  const date = getTimeInTimeZone(timezone);
  const weatherDesc = weather[0].description;
  const formattedDate = formatDate(date);

  return (
    <section className={Styles.todayWeather}>
      <WeatherIcon size="large" />
      <div>
        <p className={Styles.date}>{formattedDate}</p>
        <p className={Styles.location}>
          {name}, {sys.country}
          <sub className={Styles.sub}>(인구수 : 10349312)</sub>
        </p>
      </div>
      <div className={Styles.temperatureContainer}>
        <p className={Styles.temperature}>{main.temp}℃</p>
        <sub className={Styles.sub}>
          Feels like {main.feels_like}℃ {weatherDesc} 풍속 {wind.speed}m/s 습도{" "}
          {main.humidity}%
        </sub>
      </div>
    </section>
  );
};
