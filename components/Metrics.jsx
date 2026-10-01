'use client';

export default function Metrics() {
  return (
    <>
      {/* Top row metrics (Top-Left & Top-Right) */}
      <div className="metric-top-row absolute top-[clamp(18%,26vh,34%)] left-0 right-0 flex justify-between pointer-events-none px-[clamp(1rem,3.5vw,3rem)] z-30 max-h-[680px]:top-[22vh]">
        {/* Metric 1: Top Left */}
        <div id="metric-1" className="opacity-0 -translate-x-6 metric-card backdrop-blur-md bg-white/80 border border-black/5 rounded-2xl p-[clamp(0.6rem,1.4vh,1rem)] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] max-w-[clamp(150px,16vw,205px)] max-h-[800px]:p-[0.65rem_0.85rem] max-h-[800px]:max-w-[170px] max-h-[680px]:p-[0.5rem_0.65rem] max-h-[680px]:max-w-[145px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70"></span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#141416]/60 uppercase font-medium">PERFORMANCE</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#141416]/40">/</span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#141416]/80 font-semibold uppercase">60 FPS TARGET</span>
          </div>
        </div>

        {/* Metric 2: Top Right */}
        <div id="metric-2" className="opacity-0 translate-x-6 metric-card text-right mr-7 sm:mr-10 lg:mr-12 backdrop-blur-md bg-white/80 border border-black/5 rounded-2xl p-[clamp(0.6rem,1.4vh,1rem)] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] max-w-[clamp(150px,16vw,205px)] max-h-[800px]:p-[0.65rem_0.85rem] max-h-[800px]:max-w-[170px] max-h-[680px]:p-[0.5rem_0.65rem] max-h-[680px]:max-w-[145px]">
          <div className="flex items-center justify-end gap-2">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#141416]/60 uppercase font-medium">ANIMATION</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#141416]/40">/</span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#141416]/80 font-semibold uppercase">TRANSFORM-FIRST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E65D3F]/70"></span>
          </div>
        </div>
      </div>

      {/* Bottom row metrics (Bottom-Left & Bottom-Right) */}
      <div className="metric-bottom-row absolute bottom-[clamp(48px,7.5vh,70px)] left-0 right-0 flex justify-between pointer-events-none px-[clamp(1rem,3.5vw,3rem)] z-30 max-h-[680px]:bottom-[36px]">
        {/* Metric 3: Bottom Left */}
        <div id="metric-3" className="opacity-0 -translate-x-6 metric-card backdrop-blur-md bg-white/80 border border-black/5 rounded-2xl p-[clamp(0.6rem,1.4vh,1rem)] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] max-w-[clamp(150px,16vw,205px)] max-h-[800px]:p-[0.65rem_0.85rem] max-h-[800px]:max-w-[170px] max-h-[680px]:p-[0.5rem_0.65rem] max-h-[680px]:max-w-[145px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#141416]/40"></span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#141416]/60 uppercase font-medium">SCROLL</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#141416]/40">/</span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#141416]/80 font-semibold uppercase">SCROLL-LINKED</span>
          </div>
        </div>

        {/* Metric 4: Bottom Right */}
        <div id="metric-4" className="opacity-0 translate-x-6 metric-card text-right mr-7 sm:mr-10 lg:mr-12 backdrop-blur-md bg-white/80 border border-black/5 rounded-2xl p-[clamp(0.6rem,1.4vh,1rem)] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] max-w-[clamp(150px,16vw,205px)] max-h-[800px]:p-[0.65rem_0.85rem] max-h-[800px]:max-w-[170px] max-h-[680px]:p-[0.5rem_0.65rem] max-h-[680px]:max-w-[145px]">
          <div className="flex items-center justify-end gap-2">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#141416]/60 uppercase font-medium">VIEWPORT</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#141416]/40">/</span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#141416]/80 font-semibold uppercase">ADAPTIVE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#141416]/40"></span>
          </div>
        </div>
      </div>
    </>
  );
}
