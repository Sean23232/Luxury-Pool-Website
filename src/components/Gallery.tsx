import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand, Phone } from "lucide-react";
import { CONCEPTS, callHref, type Concept } from "../config";
import { Eyebrow, Reveal, SafeImage } from "./shared";
import { cn } from "../utils/cn";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setActive((cur) => (cur === null ? cur : (cur + dir + CONCEPTS.length) % CONCEPTS.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active, close, step]);

  const concept: Concept | null = active !== null ? CONCEPTS[active] : null;

  return (
    <section id="designs" className="scroll-mt-20 bg-white py-20 sm:py-28 lg:py-32" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Pool Design Inspiration</Eyebrow>
            <h2 id="gallery-heading" className="mt-5 max-w-[560px] font-serif text-[40px] font-medium leading-[1.05] text-midnight text-balance sm:text-[54px]">
              Find Your Kind of <em className="text-teal">Extraordinary.</em>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-[400px] text-[15.5px] leading-[1.8] text-slate-custom md:pb-2 md:text-right">
              Every property has its own character. Explore a few design directions to
              inspire what your own outdoor space could become.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <p className="mt-6 inline-flex items-center gap-2 border border-gold/60 bg-ivory px-3.5 py-2 text-[10.5px] font-bold tracking-[0.16em] text-teal-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            Design inspiration gallery — concept imagery, not completed client projects
          </p>
        </Reveal>

        {/* Editorial grid */}
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5" role="list">
          {CONCEPTS.map((c, i) => (
            <Reveal as="li" key={c.id} delay={(i % 2) as 0 | 1} className={cn("sm:col-span-1", c.span)}>
              <button
                type="button"
                onClick={(e) => { triggerRef.current = e.currentTarget; setActive(i); }}
                className="group relative block h-full w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-gold"
                aria-haspopup="dialog"
                aria-label={`View ${c.title} — ${c.description}`}
              >
                <SafeImage
                  src={c.src}
                  alt={c.alt}
                  className="h-full min-h-[280px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100" aria-hidden="true">
                  <Expand className="h-4 w-4" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-gold-light">{c.label}</span>
                  <span className="mt-1.5 block font-serif text-[26px] font-medium leading-tight text-white">{c.title}</span>
                  <span className="mt-1 block max-w-[420px] text-[13.5px] leading-relaxed text-white/75 opacity-0 transition-all duration-500 group-hover:opacity-100 lg:translate-y-1 lg:group-hover:translate-y-0 max-lg:opacity-100">
                    {c.description}
                  </span>
                  <span className="mt-3 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-8 text-center text-[13px] text-slate-custom">
            Imagery shown for design inspiration. Your pool would be designed around your own property and preferences.{" "}
            <a href="#contact" className="font-bold text-teal underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-midnight">
              Tell us which direction you love →
            </a>
          </p>
        </Reveal>
      </div>

      {/* ── Lightbox ─────────────────────────────────── */}
      {concept && active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-midnight/95 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${concept.title} — design concept`}
          onClick={close}
        >
          <div className="lightbox-anim relative max-h-[92svh] w-full max-w-5xl overflow-y-auto bg-midnight shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <SafeImage src={concept.src} alt={concept.alt} className="aspect-[16/10] w-full object-cover sm:aspect-[16/8]" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" aria-hidden="true" />

              <button ref={closeRef} type="button" onClick={close} aria-label="Close design view"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center bg-midnight/70 text-white backdrop-blur-md transition-colors hover:bg-gold hover:text-midnight">
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Previous concept"
                  className="flex h-11 w-11 items-center justify-center bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-gold hover:text-midnight">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="bg-midnight/60 px-3 py-2 text-[11px] font-bold tracking-[0.2em] text-white backdrop-blur-md" aria-live="polite">
                  {active + 1} / {CONCEPTS.length}
                </span>
                <button type="button" onClick={() => step(1)} aria-label="Next concept"
                  className="flex h-11 w-11 items-center justify-center bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-gold hover:text-midnight">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
              <div>
                <p className="text-[10px] font-bold tracking-[0.32em] text-gold-light">{concept.label} · DESIGN INSPIRATION</p>
                <h3 className="mt-2 font-serif text-[32px] font-medium leading-tight text-white sm:text-[38px]">{concept.title}</h3>
                <p className="mt-2 max-w-[480px] text-[15px] leading-[1.75] text-white/70">{concept.description} Every Glamour concept begins with your property, your home&apos;s character, and how you want to live outdoors.</p>
              </div>
              <a href={callHref} onClick={close}
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2.5 bg-gold px-6 text-[11.5px] font-bold tracking-[0.16em] text-midnight uppercase transition-colors hover:bg-gold-light">
                <Phone className="h-4 w-4" /> Discuss This Style
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
