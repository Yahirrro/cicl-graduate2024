import { CountDownSection } from "@/components/CountdownSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { TopSection } from "@/components/TopSection";
import { VisualViewer } from "@/components/VisualViewer";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { styled } from "../../../styled-system/jsx";

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

      <TopSection>
        <VisualViewer />
      </TopSection>

      <BgWhite>
        <IntroductionSection />
        <CountDownSection />
      </BgWhite>
    </>
  );
}
