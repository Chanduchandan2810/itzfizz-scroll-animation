'use client';

export default function Metrics() {
  return (
    <>
      {/* Top row metrics (Top-Left & Top-Right) */}
      <div className="metric-top-row absolute top-[clamp(18%,26vh,34%)] max-sm:top-[85px] left-0 right-0 flex justify-between pointer-events-none px-[clamp(1rem,3.5vw,3rem)] max-sm:px-3 z-30 max-h-[680px]:top-[22vh]">
        {/* Metric 1: Top Left */}
        <div id="metric-1" className="opacity-0 -translate-x-6 metric-card backdrop-blur-md bg-white/80 border border-black/5 rounded-xl sm:rounded-2xl p-2 sm:p-[clamp(0.6rem,1.4vh,1rem)] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] w-auto max-w-[130px] sm:max-w-[clamp(150px,16vw,205px)] max-h-[800px]:p-[0.65rem_0.85rem] max-h-[800px]:max-w-[170px] max-h-[680px]:p-[0.5rem_0.65rem] max-h-[680px]:max-w-[145px]">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500/70 shrink-0"></span>
            <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-[#141416]/60 uppercase font-medium leading-tight">PERFORMANCE</span>
            <span className="font-mono text-[8px] sm:text-[10px] text-[#141416]/40 hidden sm:inline leading-tight">/</span>
            <span className="font-mono text-[8.5px] sm:text-[10px] tracking-wider text-[#141416]/80 font-semibold uppercase leading-tight">60 FPS TARGET</span>
          </div>
        </div>

        {/* Metric 2: Top Right */}
        <div id="metric-2" className="opacity-0 translate-x-6 metric-card text-right mr-5 sm:mr-10 lg:mr-12 max-sm:mr-9 backdrop-blur-md bg-white/80 border border-black/5 rounded-xl sm:rounded-2xl p-2 sm:p-[clamp(0.6rem,1.4vh,1rem)] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] w-auto max-w-[130px] sm:max-w-[clamp(150px,16vw,205px)] max-h-[800px]:p-[0.65rem_0.85rem] max-h-[800px]:max-w-[170px] max-h-[680px]:p-[0.5rem_0.65rem] max-h-[680px]:max-w-[145px]">
          <div className="flex flex-wrap items-center justify-end gap-x-1.5 gap-y-0.5 sm:gap-2">
            <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-[#141416]/60 uppercase font-medium leading-tight">ANIMATION</span>
            <span className="font-mono text-[8px] sm:text-[10px] text-[#141416]/40 hidden sm:inline leading-tight">/</span>
            <span className="font-mono text-[8.5px] sm:text-[10px] tracking-wider text-[#141416]/80 font-semibold uppercase leading-tight">TRANSFORM-FIRST</span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#E65D3F]/70 shrink-0"></span>
          </div>
        </div>
      </div>

      {/* Bottom row metrics (Bottom-Left & Bottom-Right) */}
      <div className="metric-bottom-row absolute bottom-[clamp(48px,7.5vh,70px)] max-sm:bottom-[75px] left-0 right-0 flex justify-between pointer-events-none px-[clamp(1rem,3.5vw,3rem)] max-sm:px-3 z-30 max-h-[680px]:bottom-[36px]">
        {/* Metric 3: Bottom Left */}
        <div id="metric-3" className="opacity-0 -translate-x-6 metric-card backdrop-blur-md bg-white/80 border border-black/5 rounded-xl sm:rounded-2xl p-2 sm:p-[clamp(0.6rem,1.4vh,1rem)] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] w-auto max-w-[130px] sm:max-w-[clamp(150px,16vw,205px)] max-h-[800px]:p-[0.65rem_0.85rem] max-h-[800px]:max-w-[170px] max-h-[680px]:p-[0.5rem_0.65rem] max-h-[680px]:max-w-[145px]">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#141416]/40 shrink-0"></span>
            <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-[#141416]/60 uppercase font-medium leading-tight">SCROLL</span>
            <span className="font-mono text-[8px] sm:text-[10px] text-[#141416]/40 hidden sm:inline leading-tight">/</span>
            <span className="font-mono text-[8.5px] sm:text-[10px] tracking-wider text-[#141416]/80 font-semibold uppercase leading-tight">SCROLL-LINKED</span>
          </div>
        </div>

        {/* Metric 4: Bottom Right */}
        <div id="metric-4" className="opacity-0 translate-x-6 metric-card text-right mr-5 sm:mr-10 lg:mr-12 max-sm:mr-9 backdrop-blur-md bg-white/80 border border-black/5 rounded-xl sm:rounded-2xl p-2 sm:p-[clamp(0.6rem,1.4vh,1rem)] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] w-auto max-w-[130px] sm:max-w-[clamp(150px,16vw,205px)] max-h-[800px]:p-[0.65rem_0.85rem] max-h-[800px]:max-w-[170px] max-h-[680px]:p-[0.5rem_0.65rem] max-h-[680px]:max-w-[145px]">
          <div className="flex flex-wrap items-center justify-end gap-x-1.5 gap-y-0.5 sm:gap-2">
            <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-[#141416]/60 uppercase font-medium leading-tight">VIEWPORT</span>
            <span className="font-mono text-[8px] sm:text-[10px] text-[#141416]/40 hidden sm:inline leading-tight">/</span>
            <span className="font-mono text-[8.5px] sm:text-[10px] tracking-wider text-[#141416]/80 font-semibold uppercase leading-tight">ADAPTIVE</span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#141416]/40 shrink-0"></span>
          </div>
        </div>
      </div>
    </>
  );
}
