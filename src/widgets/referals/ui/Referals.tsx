import { useState } from "react";

import s from "./styles.module.scss";
import clsx from "clsx";

export const Referals = () => {
  const [value, settValue] = useState("");

  const text = "https://account.airdropfactory.io/register?promo=JohnTim";

  return (
    <article className={s.referals}>
      <div className={s.referals_top}>
        <h3 className={s.title}>Referrals</h3>
        <button
          className={s.btn}
          onClick={() => {
            if (value) {
              window.navigator.clipboard.writeText(value);
            } else {
              window.navigator.clipboard.writeText(text);
            }
          }}
        >
          Copy link
        </button>
      </div>
      <input
        className={s.input}
        placeholder={text}
        value={value}
        onChange={(el) => settValue(el.target.value)}
        type="text"
      />
      <div className={s.list}>
        <div className={s.item}>
          <span className={s.text}>All time rewards</span>
          <span className={s.price}>$ 4,540,00</span>
        </div>
        <div className={s.item}>
          <span className={s.text}>Received</span>
          <span className={s.price}>$ 3,959,01</span>
        </div>
        <div className={s.item}>
          <span className={s.text}>Not received</span>
          <span className={clsx(s.price, s.price_low)}>$ 2,002,50</span>
        </div>
      </div>
    </article>
  );
};
