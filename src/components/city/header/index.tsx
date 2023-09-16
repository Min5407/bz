import Image from "next/image";

import Styles from "./style.module.css";

interface Props {
  name: string;
}
export const Header = ({ name }: Props) => {
  return (
    <>
      <div className={Styles.img}>
        <Image
          src="/static/images/img_earth.png"
          alt="earth"
          width={68}
          height={51}
        />
      </div>
      <h1 className={Styles.h1}>Weather Information for {name}</h1>
    </>
  );
};
