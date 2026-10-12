import { ArrowRight } from "lucide-react";
import { SERVICES } from "../config";
import { Eyebrow, Reveal, SafeImage } from "./shared";

export function Services() {
  return (
    <section className="bg-ivory py-20 sm:py-28 lg:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <Eyebrow center>What We Explore Together</Eyebrow>
            <h2 id="services-heading" className="mt-5 font-serif text-[40px] font-medium leading-[1.05] text-midnight text-balance sm:text-[54px]">
              A More Personal Approach to <em className="text-teal">Pool Building.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-[580px] text-[15.5px] leading-[1.85] text-slate-custom">
              Your pool should feel like a natural extension of your home. The starting point
              is understanding your space, your priorities, and what you want your finished
              outdoor environment to feel like.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" role="list">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) as 0 | 1 | 2}>
              <article className="group flex h-full flex-col bg-white shadow-[0_2px_20px_-8px_rgba(17,37,43,0.12)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-20px_rgba(17,37,43,0.3)]">
                <div className="relative overflow-hidden">
                  <SafeImage src={s.src} alt={s.alt} className="aspect-[16/10] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]" />
                  <span className="absolute bottom-3 left-4 font-serif text-[34px] font-medium italic leading-none text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" aria-hidden="true">{s.index}</span>
                  <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-[24px] font-semibold leading-snug text-midnight">{s.title}</h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[1.75] text-slate-custom">{s.copy}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-teal uppercase transition-colors hover:text-midnight">
                    Start a conversation <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-12 text-center">
            <a href="#contact" className="group inline-flex min-h-[54px] items-center gap-3 bg-midnight px-8 text-[12px] font-bold tracking-[0.18em] text-ivory uppercase transition-all duration-300 hover:bg-teal-dark active:scale-[0.98]">
              Tell Us What You Have in Mind
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-[12px] text-slate-custom">Concept copy — final service offering to be confirmed by the owner before launch.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "The Conversation", copy: "We begin by discussing your vision, property, priorities, preferred style, and the experience you want to create." },
  { n: "02", title: "Understanding Your Space", copy: "The next step is to understand the site and the practical considerations that may influence the design and project scope." },
  { n: "03", title: "Planning Your Pool", copy: "Explore a design direction and discuss the features, materials, and details that best fit your goals." },
  { n: "04", title: "Discussing the Next Steps", copy: "Review the proposed scope, budget expectations, timing, and the steps required to move the project forward." },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-midnight py-20 sm:py-28 lg:py-32" aria-labelledby="process-heading">
      {/* subtle texture rings */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-white/[0.05]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-gold/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full border border-white/[0.04]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow light>How It Begins</Eyebrow>
            <h2 id="process-heading" className="mt-5 max-w-[640px] font-serif text-[40px] font-medium leading-[1.05] text-ivory text-balance sm:text-[54px]">
              From First Conversation to Your <em className="text-gold-light">Future Backyard.</em>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-[360px] text-[15.5px] leading-[1.8] text-ivory/60 lg:pb-2 lg:text-right">
              Every great project begins with a clear understanding of what matters to you.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <ol className="relative mt-16 grid gap-0 lg:grid-cols-4 lg:gap-8" role="list">
          <span className="absolute left-[27px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-gold/60 via-white/15 to-transparent lg:left-0 lg:top-[27px] lg:h-px lg:w-full lg:bg-gradient-to-r" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={(i % 3) as 0 | 1 | 2} className="relative flex gap-6 pb-12 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
              <span className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-gold/60 bg-midnight font-serif text-[18px] font-semibold italic text-gold-light">
                {s.n}
              </span>
              <div className="lg:mt-7">
                <h3 className="font-serif text-[25px] font-semibold leading-snug text-ivory">{s.title}</h3>
                <p className="mt-2.5 max-w-[300px] text-[14px] leading-[1.8] text-ivory/60">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-14 border-t border-white/10 pt-6 text-[12px] leading-relaxed text-ivory/40">
            An outline of how a conversation typically unfolds. Final steps, timelines, and deliverables are confirmed by the business for each project.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
