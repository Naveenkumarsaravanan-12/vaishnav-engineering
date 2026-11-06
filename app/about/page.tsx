import AboutSection from "@/components/sections/AboutSection";
import AboutHighlights from "@/components/sections/AboutHighlights";
import OwnerPortraitBlock from "@/components/sections/OwnerPortraitBlock";

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      {/* Animated Owner Details Portrait Block */}
      <OwnerPortraitBlock />
      <AboutHighlights />
    </>
  );
}