'use client';

export default function Header() {
  return (
    <header id="site-header" className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between pointer-events-auto p-[clamp(0.5rem,1.2vh,1rem)_clamp(1rem,2.5vw,2.5rem)]">
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#141416] text-[#FBF9F5] flex items-center justify-center font-black text-xs sm:text-sm tracking-tighter shadow-sm">
          IF
        </div>
        <div className="flex items-center">
          <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#141416]">ITZFIZZ</span>
          <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-black/5 rounded-full text-[#141416]/70">Studio</span>
        </div>
      </div>
      
      {/* Center status badge */}
      <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/70 backdrop-blur-md shadow-xs absolute left-1/2 -translate-x-1/2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span id="status-badge-text" className="text-xs font-medium text-[#141416]/80 tracking-wide">
          Interactive Crowd Stage
        </span>
        <span id="status-badge-text-sub" className="text-[10px] font-mono text-[#141416]/40 border-l border-black/10 pl-2 max-h-[680px]:hidden">
          Scroll / Drag To Direct
        </span>
      </div>

      {/* Right link/controls */}
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-mono tracking-widest text-[#141416]/60 uppercase hidden lg:block">Digital Experience</span>
        <button id="stage-toggle-btn" className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-full bg-[#141416] text-white hover:bg-[#E65D3F] transition-colors shadow-sm cursor-pointer flex items-center gap-1.5 active:scale-95">
          <span id="btn-text">Celebrate</span>
          <span className="material-symbols-outlined text-[13px] sm:text-[14px]">arrow_forward</span>
        </button>
      </div>
    </header>
  );
}
