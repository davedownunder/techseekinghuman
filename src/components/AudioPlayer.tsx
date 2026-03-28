"use client";

export default function AudioPlayer() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-[100]">
      <div className="glass-card rounded-2xl p-4 border border-white/10 shadow-2xl flex items-center gap-6">
        <div className="w-12 h-12 rounded-lg bg-[#03a9f4]/20 flex items-center justify-center text-[#8dcdff] shrink-0">
          <span className="material-symbols-outlined">graphic_eq</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-label font-bold text-[#8dcdff] uppercase tracking-widest truncate">
            Now Playing
          </p>
          <h5 className="text-sm font-headline font-bold text-white truncate">
            Tech Seeking Human Podcast
          </h5>
          <div className="mt-2 h-0.5 w-full bg-[#33324b] rounded-full overflow-hidden">
            <div className="h-full bg-[#8dcdff] w-[35%] rounded-full shadow-[0_0_8px_rgba(141,205,255,0.6)]" />
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <button className="material-symbols-outlined opacity-60 hover:opacity-100 hidden sm:block">
            skip_previous
          </button>
          <button className="w-10 h-10 rounded-full bg-[#8dcdff] text-[#111128] flex items-center justify-center">
            <span className="material-symbols-outlined">play_arrow</span>
          </button>
          <button className="material-symbols-outlined opacity-60 hover:opacity-100 hidden sm:block">
            skip_next
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-400">
          <span className="material-symbols-outlined text-xl">volume_up</span>
          <div className="w-20 h-0.5 bg-[#33324b] rounded-full">
            <div className="h-full bg-white/50 w-[70%] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
