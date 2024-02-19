import banner from "@/public/Images/auth_banner.png";

import s from "./styles.module.scss";

export const AuthBar = () => {
  return (
    <article className={s.banner}>
      <div className={s.info}>
        <h1 className={s.title}>Unlock the power of AF</h1>
        <p className={s.subtitle}>
          Get ready to receive your airdrops with Airdrop Factory
        </p>
      </div>
      <img className={s.img} src={banner} alt="img" />
    </article>
  );
};
