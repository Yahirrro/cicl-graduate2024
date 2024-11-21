import { CountDownSection } from "@/components/CountdownSection";
import { Footer } from "@/components/Footer";
import { IntroductionSection } from "@/components/IntroductionSection";
import { OverviewSection } from "@/components/OverviewSection";
import { TopSection } from "@/components/TopSection";
import { VisualViewer } from "@/components/VisualViewer";

export default function Home() {
  return (
    <div>
      <TopSection />
      <VisualViewer />
      <IntroductionSection />
      <CountDownSection />
      <OverviewSection />
      <Footer />
    </div>
  );
}
