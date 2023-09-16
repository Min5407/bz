import React from "react";
import { Accordion } from "./Accordion";
import Styles from "./style.module.css";
import { GetForeCastDataQuery } from "../../../generated/graphql";
import { AccordionLayout } from "./AccordionLayout";

interface Props {
  forecastData: GetForeCastDataQuery["getForeCast"]["list"][];
}

export const ForeCastSection = ({ forecastData }: Props) => {
  return (
    <section className={Styles.forecastContainer}>
      <h2 className={Styles.forecastH2}>5-day Forecast</h2>

      {forecastData?.map((dayInfoList, index) => (
        <AccordionLayout key={index} date={dayInfoList[index].dt_txt}>
          {dayInfoList.map(({ dt_txt, weather, main }, index) => {
            return (
              <Accordion
                key={index}
                date={dt_txt}
                desc={weather[0].description}
                maxTemp={main.temp_max}
                minTemp={main.temp_min}
              />
            );
          })}
        </AccordionLayout>
      ))}
    </section>
  );
};
