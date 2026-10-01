'use client';

export default function Character({ data, className = '' }) {
  const p = data.palette;
  const isFemaleHair = data.id.charCodeAt(data.id.length - 1) % 2 === 0;

  let leftArm, rightArm;

  if (data.pose === 'handsUp' || data.pose === 'cheer') {
    leftArm = (
      <>
        <path className="arm-left origin-top" d="M 32 62 Q 16 38 18 18" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="16" r="4.5" fill={p.skin} />
      </>
    );
    rightArm = (
      <>
        <path className="arm-right origin-top" d="M 68 62 Q 84 38 82 18" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="82" cy="16" r="4.5" fill={p.skin} />
      </>
    );
  } else if (data.pose === 'wave') {
    leftArm = (
      <path className="arm-left origin-top" d="M 32 62 Q 24 82 22 102" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
    );
    rightArm = (
      <>
        <path className="arm-right origin-top" d="M 68 62 Q 88 40 85 20" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="85" cy="18" r="4.5" fill={p.skin} />
      </>
    );
  } else if (data.pose === 'point') {
    leftArm = (
      <path className="arm-left origin-top" d="M 32 62 Q 22 75 24 95" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
    );
    rightArm = (
      <>
        <path className="arm-right origin-top" d="M 68 62 Q 85 68 100 58" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="102" cy="56" r="4" fill={p.skin} />
      </>
    );
  } else if (data.pose === 'dance') {
    leftArm = (
      <>
        <path className="arm-left origin-top" d="M 32 62 Q 14 55 12 36" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="34" r="4.5" fill={p.skin} />
      </>
    );
    rightArm = (
      <path className="arm-right origin-top" d="M 68 62 Q 84 80 75 102" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
    );
  } else {
    // Default / lookRight / sway
    leftArm = (
      <path className="arm-left origin-top" d="M 32 62 Q 22 80 18 100" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
    );
    rightArm = (
      <path className="arm-right origin-top" d="M 68 62 Q 78 80 82 100" stroke={p.body} strokeWidth="8" strokeLinecap="round" fill="none" />
    );
  }

  let hairSVG;
  if (isFemaleHair) {
    hairSVG = (
      <>
        <path d="M 34 32 C 34 16, 66 16, 66 32 C 72 40, 72 52, 68 56 C 64 46, 62 44, 58 44 C 52 44, 48 42, 42 44 C 38 46, 36 50, 32 56 C 28 50, 28 38, 34 32 Z" fill={p.hair} />
        <circle cx="50" cy="16" r="8" fill={p.hair} />
      </>
    );
  } else {
    hairSVG = (
      <>
        <path d="M 36 28 C 36 18, 64 18, 64 28 C 66 22, 62 16, 50 16 C 38 16, 34 22, 36 28 Z" fill={p.hair} />
        <path d="M 35 27 Q 50 20 65 27 Q 50 23 35 27 Z" fill="#ffffff" opacity="0.15" />
      </>
    );
  }

  return (
    <svg viewBox="0 0 100 160" className={`overflow-visible select-none pointer-events-none ${className}`}>
      <defs>
        <radialGradient id={`shadow-${data.id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="154" rx="26" ry="5.5" fill={`url(#shadow-${data.id})`} className="char-shadow origin-center" />
      <g className="char-body-group origin-bottom">
        <path className="leg-left" d="M 42 108 L 38 150" stroke={p.pants} strokeWidth="9" strokeLinecap="round" />
        <path className="leg-right" d="M 58 108 L 62 150" stroke={p.pants} strokeWidth="9" strokeLinecap="round" />
        <ellipse cx="34" cy="151" rx="7" ry="3.5" fill="#141416" />
        <ellipse cx="66" cy="151" rx="7" ry="3.5" fill="#141416" />
        <g className="char-torso-wrapper origin-center">
          <rect x="33" y="58" width="34" height="52" rx="10" fill={p.body} />
          <path d="M 43 58 L 50 67 L 57 58 Z" fill={p.skin} />
          {leftArm}
          {rightArm}
          <g className="char-head-group origin-center">
            <rect x="46" y="47" width="8" height="13" fill={p.skin} rx="3" />
            <circle cx="50" cy="34" r="14" fill={p.skin} />
            <circle cx="46" cy="33" r="1.5" fill="#141416" opacity="0.75" />
            <circle cx="54" cy="33" r="1.5" fill="#141416" opacity="0.75" />
            <path d="M 47 38 Q 50 41 53 38" stroke="#141416" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
            {hairSVG}
          </g>
        </g>
      </g>
    </svg>
  );
}
