import { sva } from "../../styled-system/css";
import { IntroductionImages } from "./IntroductionImages";
import { FadeInInView } from "./util/FadeInInView";

const introductionSectionStyles = sva({
  slots: [
    "container",
    "introductionContainer",
    "introductionTitle",
    "introductionText",
    "introductionImagesContainer",
  ],
  base: {
    container: {
      display: "grid",
      gap: "0 24px",
      gridTemplateColumns: "repeat(5, 1fr)",
      px: "72px",
      pt: "92px",
      pb: "0px",
      maxWidth: "1920px",
      mx: "auto",
      color: "rgba(0, 4, 128, 1)",
      mdDown: {
        pt: "92px",
        pb: "0px",
        gridTemplateColumns: "repeat(3, 1fr)",
        px: "32px",
      },
    },
    introductionContainer: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 5",
      gap: "24px",
      pb: "0",
      mdDown: {
        gridColumn: "1 / span 3",
        pb: "32px",
        gap: "42px",
      },
    },
    introductionTitle: {
      gridColumn: "1 / span 3",
      fontSize: "52px",
      whiteSpace: "pre-line",
      fontWeight: "500",
      fontFeatureSettings: '"palt" on',
      letterSpacing: "-0.04em",
      "& h2": {
        textStyle: "demiBold",
      },
      mdDown: {
        gridColumn: "1 / span 3",
        fontSize: "32px",
      },
    },
    introductionText: {
      gridColumn: "4 / span 2",
      fontSize: "19px",
      lineHeight: "175%",
      "& p": {
        "& span": {
          mb: "24px",
          display: "block",
          _lastOfType: {
            mb: "0",
          },
        },
      },
      mdDown: {
        gridColumn: "1 / span 3",
        fontSize: "15px",
        lineHeight: "165%",
      },
    },
  },
});

export const IntroductionSection: React.FC = () => {
  const style = introductionSectionStyles();
  return (
    <section className={style.container}>
      <div className={style.introductionContainer}>
        <FadeInInView className={style.introductionTitle} delay={0}>
          <h2>{`連なる、広がる、巡る。`}</h2>
        </FadeInInView>
        <FadeInInView className={style.introductionText} delay={0.8}>
          <p>
            <span>
              私たちが日々発した言葉や生み出してきた作品は、小さな粒として、連なり、広がり、時に反発し合いながら、社会を巻き込んできました。
            </span>
            <span>
              そうして広がった豊かな繋がりは、再び私たちの創造の糧となって、新たなイノベーションを起こしていきます。
            </span>
            <span>
              本展で、皆様をこの
              <ruby>
                環<rp>(</rp>
                <rt>わ</rt>
                <rp>)</rp>
              </ruby>
              の中に巻き込み、さらなる大きな
              <ruby>
                環<rp>(</rp>
                <rt>わ</rt>
                <rp>)</rp>
              </ruby>
              が生まれることを願っています。
            </span>
          </p>
        </FadeInInView>
      </div>
      <IntroductionImages />
    </section>
  );
};
