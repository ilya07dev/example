import { useState } from "react";

import {
  AccountIcon,
  DashboardIcon,
  MainnetIcon,
  PricingIcon,
  ProjectsIcon,
  ReferralIcon,
  SettingIcon,
  WalletIcon,
} from "@/shared/SVG";

import user1 from "@/public/Images/user_2.png";
import user2 from "@/public/Images/user_3.png";
import user3 from "@/public/Images/user_4.png";
import user4 from "@/public/Images/user_5.png";
import user5 from "@/public/Images/user_6.png";

import sircle_1 from "@/public/svg/sircle_1.svg";
import sircle_2 from "@/public/svg/sircle_2.svg";
import sircle_3 from "@/public/svg/sircle_3.svg";

import clsx from "clsx";
import s from "./styles.module.scss";

const list = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Projects",
    icon: <ProjectsIcon />,
  },
  {
    name: "Mainnet",
    icon: <MainnetIcon />,
  },
  {
    name: "Referral program",
    icon: <ReferralIcon />,
  },
  {
    name: "Pricing",
    icon: <PricingIcon />,
  },
  {
    name: "Wallets",
    icon: <WalletIcon />,
  },
  {
    name: "Settings",
    icon: <SettingIcon />,
  },
  {
    name: "Accounts",
    icon: <AccountIcon />,
  },
];

const statistic = [
  {
    icon: sircle_1,
    prcente: "56%",
    title: "6 activities",
    subtitle: "Dynamics",
  },
  {
    icon: sircle_2,
    prcente: "83%",
    title: "13 complite",
    subtitle: "Tasks",
  },
  {
    icon: sircle_3,
    prcente: "12%",
    title: "2 month",
    subtitle: "Deadline",
  },
];

const users = [user1, user2, user3, user4, user5];

export const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  return (
    <div className={s.sidebar}>
      <nav className={s.navigation}>
        {list.map((link) => {
          return (
            <div
              onClick={() => setActive(link.name)}
              className={clsx(
                s.navigation_item,
                link.name === active && s.navigation_active
              )}
              key={link.name}
            >
              {link.icon} <span>{link.name}</span>
            </div>
          );
        })}
      </nav>
      <div className={s.referals}>
        <h3>
          Your referrals <span>145</span>
        </h3>
        <div className={s.images}>
          {users.map((el) => (
            <img key={el} src={el} alt={el} />
          ))}
        </div>
      </div>
      <div className={s.statistic}>
        {statistic.map((el) => {
          return (
            <div className={s.statistic_item} key={el.title}>
              <div className={s.data}>
                <img src={el.icon} alt="" />
                <span>{el.prcente}</span>
              </div>
              <div className={s.statistic_info}>
                <span>{el.title}</span>
                <span>{el.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
