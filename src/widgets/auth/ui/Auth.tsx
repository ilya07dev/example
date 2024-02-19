import { useState } from "react";

import {
  AppleIcon,
  BackIcon,
  GoogleIcon,
  LogoIcon,
  MailIcon,
  Password,
} from "@/shared/SVG";

import { Button } from "./Button";

import s from "./styles.module.scss";
import clsx from "clsx";

// import * as AuthModel from "../model";
// import { useUnit } from "effector-react";

export const Auth = () => {
  type tabs = "Sign in" | "Create account";
  const tabs = ["Sign in", "Create account"];

  const [activeTab, setActiveTab] = useState<tabs>("Create account");
  const [isReset, setIsReset] = useState(false);

  //   const [setIsAuth] = useUnit([AuthModel.setIsAuth]);

  //   const toAuth = () => setIsAuth(true);

  return (
    <div className={s.wrapper}>
      <div className={s.auth}>
        {isReset ? (
          <article className={s.reset_wrapper}>
            <div className={s.back}>
              <BackIcon
                className={s.reset_icon}
                onClick={() => setIsReset(false)}
              />
              <h3>Reset your password</h3>
            </div>
            <div className={clsx(s.input_item_reset, s.input_item)}>
              <MailIcon />
              <input type="email" placeholder="Email" />
            </div>
            <Button className={s.reset_btn} title="Reset password" />
          </article>
        ) : (
          <article className={s.window}>
            <LogoIcon className={s.logo} />
            <div className={s.tab_wrapper}>
              {tabs.map((tab) => (
                <button
                  className={clsx(s.tab, activeTab === tab && s.tab_active)}
                  onClick={() => setActiveTab(tab as tabs)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={s.btns_wrapper}>
              <button>
                <GoogleIcon />
                Continue with Google
              </button>
              <button>
                <AppleIcon />
                Continue with Apple
              </button>
            </div>
            <div className={s.line}>
              <span></span>OR
              <span></span>
            </div>
            <div className={s.input_wrapp}>
              <div className={s.input_item}>
                <MailIcon />
                <input type="email" placeholder="Email" />
              </div>
              <div className={s.input_item}>
                <Password />
                <input type="password" placeholder="Password" />
              </div>
            </div>
            {activeTab === "Create account" ? (
              <>
                <Button title="Sign Up" className={s.sign_btn} />
                <p className={s.undertitle}>
                  By creating an account, you agree to our{" "}
                  <span>Terms of Service</span> and{" "}
                  <span>Privacy & Cookie Statement</span>.
                </p>
              </>
            ) : (
              <>
                <span onClick={() => setIsReset(true)} className={s.reset}>
                  Forgot password?
                </span>
                <Button className={s.sign_btn} title="Sign in" />
              </>
            )}
          </article>
        )}
      </div>
    </div>
  );
};
