import { Footer } from "@/components/Footer";
import { OverviewSection } from "@/components/OverviewSection";
import { TopPageContainer } from "@/components/TopPageContainer";
import { styled } from "../../../styled-system/jsx";

const BgWhite = styled("div", {
  base: {
    bg: "white",
  },
});

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <TopPageContainer>
      {children}
      <BgWhite>
        <OverviewSection />
        <Footer />
      </BgWhite>
    </TopPageContainer>
  );
}
