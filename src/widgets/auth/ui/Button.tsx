import { FC } from "react";

import clsx from "clsx";
import s from "./styles.module.scss";

interface IButon {
  className?: string;
  onClick?: () => void;
  title: string;
}
export const Button: FC<IButon> = ({ className, title, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(s.btn_custom, className)}>
      {title}
    </button>
  );
};
