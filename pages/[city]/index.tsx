import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import CommonStyles from "../../styles/Common.module.css";
import Styles from "../../styles/Detail.module.css";
import { WeatherIcon } from "../../src/components/weatherIcon/WeatherIcon";
import { Accordion } from "../../src/components/forecast/Accordion";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const Home = () => {
  return (
    <main className={CommonStyles.container}>
      <div className={Styles.img}>
        <Image
          src="/static/images/img_earth.png"
          alt="earth"
          width={68}
          height={51}
        />
      </div>
      <h1 className={Styles.h1}>Weather Information for Seoul</h1>

      <section className={Styles.todayWeather}>
        <WeatherIcon size="large" />
        <div>
          <p className={Styles.date}>May 23. 03:00am</p>
          <p className={Styles.location}>
            Seoul, KR <sub className={Styles.sub}>(인구수 : 10349312)</sub>
          </p>
        </div>
        <div className={Styles.temperatureContainer}>
          <p className={Styles.temperature}>292.98℃</p>
          <sub className={Styles.sub}>
            Feels like 291.91℃ clear sky 풍속 3.33m/s 습도 34%
          </sub>
        </div>
      </section>
      <section className={Styles.forecastContainer}>
        <h2 className={Styles.forecastH2}>5-day Forecast</h2>
        <Accordion />
      </section>
    </main>
  );
};

export default Home;
