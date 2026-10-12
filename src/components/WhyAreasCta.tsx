import { Phone, ArrowRight, MapPin } from "lucide-react";
import { IMAGES, SITE, callHref } from "../config";
import { Eyebrow, Reveal, SafeImage, GoldButton, OutlineButton } from "./shared";

const REASONS = [
  {
    n: "I.",
    title: "A Design That Feels Personal",
    copy: "Your home, outdoor space, and lifestyle should guide the direction of your pool — not a template. The conversation starts with how you actually want to live outside.",
  },
  {
    n: "II.",
    title: "Beauty Meets Everyday Function",
    copy: "A beautiful pool should also make sense for how you plan to relax, entertain, and enjoy your property — morning swims, family afternoons, and quiet evenings alike.",
  },
  {
    n: "III.",
    title: "A Clear Starting Point",
    copy: "An initial conversation helps establish your priorities and clarify what a custom pool project may involve, so you can explore the possibilities with confidence.",
  },
];

export function Why() {
  return (
    <section className="overflow-hidden bg-ivory py-20 sm:py-28 lg:py-32" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">

          {/* Sticky image column */}
          <div className="relative lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="relative overflow-hidden">
                  <SafeImage src={IMAGES.whyMain.src} alt={IMAGES.whyMain.alt} className="aspect-[4/5] w-full object-cover sm:aspect-[16/11] lg:aspect-[4/5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" aria-hidden="true" />
                  <p className="absolute bottom-5 left-5 right-5 font-serif text-[20px] italic leading-snug text-white">
                    “Your vision should lead the design.”
                  </p>
                </div>
                <div className="mt-4 hidden overflow-hidden lg:block">
                  <SafeImage src={IMAGES.whySecondary.src} alt={IMAGES.whySecondary.alt} className="aspect-[16/8] w-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Editorial blocks */}
          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <Eyebrow>Why Glamour</Eyebrow>
              <h2 id="why-heading" className="mt-5 font-serif text-[40px] font-medium leading-[1.05] text-midnight text-balance sm:text-[54px]">
                Your Vision Should Lead <em className="text-teal">the Design.</em>
              </h2>
              <p className="mt-5 max-w-[540px] text-[15.5px] leading-[1.85] text-slate-custom">
                No invented accolades, no pressure. Just a thoughtful, design-led conversation
                about the outdoor space you want to come home to.
              </p>
            </Reveal>

            <div>
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={1}>
                  <article className={`flex gap-6 py-9 sm:gap-10 ${i > 0 ? "border-t border-midnight/10" : "mt-4"}`}>
                    <span className="font-serif text-[26px] font-medium italic leading-none text-gold" aria-hidden="true">{r.n}</span>
                    <div>
                      <h3 className="font-serif text-[27px] font-semibold leading-snug text-midnight sm:text-[30px]">{r.title}</h3>
                      <p className="mt-2.5 max-w-[520px] text-[15px] leading-[1.85] text-slate-custom">{r.copy}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={1}>
              <a href="#designs" className="group inline-flex items-center gap-2.5 text-[12px] font-bold tracking-[0.18em] text-teal uppercase transition-colors hover:text-midnight">
                See the design directions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

const AREAS = [
  { name: "Naples", state: "Florida", copy: "Custom pool possibilities for the homes and outdoor spaces of Naples.", tag: "Gulfshore elegance" },
  { name: "Marco Island", state: "Florida", copy: "Explore pool concepts suited to your property and your vision for island living.", tag: "Island living" },
  { name: "Bonita Springs", state: "Florida", copy: "Consider a custom outdoor space designed to complement your home and lifestyle.", tag: "Relaxed coastal" },
];

export function ServiceAreas() {
  return (
    <section id="areas" className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-28 lg:py-32" aria-labelledby="areas-heading">
      {/* faint aerial backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <SafeImage src={IMAGES.areasBg.src} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <Eyebrow center>Service Areas</Eyebrow>
            <h2 id="areas-heading" className="mt-5 font-serif text-[40px] font-medium leading-[1.05] text-midnight text-balance sm:text-[54px]">
              Proudly Focused on <em className="text-teal">Southwest Florida.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[15.5px] leading-[1.85] text-slate-custom">
              Exploring a new pool for your property? Start a conversation about your
              vision and your location.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3" role="list">
          {AREAS.map((a, i) => (
            <Reveal as="li" key={a.name} delay={(i % 3) as 0 | 1 | 2}>
              <a href="#contact" className="group relative flex h-full flex-col overflow-hidden bg-midnight p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_48px_-20px_rgba(17,37,43,0.5)] sm:p-9" aria-label={`Enquire about a custom pool in ${a.name}, ${a.state}`}>
                <span className="pointer-events-none absolute -right-6 -top-8 font-serif text-[110px] font-semibold italic leading-none text-white/[0.05]" aria-hidden="true">{a.name[0]}</span>
                <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                <span className="mt-6 text-[10px] font-bold tracking-[0.3em] text-gold-light uppercase">{a.tag}</span>
                <span className="mt-2 font-serif text-[34px] font-medium leading-tight text-ivory">
                  {a.name}<span className="block text-[19px] italic text-ivory/60">{a.state}</span>
                </span>
                <span className="mt-4 flex-1 text-[14px] leading-[1.8] text-ivory/65">{a.copy}</span>
                <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white uppercase">
                  Start a conversation
                  <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-8 text-center text-[12.5px] text-slate-custom">
            Located elsewhere in Southwest Florida? <a href="#contact" className="font-bold text-teal underline decoration-gold decoration-2 underline-offset-4 hover:text-midnight">Ask us</a> — locations are confirmed during your initial conversation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-midnight" aria-labelledby="cta-heading">
      <div className="absolute inset-0">
        <SafeImage src={IMAGES.finalCta.src} alt={IMAGES.finalCta.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-midnight/62" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-midnight/30 to-transparent" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="max-w-[680px]">
          <Reveal>
            <Eyebrow light>Your Next Chapter Starts Outside</Eyebrow>
            <h2 id="cta-heading" className="mt-6 font-serif text-[42px] font-medium leading-[1.02] text-white text-balance sm:text-[60px] lg:text-[68px]">
              Imagine What Your Backyard <em className="text-gold-light">Could Become.</em>
            </h2>
            <p className="mt-5 max-w-[520px] text-[16px] leading-[1.8] text-white/80">
              Whether you have a clear vision or are just beginning to explore the
              possibilities, let&apos;s talk about the pool you have in mind.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <GoldButton href={callHref} className="sm:min-w-[280px]">
                <Phone className="h-4 w-4" strokeWidth={2.4} /> Call Glamour Custom Pools
              </GoldButton>
              <OutlineButton href="#contact" className="sm:min-w-[240px]">Start a Conversation</OutlineButton>
            </div>
            <p className="mt-6 text-[11px] font-bold tracking-[0.26em] text-white/55 uppercase">{SITE.serviceAreaLine}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
