import statistic_1 from "@/public/svg/statistic_1.svg";
import statistic_2 from "@/public/svg/statistic_2.svg";
import statistic_3 from "@/public/svg/statistic_3.svg";
import statistic_4 from "@/public/svg/statistic_4.svg";

import s from "./styles.module.scss";

export const Statistic = () => {
  const data = [
    {
      icon: statistic_1,
      undertitle: "Portfolio",
      title: "$34,394",
      precente: "+4.5%",
      price: "$3,440",
    },
    {
      icon: statistic_2,
      undertitle: "Perfomance today",
      title: "$1,870",
      precente: "+1.2%",
      price: "$440",
    },
    {
      icon: statistic_3,
      undertitle: "All time profit",
      title: "$5,34,394",
      precente: "+12.5%",
      price: "$24,440",
    },
    {
      icon: statistic_4,
      undertitle: "Dividends",
      title: "$3,782",
      precente: "+1.1%",
      price: "$840",
    },
  ];

  return (
    <div className={s.statistic}>
      {data.map((el) => {
        return (
          <article className={s.item}>
            <div className={s.img}>
              <img src={el.icon} alt={el.undertitle} />
            </div>
            <span className={s.undertitle}>{el.undertitle}</span>
            <h3 className={s.title}>{el.title}</h3>
            <div className={s.info}>
              <span className={s.precente}>{el.precente}</span>
              <span className={s.dot}></span>
              <span className={s.price}>{el.price}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
};
