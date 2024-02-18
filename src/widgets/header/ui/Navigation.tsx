import { useState } from "react";

import s from "./styles.module.scss";
import clsx from "clsx";

export const Navigation = () => {
  const [active, setActive] = useState("Overview");
  const list = ["Overview", "Operations", "Analytics", "Catalogue"];
  return (
    <ul className={s.list}>
      {list.map((el) => (
        <li
          className={clsx(s.link, el === active && s.link_active)}
          onClick={() => setActive(el)}
          key={el}
        >
          <a href="#"> {el}</a>
        </li>
      ))}
    </ul>
  );
};
