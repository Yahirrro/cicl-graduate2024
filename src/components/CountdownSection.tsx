import { css, cx, sva } from "../../styled-system/css";
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
      color: "text",
      _before: {
        content: '""',
        display: "block",
        gridColumn: "1 / span 2",
        width: "80%",
        height: "1px",
        background: "text",
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
      gridColumn: "3 / span 1",
      fontSize: "20px",
      textStyle: "demiBold",
      mdDown: {
        gridColumn: "span 1",
        textAlign: "center",
      },
    },
    countdownText: {
      gridColumn: "4 / span 2",
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

  // 展示期間の定義
  const exhibitionStart = new Date("2025-01-31T00:00:00+09:00");
  const exhibitionEnd = new Date("2025-02-02T23:59:59+09:00");
  const now = new Date();

  // 展示期間中かどうかを判定
  const isExhibitionPeriod = now >= exhibitionStart && now <= exhibitionEnd;
  // 展示終了後かどうかを判定
  const isAfterExhibition = now > exhibitionEnd;

  if (isExhibitionPeriod) {
    return (
      <section className={style.container}>
        <h2 className={style.countdownTitle}>卒業制作展</h2>
        <p
          className={cx(
            style.countdownText,
            css({
              fontSize: "80px",
              height: "80px",
              mdDown: {
                fontSize: "60px",
                height: "60px",
              },
            })
          )}
        >
          <CountDownSectionNumber tensDigit={0} onesDigit={0} text="開催中" />
        </p>
      </section>
    );
  }

  if (isAfterExhibition) {
    // 展示終了後の経過日数を計算
    const diff = now.getTime() - exhibitionEnd.getTime();
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    // 経過日数を千の位、百の位、10の位、1の位に分割
    const thousandsDigit = Math.floor(diffDays / 1000);
    const hundredsDigit = Math.floor((diffDays % 1000) / 100);
    const tensDigit = Math.floor((diffDays % 100) / 10);
    const onesDigit = diffDays % 10;

    return (
      <section className={style.container}>
        <h2 className={style.countdownTitle}>卒業制作展から</h2>
        <p className={style.countdownText}>
          <CountDownSectionNumber
            thousandsDigit={thousandsDigit}
            hundredsDigit={hundredsDigit}
            tensDigit={tensDigit}
            onesDigit={onesDigit}
          />
        </p>
      </section>
    );
  }

  // 展示開始前（カウントダウン）
  const diff = exhibitionStart.getTime() - now.getTime();
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

  // カウントダウンの日数を千の位、百の位、10の位、1の位に分割
  const thousandsDigit = Math.floor(diffDays / 1000);
  const hundredsDigit = Math.floor((diffDays % 1000) / 100);
  const tensDigit = Math.floor((diffDays % 100) / 10);
  const onesDigit = diffDays % 10;

  return (
    <section className={style.container}>
      <h2 className={style.countdownTitle}>卒業制作展まであと</h2>
      <p className={style.countdownText}>
        <CountDownSectionNumber
          thousandsDigit={thousandsDigit}
          hundredsDigit={hundredsDigit}
          tensDigit={tensDigit}
          onesDigit={onesDigit}
        />
      </p>
    </section>
  );
};
