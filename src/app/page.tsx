import { CountDownSection } from "@/components/CountdownSection";
import { Footer } from "@/components/Footer";
import { IntroductionSection } from "@/components/IntroductionSection";
import { OverviewSection } from "@/components/OverviewSection";
import { TopSection } from "@/components/TopSection";
import { VisualViewer } from "@/components/VisualViewer";
import { css } from "../../styled-system/css";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { TopPageContainer } from "@/components/TopPageContainer";

export const runtime = "edge";

export default function Home() {
  return (
    <TopPageContainer>
      <LoadingAnimation />

      <TopSection>
        <VisualViewer />
      </TopSection>

      <div
        className={css({
          bg: "white",
        })}
      >
        <IntroductionSection />
        <CountDownSection />
        <OverviewSection />
        <Footer />
      </div>
    </TopPageContainer>
  );
}
