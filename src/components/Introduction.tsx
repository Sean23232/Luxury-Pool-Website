import { ArrowRight } from "lucide-react";
import { IMAGES } from "../config";
import { Eyebrow, Reveal, SafeImage } from "./shared";

export default function Introduction() {
  return (
    <section id="approach" className="scroll-mt-20 overflow-hidden bg-ivory py-20 sm:py-28 lg:py-36" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Image side */}
          <Reveal className="relative lg:col-span-7">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/50 lg:block" aria-hidden="true" />
              <div className="relative overflow-hidden">
                <SafeImage
                  src={IMAGES.intro.src}
                  alt={IMAGES.intro.alt}
                  className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
                />
              </div>
              <figure className="absolute -bottom-6 left-5 bg-midnight px-6 py-5 shadow-2xl sm:left-8">
                <blockquote className="font-serif text-[19px] italic leading-snug text-ivory">
                  “An outdoor space designed<br className="hidden sm:block" /> around you.”
                </blockquote>
                <figcaption className="mt-2 text-[10px] font-bold tracking-[0.28em] text-gold uppercase">The Glamour Approach</figcaption>
              </figure>
            </div>
          </Reveal>

          {/* Copy side */}
          <div className="pt-8 lg:col-span-5 lg:pl-10 lg:pt-0">
            <Reveal>
              <Eyebrow>More Than a Swimming Pool</Eyebrow>
              <h2 id="intro-heading" className="mt-5 font-serif text-[40px] font-medium leading-[1.05] text-midnight text-balance sm:text-[52px]">
                Designed for the Way You Want to <em className="text-teal">Live.</em>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-6 h-px w-16 bg-gold" aria-hidden="true" />
              <p className="mt-6 text-[16px] leading-[1.85] text-slate-custom">
                A thoughtfully designed pool can transform the way you experience your home.
                From peaceful mornings beside the water to afternoons spent with family and
                evenings entertaining outdoors, the right design brings your entire outdoor
                space together.
              </p>
              <p className="mt-4 text-[16px] leading-[1.85] text-slate-custom">
                Glamour Custom Pools is focused on creating custom pool concepts that
                complement your property, reflect your preferences, and bring your vision
                for outdoor living to life.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <a
                href="#contact"
                className="group mt-8 inline-flex min-h-[52px] items-center gap-3 border border-midnight px-7 text-[12px] font-bold tracking-[0.18em] text-midnight uppercase transition-all duration-300 hover:bg-midnight hover:text-ivory active:scale-[0.98]"
              >
                Discuss Your Vision
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Mini editorial stats — qualitative, no invented figures */}
              <dl className="mt-10 grid grid-cols-3 divide-x divide-midnight/10 border-y border-midnight/10 py-5">
                {[
                  ["Bespoke", "Every concept"],
                  ["Personal", "Design-led"],
                  ["Local", "SW Florida"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="px-4 first:pl-0">
                    <dt className="font-serif text-[19px] font-semibold text-midnight">{dt}</dt>
                    <dd className="mt-0.5 text-[10px] font-bold tracking-[0.18em] text-slate-custom uppercase">{dd}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
