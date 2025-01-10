import { CountDownSection } from "@/components/CountdownSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { TopSection } from "@/components/TopSection";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { styled } from "../../../styled-system/jsx";
import { LinkSection } from "@/components/LinkSection";

export const runtime = "edge";

const BgWhite = styled("div", {
  base: {
    bg: "white",
  },
});

export default function Home() {
  return (
    <>
      <LoadingAnimation />

      <TopSection />

      <BgWhite>
        <IntroductionSection />
        <CountDownSection />
        <LinkSection />
      </BgWhite>
    </>
  );
}
