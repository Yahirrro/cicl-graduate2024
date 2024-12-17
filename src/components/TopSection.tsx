import { css, cx, sva } from "../../styled-system/css";
import { LogoTypography } from "./LogoTypegraphy";
import { TopSectionInnerLink } from "./TopSectionInnerLink";
import { FadeIn } from "./util/FadeIn";

const topSectionStyles = sva({
  slots: [
    "container",
    "topHeaderContainer",
    "topHeaderContainerTitle",
    "topHeaderContainerSubtitle",
    "topTitleContainer",
    "topTitleContainerText",
    "topInfoContainer",
    "topInfoContainerText",
    "topInfoLinkContainer",
    "topInfoLink",
    "topVisualContainer",
  ],
  base: {
    container: {
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateRows: "auto 1fr auto",
      px: "72px",
      pt: "64px",
      pb: "48px",
      height: "100vh",
      color: "white",
      overflow: "hidden",

      mdDown: {
        height: "100svh",
        px: "20px",
        pt: "20px",
        pb: "20px",
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
    topHeaderContainer: {
      display: "grid",
      gridColumn: "1 / span 5",
      gridRow: "1 / span 1",
      gridTemplateColumns: "subgrid",
      mb: "82px",
      textStyle: "extraSmall",
      alignContent: "end",
      mdDown: {
        gridColumn: "span 2",
      },
    },
    topHeaderContainerTitle: {
      gridColumn: "1 / span 2",
      whiteSpace: "pre",
      textStyle: "extraSmall",
      mdDown: {
        display: "none",
      },
    },
    topHeaderContainerSubtitle: {
      gridColumn: "4 / span 2",
      textAlign: "right",
      whiteSpace: "pre",
      mdDown: {
        gridColumn: "1 / span 2",
        fontSize: "11px",
        textAlign: "left",
        letterSpacing: "-0.01rem",
      },
    },
    topTitleContainer: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 5",
      mb: "64px",
      alignContent: "end",
      mdDown: {
        gridColumn: "1 / span 2",
        mb: "32px",
      },
    },
    topTitleContainerText: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 2",
      fontSize: "64px",
      "& span": {
        display: "none",
      },
      "& svg": {
        gridColumn: "1 / span 2",
      },
    },
    topInfoContainer: {
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 5",
      display: "grid",
      mdDown: {
        gridColumn: "1 / span 2",
        gap: "24px",
      },
    },
    topInfoContainerText: {
      whiteSpace: "pre",
      textStyle: "extraSmall",
    },
    topInfoLinkContainer: {
      display: "grid",
      gridColumn: "4 / span 2",
      gap: "10px",
      justifyItems: "end",
      mdDown: {
        display: "none",
      },
    },
    topInfoLink: {
      display: "flex",
      padding: "4px 20px",
      alignItems: "center",
      gap: "10px",
      flex: "1 0 0",
      border: "1px solid currentColor",
      height: "fit-content",
      width: "fit-content",
      textStyle: "small",
      cursor: "pointer",
    },

    topVisualContainer: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: -10,
    },
  },
});

export const TopSection: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const style = topSectionStyles();

  return (
    <header className={style.container}>
      <FadeIn className={style.topHeaderContainer} delay={4.5}>
        <p className={style.topHeaderContainerTitle}>
          {`MUSASHINO ART UNIV\nINSTITUTE OF INNOVATION`}
        </p>
        <p className={style.topHeaderContainerSubtitle}>
          {`武蔵野美術大学造形構想学部クリエイティブイノベーション学科\n造形構想研究科造形構想専攻クリエイティブリーダーシップコース\n卒業制作展 2024`}
        </p>
      </FadeIn>
      <FadeIn className={style.topTitleContainer} delay={3} duration={3}>
        <h1 className={style.topTitleContainerText}>
          <span>武蔵野美術大学 Institute of Innovation 卒業・修了展 2024</span>
          <LogoTypography />
        </h1>
      </FadeIn>
      <FadeIn className={style.topInfoContainer} delay={4.5}>
        <p
          className={cx(
            style.topInfoContainerText,
            css({
              mdDown: {
                gridColumn: "1 / -1",
              },
            })
          )}
        >
          {`ICHIGAYA CAMPUS,\nMUSASHINO ART UNIV.`}
        </p>
        <p className={style.topInfoContainerText}>{`2024/01/31 - 02/02`}</p>
        <p className={style.topInfoContainerText}>{`10:00 - 20:00 OPEN`}</p>
        <div className={style.topInfoLinkContainer}>
          <TopSectionInnerLink className={style.topInfoLink} />
        </div>
      </FadeIn>

      <div className={style.topVisualContainer}>{children}</div>
    </header>
  );
};
