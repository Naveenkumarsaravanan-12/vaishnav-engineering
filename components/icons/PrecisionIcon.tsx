export default function PrecisionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Outer Gear Ring */}
      <circle cx="12" cy="12" r="9" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4"/>
      {/* Inner Precision Mechanism */}
      <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
      <path d="M12 2V5M12 19V22M2 12H5M19 12H22" strokeWidth="1.2"/>
      <path d="M12 8V12L14 14" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}