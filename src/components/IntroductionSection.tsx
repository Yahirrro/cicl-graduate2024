import { sva } from "../../styled-system/css";
import { IntroductionImages } from "./IntroductionImages";

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
      pb: "128px",
      maxWidth: "1980px",
      mx: "auto",
      color: "rgba(0, 4, 128, 1)",
    },
    introductionContainer: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / span 5",
      gap: "24px",
      pb: "128px",
    },
    introductionTitle: {
      gridColumn: "1 / span 3",
      fontSize: "64px",
      whiteSpace: "pre-line",
      fontWeight: "500",
    },
    introductionText: {
      gridColumn: "4 / span 2",
      fontSize: "19px",
      lineHeight: "175% /* 24px */",
    },
  },
});

export const IntroductionSection: React.FC = () => {
  const style = introductionSectionStyles();
  return (
    <section className={style.container}>
      <div className={style.introductionContainer}>
        <h2
          className={style.introductionTitle}
        >{`CI/CLらしい\n「学びと制作」の\n集大成。`}</h2>
        <p
          className={style.introductionText}
        >{`わたしたちは日夜、研究と実験を繰り返しています。 それは、 制作や実践を伝える手引きとなる、展開図を作る作業にも似ています。 展開図は、組み立てるための説明や試行の軌跡であり、 組み立てたものを紐解くための解説でもあるからです。その中には、それぞれが見つけたゴールと、 生み出した方法があります。その多様さこそが、 わたしたちの特徴です。 本年度の卒業・修了展のテーマは「展開図」それはわたしたちの軌跡であり、 これからの道標。 それぞれの新しい未来と、 今への眼差しを是非ともお楽しみください。(仮テキスト)`}</p>
      </div>
      <IntroductionImages />
    </section>
  );
};
