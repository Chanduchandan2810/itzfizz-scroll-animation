'use client';

import Character from './Character';

export const CROWD_DATA = [
  // BACKGROUND CHARACTERS
  { id: 'char-bg-1', depth: 'bg', group: 'left', x: 12, y: 52, scale: 0.65, palette: { body: '#4A5568', pants: '#2D3748', hair: '#1A202C', skin: '#E2B897' }, pose: 'cheer', idle: 'sway' },
  { id: 'char-bg-2', depth: 'bg', group: 'left', x: 22, y: 50, scale: 0.70, palette: { body: '#E65D3F', pants: '#F5A623', hair: '#D97706', skin: '#FCD34D' }, pose: 'handsUp', idle: 'bounce' },
  { id: 'char-bg-3', depth: 'bg', group: 'center-left', x: 34, y: 53, scale: 0.65, palette: { body: '#2A9D8F', pants: '#264653', hair: '#4A5568', skin: '#FAD2B8' }, pose: 'wave', idle: 'dance' },
  { id: 'char-bg-4', depth: 'bg', group: 'center-right', x: 64, y: 52, scale: 0.68, palette: { body: '#F4A261', pants: '#E76F51', hair: '#111827', skin: '#E5C09F' }, pose: 'lookRight', idle: 'sway' },
  { id: 'char-bg-5', depth: 'bg', group: 'right', x: 76, y: 51, scale: 0.72, palette: { body: '#3B82F6', pants: '#1E3A8A', hair: '#92400E', skin: '#FED7AA' }, pose: 'handsUp', idle: 'bounce' },
  { id: 'char-bg-6', depth: 'bg', group: 'right', x: 88, y: 53, scale: 0.65, palette: { body: '#10B981', pants: '#064E3B', hair: '#1F2937', skin: '#FBBF24' }, pose: 'cheer', idle: 'dance' },

  // MIDGROUND CHARACTERS
  { id: 'char-mid-1', depth: 'mid', group: 'left', x: 8, y: 64, scale: 0.85, palette: { body: '#141416', pants: '#E65D3F', hair: '#4B5563', skin: '#F7D7C4' }, pose: 'dance', idle: 'dance' },
  { id: 'char-mid-2', depth: 'mid', group: 'left', x: 18, y: 65, scale: 0.90, palette: { body: '#E76F51', pants: '#2A9D8F', hair: '#1E1B4B', skin: '#E8B993' }, pose: 'wave', idle: 'sway' },
  { id: 'char-mid-3', depth: 'mid', group: 'center-left', x: 28, y: 62, scale: 0.88, palette: { body: '#264653', pants: '#E9C46A', hair: '#7C2D12', skin: '#FFDDC1' }, pose: 'dance', idle: 'dance' },
  { id: 'char-mid-4', depth: 'mid', group: 'center-left', x: 38, y: 66, scale: 0.92, palette: { body: '#F5A623', pants: '#141416', hair: '#18181B', skin: '#F5CBA7' }, pose: 'point', idle: 'bounce' },
  { id: 'char-mid-5', depth: 'mid', group: 'center-right', x: 60, y: 65, scale: 0.90, palette: { body: '#2D3142', pants: '#9A8C98', hair: '#5C3D2E', skin: '#EECBB6' }, pose: 'wave', idle: 'wave' },
  { id: 'char-mid-6', depth: 'mid', group: 'center-right', x: 70, y: 67, scale: 0.85, palette: { body: '#E65D3F', pants: '#1D3557', hair: '#1F2937', skin: '#FAD4C0' }, pose: 'cheer', idle: 'dance' },
  { id: 'char-mid-7', depth: 'mid', group: 'right', x: 80, y: 63, scale: 0.92, palette: { body: '#2A9D8F', pants: '#F4A261', hair: '#78350F', skin: '#E0AC69' }, pose: 'dance', idle: 'sway' },
  { id: 'char-mid-8', depth: 'mid', group: 'right', x: 91, y: 64, scale: 0.86, palette: { body: '#457B9D', pants: '#1D3557', hair: '#1E293B', skin: '#FFDFBA' }, pose: 'handsUp', idle: 'bounce' },

  // FOREGROUND CHARACTERS
  { id: 'char-fg-1', depth: 'fg', group: 'left', x: 4, y: 76, scale: 1.15, palette: { body: '#141416', pants: '#E65D3F', hair: '#F5A623', skin: '#E8B48F' }, pose: 'wave', idle: 'sway' },
  { id: 'char-fg-2', depth: 'fg', group: 'left', x: 15, y: 80, scale: 1.25, palette: { body: '#E65D3F', pants: '#141416', hair: '#18181B', skin: '#FAD2B8' }, pose: 'cheer', idle: 'bounce' },
  { id: 'char-fg-3', depth: 'fg', group: 'center-left', x: 26, y: 81, scale: 1.20, palette: { body: '#2A9D8F', pants: '#F4A261', hair: '#4A0404', skin: '#ECC0A8' }, pose: 'dance', idle: 'dance' },
  { id: 'char-fg-4', depth: 'fg', group: 'center-right', x: 74, y: 81, scale: 1.22, palette: { body: '#F5A623', pants: '#264653', hair: '#27272A', skin: '#F3C5A5' }, pose: 'dance', idle: 'dance' },
  { id: 'char-fg-5', depth: 'fg', group: 'right', x: 84, y: 79, scale: 1.18, palette: { body: '#2D3142', pants: '#E65D3F', hair: '#B45309', skin: '#FFE0BD' }, pose: 'handsUp', idle: 'bounce' },
  { id: 'char-fg-6', depth: 'fg', group: 'right', x: 94, y: 77, scale: 1.25, palette: { body: '#141416', pants: '#2A9D8F', hair: '#172554', skin: '#E2B18A' }, pose: 'cheer', idle: 'sway' },
];

export default function Crowd() {
  return (
    <div id="crowd-stage" className="absolute inset-0 bottom-[clamp(38px,6.5vh,60px)] z-10 pointer-events-none overflow-visible max-h-[800px]:bottom-[clamp(32px,5vh,46px)] max-h-[680px]:bottom-[30px]">
      {CROWD_DATA.map((char) => {
        const zIndex = char.depth === 'fg' ? 18 : char.depth === 'mid' ? 14 : 11;
        
        return (
          <div
            key={char.id}
            id={char.id}
            className={`character-container group-${char.group} depth-${char.depth} absolute origin-bottom transition-[filter] duration-300 will-change-transform`}
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              zIndex,
              transform: `translate(-50%, -50%) scale(${char.scale})`,
            }}
          >
            <Character data={char} />
          </div>
        );
      })}
    </div>
  );
}
