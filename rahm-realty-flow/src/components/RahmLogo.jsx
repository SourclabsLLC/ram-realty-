export default function RahmLogo({ size = "md", light = false }) {
  const scales = { sm: 0.7, md: 1, lg: 1.4 };
  const s = scales[size] || 1;
  const textColor = light ? "#F9F6F0" : "#1B2A4A";
  const subColor = light ? "#C9A84C" : "#C9A84C";

  return (
    <svg width={160 * s} height={52 * s} viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wave-Roof icon */}
      <g transform="translate(68, 2)">
        {/* Roof peak */}
        <path d="M12 10 L24 2 L36 10" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Chimney */}
        <rect x="20" y="2" width="3" height="4" rx="0.5" fill="url(#goldGrad)"/>
        {/* Wave beneath */}
        <path d="M4 16 Q8 13 12 16 Q16 19 20 16 Q24 13 28 16 Q32 19 36 16 Q40 13 44 16" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
      </g>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#E8C96A"/>
        </linearGradient>
      </defs>
      {/* THE RAHM TEAM wordmark */}
      <text x="80" y="38" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize={18 * s} fontWeight="700" fill={textColor} letterSpacing="-0.5">
        THE RAHM TEAM
      </text>
      {/* KW sub-line */}
      <text x="80" y="50" textAnchor="middle" fontFamily="'Public Sans', sans-serif" fontSize={7.5 * s} fontWeight="600" fill={subColor} letterSpacing="2">
        KELLER WILLIAMS HARBOR COUNTRY
      </text>
    </svg>
  );
}