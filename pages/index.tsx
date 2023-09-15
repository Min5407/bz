import type { GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";
import commonStyles from "../styles/Common.module.css";
import { getDogs } from "../src/api";
import { GetDogsQuery } from "../src/generated/graphql";
import Link from "next/link";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async () => {
  const dogs = await getDogs();

  return {
    props: {
      dogs: dogs.dogs,
    },
  };
};

const Home = ({ dogs }: { dogs: GetDogsQuery["dogs"] }) => {
  return (
    <main className={commonStyles.container}>
      <h1 className={styles.h1}>
        Welcome to <pre className={styles.pre}>Weather App!</pre>
      </h1>
      <p className={styles.p}>
        Choose a city from the list below to check the weather.
      </p>

      <div className={styles.aContainer}>
        <Link href="/Seoul">
          <a className={styles.a}>Seoul</a>
        </Link>
        <Link href="/Tokyo">
          <a className={styles.a}>Tokyo</a>
        </Link>
        <Link href="/Paris">
          <a className={styles.a}>Paris</a>
        </Link>
        <Link href="/London">
          <a className={styles.a}>London</a>
        </Link>
      </div>

      <div className={styles.img}>
        <Image
          src="/static/images/img_earth.png"
          alt="earth"
          width={430}
          height={320}
        />
      </div>
    </main>
  );
};

export default Home;
