export default function GeoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Main Rig Structure */}
      <path d="M12 2V18M12 18L9 21H15L12 18Z" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Soil Level Indicators */}
      <path d="M7 6H17M8 10H16M9 14H15" strokeWidth="1" opacity="0.5"/>
      <path d="M5 22H19" strokeWidth="2" strokeLinecap="square"/>
    </svg>
  );
}