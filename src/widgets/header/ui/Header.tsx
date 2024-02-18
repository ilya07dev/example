import { Navigation } from "./Navigation";
import { RightMenu } from "./RightMenu";

import clsx from "clsx";
import s from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={clsx(s.header)}>
      <img src="/logo.svg" />
      <Navigation />
      <RightMenu />
    </header>
  );
};
