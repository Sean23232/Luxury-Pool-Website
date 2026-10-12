import { Phone, ChevronDown, MapPin } from "lucide-react";
import { IMAGES, SITE, callHref } from "../config";
import { SafeImage, GoldButton, OutlineButton } from "./shared";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-midnight lg:items-center" aria-label="Introduction">
      {/* Image */}
      <div className="absolute inset-0">
        <SafeImage
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          eager
          className="hero-img-anim h-full w-full object-cover object-[68%_center] sm:object-center"
        />
        {/* Cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/85 via-midnight/45 to-midnight/10" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-midnight/30" aria-hidden="true" />
      </div>

      {/* Vertical location rail — desktop */}
      <div className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 xl:block" aria-hidden="true">
        <p className="flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] text-white/60 uppercase [writing-mode:vertical-rl]">
          {SITE.serviceAreaLine}
          <span className="h-16 w-px bg-gold/70" />
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-40 sm:px-8 lg:px-12 lg:py-36">
        <div className="max-w-[760px]">
          <p className="hero-anim flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] text-gold-light uppercase">
            <span className="h-px w-12 bg-gold" aria-hidden="true" />
            Bespoke Pool Design &amp; Construction
          </p>

          <h1 className="hero-anim hero-anim-1 mt-6 font-serif text-[52px] font-medium leading-[0.95] text-white text-balance sm:text-[72px] lg:text-[92px]">
            Your Backyard,
            <span className="block italic text-gold-light">Reimagined.</span>
          </h1>

          <p className="hero-anim hero-anim-2 mt-5 font-serif text-[24px] italic leading-snug text-white/90 sm:text-[28px]">
            A new standard of outdoor living.
          </p>

          <p className="hero-anim hero-anim-2 mt-4 max-w-[520px] text-[16px] leading-[1.75] text-white/75">
            Beautifully considered custom pools, designed around your home, your lifestyle,
            and the way you want to live outdoors.
          </p>

          <div className="hero-anim hero-anim-3 mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <GoldButton href={callHref} className="sm:min-w-[280px]">
              <Phone className="h-4 w-4" strokeWidth={2.4} />
              Let&apos;s Talk About Your Pool
            </GoldButton>
            <OutlineButton href="#designs" className="sm:min-w-[240px]">
              Explore the Designs
            </OutlineButton>
          </div>

          <p className="hero-anim hero-anim-4 mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-bold tracking-[0.28em] text-white/65 uppercase">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            Naples <span className="text-gold" aria-hidden="true">·</span> Marco Island <span className="text-gold" aria-hidden="true">·</span> Bonita Springs
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/15 md:block" aria-hidden="true">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4 lg:px-12">
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/55 uppercase">Design inspiration for Southwest Florida homes</p>
          <a href="#approach" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-white/70 uppercase transition-colors hover:text-gold-light" tabIndex={-1}>
            Scroll to explore <ChevronDown className="scroll-pulse h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
