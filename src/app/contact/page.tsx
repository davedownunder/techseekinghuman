import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tech Seeking Human.",
};

export default function ContactPage() {
  return (
    <div className="pb-24 px-8 max-w-3xl mx-auto pt-8">
      <h1 className="font-headline text-5xl font-bold text-white mb-4 tracking-tight">
        Get in <span className="text-[#8dcdff] italic">Touch</span>
      </h1>
      <div className="w-20 h-1 bg-[#8dcdff] rounded-full mb-12" />

      <div className="glass-card rounded-3xl p-8 md:p-12 border border-[#3e4851]/15">
        <p className="text-[#bec8d2] mb-8 text-lg">
          Want to be a guest on the show? Have a question or collaboration idea?
          Drop a message below.
        </p>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-label font-bold text-[#8dcdff] uppercase tracking-widest mb-2">Name</label>
            <input type="text" id="name" className="w-full bg-[#33324b] border-none rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-[#8dcdff]/50 placeholder:text-slate-500" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-label font-bold text-[#8dcdff] uppercase tracking-widest mb-2">Email</label>
            <input type="email" id="email" className="w-full bg-[#33324b] border-none rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-[#8dcdff]/50 placeholder:text-slate-500" placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-label font-bold text-[#8dcdff] uppercase tracking-widest mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full bg-[#33324b] border-none rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-[#8dcdff]/50 placeholder:text-slate-500" placeholder="What's on your mind?" />
          </div>
          <button className="bg-gradient-to-r from-[#8dcdff] to-[#03a9f4] text-[#00344f] px-8 py-4 rounded-full font-headline font-bold transition-all hover:scale-105">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
