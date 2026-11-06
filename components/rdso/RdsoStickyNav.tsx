"use client";

import { RdsoVerticalNav, RdsoMobileNav } from "./RdsoVerticalNav";

interface RdsoStickyNavProps {
  activeSection: string;
  onScrollToSection: (id: string) => void;
}

export default function RdsoStickyNav(props: RdsoStickyNavProps) {
  return <RdsoVerticalNav {...props} />;
}

export { RdsoVerticalNav, RdsoMobileNav };
