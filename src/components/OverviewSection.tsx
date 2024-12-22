import Link from "next/link";
import { css, cx, sva } from "../../styled-system/css";

const overviewSectionStyles = sva({
  slots: [
    "container",
    "overviewSection",
    "detialSection",
    "title",
    "text",
    "detailText",
    "subtext",
    "locationLink",
  ],
  base: {
    container: {
      position: "relative",
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      px: "72px",
      pt: "92px",
      pb: "128px",
      maxWidth: "1980px",
      mx: "auto",
      color: "text",
      _before: {
        content: '""',
        position: "absolute",
        display: "block",
        width: "100%",
        height: "1px",
        background: "text",
        gridColumn: "1 / span 5",
        mdDown: {
          gridColumn: "span 1",
          width: "calc(100% - 64px)",
          transform: "translateX(32px)",
        },
      },
      mdDown: {
        px: "32px",
        gridTemplateColumns: "1fr",
        gap: "64px",
      },
    },
    overviewSection: {
      gridColumn: "1 / span 2",
      display: "grid",
      gridTemplateColumns: "1fr",
      height: "fit-content",
      mdDown: {
        gridColumn: "span 1",
      },
    },
    detialSection: {
      gridColumn: "3 / span 2",
      display: "grid",
      gridTemplateColumns: "1fr",
      height: "fit-content",
      mdDown: {
        gridColumn: "span 1",
      },
    },
    title: {
      fontSize: "14px",
      fontWeight: "800",
      mb: "32px",
      fontStyle: "normal",
    },
    text: {
      fontSize: "17px",
      lineHeight: "150%",
      whiteSpace: "pre-line",
      fontWeight: "500",
      textStyle: "demiBold",
    },
    detailText: {
      fontSize: "13px",
      mt: "20px",
      mdDown: {
        mt: "10px",
      },
    },
    subtext: {
      fontSize: "11px",
      opacity: 0.5,
      mdDown: {
        fontSize: "12px",
      },
    },
    locationLink: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      alignSelf: "stretch",
      height: "32px",
      borderBottom: "1px solid currentColor",
      width: "fit-content",
      textTransform: "uppercase",
      fontSize: "14px",
      fontWeight: 500,
      "& span": {
        display: "block",
      },
      "& span:nth-of-type(2)": {
        transform: "rotate(-45deg)",
      },
    },
  },
});

export const OverviewSection: React.FC = () => {
  const style = overviewSectionStyles();
  return (
    <section className={style.container} id="overview">
      <div className={style.overviewSection}>
        <h2 className={style.title}>Overview</h2>
        <p
          className={cx(
            style.text,
            css({
              fontWeight: "800",
            })
          )}
        >
          {`武蔵野美術大学\nInstitute of Innovation\n卒業・修了展 2024`}
        </p>
        <p
          className={cx(
            style.subtext,
            css({
              mt: "40px",
              width: "50%",
              mdDown: {
                width: "100%",
                mt: "20px",
              },
            })
          )}
        >
          {`＊本展は、造形構想学部クリエイティブイノベーション学科、大学院造形構想研究科クリエイティブリーダーシップコースの卒業・修了展となります。 クリエイティブイノベーション学科、大学院造形構想研究科クリエイティブリーダーシップコース以外の学科・コースの展示は、鷹の台キャンパスで行います。`}
        </p>
      </div>

      <div className={style.detialSection}>
        <h2 className={style.title}>Exhibition dates</h2>
        <p className={style.text}>
          {`2025年 1月31日(金)〜2月2日(日)    10:00~20:00`}
        </p>
        <p className={style.detailText}>{`入場にご予約は不要です。`}</p>
        <h2
          className={cx(
            style.title,
            css({
              mt: "80px",
              mdDown: {
                mt: "64px",
              },
            })
          )}
        >
          Location
        </h2>
        <p className={style.text}>{`武蔵野美術大学 市ヶ谷キャンパス`}</p>
        <p
          className={cx(
            style.detailText,
            css({
              mb: "24px",
              mdDown: {
                mb: "20px",
              },
            })
          )}
        >
          {`〒162-0843 東京都新宿区市谷田町1丁目4`}
        </p>
        <Link
          className={style.locationLink}
          href="https://maps.app.goo.gl/BFELjGemv6NjXZKA9"
          target="_blank"
        >
          <span>Google Maps</span>
          <span>→</span>
        </Link>
        <p
          className={cx(
            style.subtext,
            css({
              mt: "24px",
            })
          )}
        >
          {`＊市ヶ谷キャンパスに駐車場はありません。 車で来校し近隣のコインパーキングで順番待ちをすることや、送迎等による近隣道路への駐停車は、交通の妨げになり、近隣住民の迷惑にもなります。 お車でのご来校はお控えいただき、公共交通機関をご利用ください。ご理解・ご協力をお願いいたします。`}
        </p>
      </div>
    </section>
  );
};
