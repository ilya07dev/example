import { FAQIcon, SettingIcon, WorldIcon } from "@/shared/SVG";

import s from "./styles.module.scss";

import avatar from "@/public/Images/user.png";

export const RightMenu = () => {
  return (
    <div className={s.right_menu}>
      <div className={s.icons}>
        <FAQIcon />
        <SettingIcon />
        <WorldIcon />
      </div>
      <div className={s.user}>
        <img className={s.img} src={avatar} />
        <p className={s.user_text}>
          <span className={s.name}>Justin Hamphrey</span>
          <span className={s.mail}>email@email.com</span>
        </p>
      </div>
    </div>
  );
};
