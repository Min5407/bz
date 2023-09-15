import { useState } from "react";
import { WeatherIcon } from "../weatherIcon/WeatherIcon";
import Styles from "./style.module.css";
import Image from "next/image";
import classNames from "classnames";

export const Accordion = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <div className={Styles.accordion}>
      <button className={Styles.accordionBtn} onClick={handleClick}>
        May 25
        <Image
          src="/arrow.png"
          width={24}
          height={24}
          alt="arrow"
          className={classNames(Styles.arrow, { [Styles.arrowDown]: !isShow })}
        />
      </button>
      {isShow && (
        <>
          <section className={Styles.dayInfo}>
            <WeatherIcon size="small" />
            <p className={Styles.time}>03:00 pm</p>

            <div>
              <p className={Styles.temperatureDesc}>clear Sky</p>
              <p className={Styles.temperature}>297.32℃ / 297.32℃</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
