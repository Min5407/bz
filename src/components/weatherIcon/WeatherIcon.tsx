import classNames from "classnames";
import Styles from "./style.module.css";

interface Props {
  size: "small" | "large";
}

export const WeatherIcon = ({ size }: Props) => {
  return (
    <span
      className={classNames(
        Styles.icon,
        size === "large" ? Styles.large : Styles.small
      )}
    >
      Weather icon
    </span>
  );
};
