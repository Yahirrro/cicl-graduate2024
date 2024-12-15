import { CountDownSection } from "@/components/CountdownSection";
import { Footer } from "@/components/Footer";
import { IntroductionSection } from "@/components/IntroductionSection";
import { OverviewSection } from "@/components/OverviewSection";
import { TopSection } from "@/components/TopSection";
import { VisualViewer } from "@/components/VisualViewer";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { TopPageContainer } from "@/components/TopPageContainer";
import { styled } from "../../styled-system/jsx";

export const runtime = "edge";

const BgWhite = styled("div", {
  base: {
    bg: "white",
  },
});

export default function Home() {
  return (
    <TopPageContainer>
      <LoadingAnimation />

      <TopSection>
        <VisualViewer />
      </TopSection>

      <BgWhite>
        <IntroductionSection />
        <CountDownSection />
        <OverviewSection />
        <Footer />
      </BgWhite>
    </TopPageContainer>
  );
}
