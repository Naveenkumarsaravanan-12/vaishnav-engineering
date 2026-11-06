export default function BridgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Main Arch */}
      <path d="M3 14C3 14 7 8 12 8C17 8 21 14 21 14" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Vertical Cables */}
      <path d="M7 11V18M12 8V18M17 11V18" strokeWidth="0.8" opacity="0.6"/>
      {/* Roadway */}
      <path d="M2 18H22" strokeWidth="2" strokeLinecap="square"/>
    </svg>
  );
}