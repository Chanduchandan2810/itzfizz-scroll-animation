'use client';

export default function ScrollProgress() {
  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 select-none">
      <span className="text-[8px] font-mono text-[#141416]/40 rotate-90 origin-center mb-3 tracking-widest uppercase">Progress</span>
      
      <div id="progress-rail" className="w-1.5 h-32 sm:h-36 bg-black/10 rounded-full relative overflow-hidden p-0.5 group">
        <div id="scroll-progress-bar" className="w-full h-0 bg-[#E65D3F] rounded-full transition-all duration-75"></div>
      </div>
      
      <span id="scroll-stage-label" className="text-[10px] sm:text-[11px] font-mono font-bold text-[#141416]/70 mt-2">01</span>
      
      {/* Quick step indicator dots */}
      <div className="flex flex-col gap-1.5 mt-1.5">
        <div className="step-dot w-2 h-2 rounded-full bg-[#E65D3F] transition-all" data-step="0" title="Intro"></div>
        <div className="step-dot w-2 h-2 rounded-full bg-black/20 transition-all" data-step="0.35" title="Welcome"></div>
        <div className="step-dot w-2 h-2 rounded-full bg-black/20 transition-all" data-step="0.65" title="ITZFIZZ"></div>
        <div className="step-dot w-2 h-2 rounded-full bg-black/20 transition-all" data-step="1" title="Celebration"></div>
      </div>
    </div>
  );
}
