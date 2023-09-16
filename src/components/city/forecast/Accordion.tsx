import { formatDate } from "../../../utils/date";
import { WeatherIcon } from "../../weatherIcon/WeatherIcon";
import Styles from "./style.module.css";

interface Props {
  date: string;
  desc: string;
  maxTemp: number;
  minTemp: number;
}
export const Accordion = ({ date, desc, maxTemp, minTemp }: Props) => {
  const formattedDate = formatDate(new Date(date), {
    month: undefined,
    day: undefined,
  });
  return (
    <section className={Styles.dayInfo}>
      <WeatherIcon size="small" />
      <p className={Styles.time}>{formattedDate}</p>

      <div>
        <p className={Styles.temperatureDesc}>{desc}</p>
        <p className={Styles.temperature}>
          {minTemp}℃ / {maxTemp}℃
        </p>
      </div>
    </section>
  );
};
