import s from "./styles.module.scss";

import berachain from "@/public/svg/berachain.svg";
import starknet from "@/public/svg/starknet.svg";
import taiko from "@/public/svg/taiko.svg";
import zksync from "@/public/svg/zksync.svg";

import { DotsIcon } from "@/shared/SVG";

import clsx from "clsx";

export const Projects = () => {
  const data = [
    {
      icon: starknet,
      about_1: "Starknet",
      about_2: "Mainnet",
      data: "05.01.2021",
      price: "$ 6,403",
    },
    {
      icon: berachain,
      about_1: "Berachain",
      about_2: "Testnet",
      data: "04.01.2021",
      price: "Free",
    },
    {
      icon: taiko,
      about_1: "Taiko",
      about_2: "Testnet",
      data: "03.01.2021",
      price: "Free",
    },
    {
      icon: zksync,
      about_1: "zkSync",
      about_2: "Mainnet",
      data: "02.01.2021",
      price: "$ 1,550",
    },
    {
      icon: taiko,
      about_1: "Taiko",
      about_2: "Testnet",
      data: "02.01.2021",
      price: "Free",
    },
    {
      icon: zksync,
      about_1: "zkSync",
      about_2: "Mainnet",
      data: "01.01.2021",
      price: "$ 2,500",
    },
    {
      icon: zksync,
      about_1: "zkSync",
      about_2: "Mainnet",
      data: "01.01.2021",
      price: "$ 2,500",
    },
  ];
  return (
    <article className={s.projects}>
      <div className={s.projects_top}>
        <h2 className={s.title}>Last projects</h2>
        <div className={s.btn_wrapper}>
          <button className={s.btn}>All projects</button>
          <button className={s.btn_svg}>
            <DotsIcon />
          </button>
        </div>
      </div>
      <div className={s.about}>
        <span>Name</span>
        <span>Date & time</span>
        <span>Trend</span>
      </div>
      <div className={s.list}>
        {data.map((el) => {
          return (
            <div className={s.item}>
              <div className={s.desc}>
                <div
                  className={clsx(s.img, s[`img_${el.about_1.toLowerCase()}`])}
                >
                  <img src={el.icon} alt={el.about_1} />
                </div>
                <p className={s.desc_info}>
                  <span className={s.desc_title}>{el.about_1}</span>
                  <span className={s.desc_text}>{el.about_2}</span>
                </p>
              </div>
              <div className={s.data}>
                <span className={s.data_title}>Sent</span>
                <span className={s.data_text}>{el.data}</span>
              </div>
              <span className={s.price}>{el.price}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
};
