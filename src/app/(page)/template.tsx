import { Footer } from "@/components/Footer";
import { OverviewSection } from "@/components/OverviewSection";
import { styled } from "../../../styled-system/jsx";

const BgWhite = styled("div", {
  base: {
    bg: "white",
  },
});

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BgWhite>
        <OverviewSection />
        <Footer />
      </BgWhite>
    </>
  );
}
