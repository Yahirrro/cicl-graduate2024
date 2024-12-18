import { sva } from "../../styled-system/css";
import { CountDownSectionNumber } from "./CountdownSectionNumber";

const countDownSectionStyles = sva({
  slots: ["container", "countdownTitle", "countdownText"],
  base: {
    container: {
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      alignItems: "center",
      px: "72px",
      pt: "92px",
      pb: "92px",
      maxWidth: "1980px",
      mx: "auto",
      color: "rgba(0, 4, 128, 1)",
      _before: {
        content: '""',
        display: "block",
        gridColumn: "1 / span 2",
        width: "80%",
        height: "1px",
        background: "rgba(0, 4, 128, 1)",
        mdDown: {
          gridColumn: "span 1",
          width: "1px",
          height: "100px",
          margin: "0 auto",
          mb: "32px",
        },
      },
      mdDown: {
        gridTemplateColumns: "1fr",
        gap: "20px",
        px: "32px",
        pt: "16px",
        pb: "128px",
      },
    },
    countdownTitle: {
      gridColumn: "3 / span 2",
      fontSize: "20px",
      textStyle: "demiBold",
      mdDown: {
        gridColumn: "span 1",
        textAlign: "center",
      },
    },
    countdownText: {
      gridColumn: "5 / span 1",
      fontSize: "20px",
      overflow: "hidden",
      height: "110px",
      mdDown: {
        gridColumn: "span 1",
        lineHeight: "1",
        textAlign: "center",
        height: "80px",
      },
    },
  },
});

export const CountDownSection: React.FC = () => {
  const style = countDownSectionStyles();

  // 2025/01/31 JSTの00:00:00までの残り日数を計算
  const targetDate = new Date("2025-01-31T00:00:00+09:00");
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

  // diff daysを10の位と1の位に分割
  const tensDigit = Math.floor(diffDays / 10);
  const onesDigit = diffDays % 10;

  return (
    <section className={style.container}>
      <h2 className={style.countdownTitle}>卒業制作展まであと</h2>
      <p className={style.countdownText}>
        <CountDownSectionNumber tensDigit={tensDigit} onesDigit={onesDigit} />
      </p>
    </section>
  );
};
