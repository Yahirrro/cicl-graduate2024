import { sva } from "../../styled-system/css";

const countDownSectionStyles = sva({
  slots: ["container", "countdownTitle", "countdownText"],
  base: {
    container: {
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      alignItems: "center",
      px: "72px",
      pt: "44px",
      pb: "172px",
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
      mdDown: {
        gridColumn: "span 1",
        textAlign: "center",
      },
    },
    countdownText: {
      gridColumn: "5 / span 1",
      fontSize: "20px",
      "& span": {
        pr: "8px",
        fontSize: "110px",
        mdDown: {
          fontSize: "80px",
          lineHeight: "1",
          height: "80px",
        },
      },
      mdDown: {
        gridColumn: "span 1",
        lineHeight: "1",
        textAlign: "center",
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

  return (
    <section className={style.container}>
      <h2 className={style.countdownTitle}>卒業制作展まであと</h2>
      <p className={style.countdownText}>
        <span>{diffDays}</span>日
      </p>
    </section>
  );
};
