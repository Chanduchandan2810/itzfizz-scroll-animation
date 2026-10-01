'use client';

export default function HeroTypography() {
  return (
    <div id="center-stage-container" className="absolute left-0 right-0 top-[clamp(14%,18vh,22%)] flex flex-col items-center justify-start pointer-events-none z-20 px-4 max-h-[800px]:top-[clamp(13%,16vh,20%)] max-h-[680px]:top-[13vh]">
      {/* Pre-title kicker badge */}
      <div id="kicker-badge" className="mb-3 px-3 py-1 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm flex items-center gap-2 select-none opacity-0 translate-y-4 max-h-[680px]:py-[0.15rem] max-h-[680px]:px-[0.6rem] max-h-[680px]:mb-[0.35rem]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E65D3F]"></span>
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#141416]/70 max-h-[680px]:text-[9.5px]">A New Chapter in Creative Web</span>
      </div>

      {/* WORD 1: W E L C O M E */}
      <div id="word-welcome" className="flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3.5 select-none mb-[clamp(0.2rem,0.8vh,0.75rem)] max-h-[680px]:mb-[0.2rem]">
        {['W', 'E', 'L', 'C', 'O', 'M', 'E'].map((letter, i) => (
          <span
            key={`welcome-${i}`}
            className="letter-welcome inline-block font-extrabold text-[#141416] opacity-0 select-none text-[clamp(1.75rem,min(4.8vw,6.5vh),3.75rem)] max-sm:text-[clamp(1.15rem,6vw,1.5rem)] tracking-[clamp(0.15em,0.4vw,0.35em)] max-h-[800px]:text-[clamp(1.5rem,5vh,2.5rem)] max-h-[800px]:tracking-[0.18em] max-h-[680px]:text-[clamp(1.25rem,4.5vh,2rem)] max-h-[680px]:tracking-[0.15em]"
            style={{ transform: 'translateY(35px) scale(0.85)' }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* WORD 2: I T Z F I Z Z */}
      <div id="word-itzfizz" className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 select-none mb-[clamp(0.4rem,1.2vh,1rem)] max-h-[680px]:mb-[0.25rem]">
        {['I', 'T', 'Z', 'F', 'I', 'Z', 'Z'].map((letter, i) => {
          const isAccent = i === 3 || i === 4;
          return (
            <span
              key={`itzfizz-${i}`}
              className={`letter-itzfizz inline-block font-black opacity-0 select-none text-[clamp(2.5rem,min(8vw,11vh),6.5rem)] max-sm:text-[clamp(2rem,10vw,2.5rem)] tracking-[clamp(0.08em,0.3vw,0.22em)] max-sm:tracking-[0.05em] max-h-[800px]:text-[clamp(2.2rem,8.5vh,4.2rem)] max-h-[800px]:tracking-[0.12em] max-h-[680px]:text-[clamp(1.8rem,7.5vh,3.2rem)] max-h-[680px]:tracking-[0.1em] ${isAccent ? 'text-[#E65D3F]' : 'text-[#141416]'}`}
              style={{ transform: 'translateY(40px) scale(0.8)' }}
            >
              {letter}
            </span>
          );
        })}
      </div>

      {/* Subtitle narrative */}
      <p id="hero-subtext" className="opacity-0 text-center font-medium tracking-wide text-[#141416]/70 text-[clamp(0.75rem,min(1.2vw,1.8vh),1.05rem)] leading-tight max-w-[min(90vw,520px)] mt-[clamp(0.25rem,0.8vh,0.75rem)] max-h-[800px]:text-[clamp(0.72rem,1.6vh,0.92rem)] max-h-[800px]:max-w-[440px] max-h-[800px]:mt-[0.35rem] max-h-[680px]:text-[0.72rem] max-h-[680px]:mt-[0.2rem] max-h-[680px]:max-w-[380px]">
        Where creative engineering meets emotional storytelling.<br />Welcome to our universe.
      </p>
    </div>
  );
}
