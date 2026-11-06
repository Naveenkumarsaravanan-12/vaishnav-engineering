export default function SteelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Main Structural Body */}
      <path d="M4 6H20M4 18H20M8 6V18M16 6V18" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Technical Detail Lines */}
      <path d="M4 6L2 4M20 6L22 4M4 18L2 20M20 18L22 20" strokeWidth="0.8" opacity="0.6"/>
      <path d="M12 6V18" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5"/>
    </svg>
  );
}