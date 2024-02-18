import {
  ArrIcon,
  AvaIcon,
  BTCIcon,
  Blue,
  CardanoIcon,
  ETHIcon,
  Near,
  Orange,
  Red,
  StacksIcon,
  Yellow,
} from "@/shared/SVG";

import main from "@/public/svg/sircle_main.svg";
import sirlce_second from "@/public/svg/sirlce_second.svg";

import s from "./styles.module.scss";
import clsx from "clsx";

export const Balance = () => {
  return (
    <div className={s.balance}>
      <div className={s.info}>
        <div className={s.select}>
          <span className={s.subtitle}>Balance</span>
          <button className={s.btn}>
            Month <ArrIcon />
          </button>
        </div>
        <h1 className={s.price}>$ 140,504</h1>
      </div>
      <div className={s.bg}></div>
      <div className={s.balls}>
        <img className={s.sircle_main} src={main} alt="" />
        <img className={s.sirlce_second} src={sirlce_second} alt="" />
        <div className={clsx(s.ball, s.ball_orange)}>
          <div className={s.block}>
            <Orange />
            <StacksIcon className={clsx(s.icons, s.icons_stacks)} />
            <span>51%</span>
          </div>
        </div>
        <div className={clsx(s.ball, s.ball_blue)}>
          <div>
            <Near />
          </div>
        </div>
        <div className={clsx(s.ball, s.ball_red)}>
          <div>
            <Red className={s.range_icon} />
            <CardanoIcon />
          </div>
        </div>
        <div className={clsx(s.ball, s.ball_eth)}>
          {" "}
          <div>
            <Blue />
            <ETHIcon />
            <span>83%</span>
          </div>
        </div>
        <div className={clsx(s.ball, s.ball_green)}>
          <div>
            <Yellow />
            <AvaIcon />
            <span>83%</span>
          </div>
        </div>
        <div className={clsx(s.ball, s.ball_red_small)}></div>
        <div className={clsx(s.ball, s.ball_gray, s.ball_gray_1)}></div>
        <div className={clsx(s.ball, s.ball_gray, s.ball_gray_2)}></div>
        <div className={clsx(s.ball, s.ball_gray, s.ball_gray_3)}></div>
        <div className={clsx(s.ball, s.ball_violet, s.ball_violet_1)}></div>
        <div className={clsx(s.ball, s.ball_violet, s.ball_violet_2)}></div>
        <div className={clsx(s.ball, s.ball_violet, s.ball_violet_3)}></div>
        <div className={clsx(s.ball, s.ball_violet, s.ball_violet_4)}>
          <div>
            <BTCIcon />
          </div>
        </div>
        <div className={clsx(s.ball, s.ball_rainbow)}></div>
        <div className={clsx(s.ball, s.left_dot)}></div>
        <div className={clsx(s.ball, s.right_dot)}></div>
        <div className={clsx(s.ball, s.bottom)}></div>
        <div className={clsx(s.ball, s.under_bottom)}></div>
      </div>
    </div>
  );
};
