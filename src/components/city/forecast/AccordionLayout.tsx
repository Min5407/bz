import { useState } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import classNames from "classnames";
import { formatDate, getTimeInTimeZone } from "../../../utils/date";

interface Props {
  date: string;
  children: React.ReactNode;
}

export const AccordionLayout = ({ children, date }: Props) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };
  const formattedDate = formatDate(new Date(date), {
    hour: undefined,
    minute: undefined,
  });

  return (
    <div className={Styles.accordion}>
      <button className={Styles.accordionBtn} onClick={handleClick}>
        {formattedDate}
        <Image
          src="/arrow.png"
          width={24}
          height={24}
          alt="arrow"
          className={classNames(Styles.arrow, { [Styles.arrowDown]: !isShow })}
        />
      </button>

      {isShow && children}
    </div>
  );
};
