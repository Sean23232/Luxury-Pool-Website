import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { SITE, callHref, isPhoneConfigured } from "../config";
import { Wordmark } from "./shared";
import { cn } from "../utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open ]);

  const solid = scrolled || open;

  return (
    <>
      <a href="#contact" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-gold focus:px-4 focus:py-2 focus:text-midnight text-xs font-bold">
        Skip to enquiry form
      </a>

      <header className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-ivory/95 shadow-[0_1px_0_rgba(17,37,43,0.08),0_12px_32px_-16px_rgba(17,37,43,0.25)] backdrop-blur-md" : "bg-gradient-to-b from-midnight/50 to-transparent"
      )}>
        {/* Concept notice */}
        <div className={cn("hidden items-center justify-center gap-2 bg-midnight px-4 py-1.5 text-center lg:flex", solid && "hidden")}>
          <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
          <p className="text-[10px] font-semibold tracking-[0.22em] text-ivory/70 uppercase">
            Homepage concept for owner review · Contact details to be confirmed
          </p>
        </div>

        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Wordmark dark={solid} />

          <nav aria-label="Primary" className="hidden items-center gap-8 xl:gap-10 lg:flex">
            {SITE.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative py-2 text-[11.5px] font-bold tracking-[0.2em] uppercase transition-colors",
                  solid ? "text-midnight/80 hover:text-midnight" : "text-white/85 hover:text-white"
                )}
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={callHref}
              className={cn(
                "hidden min-h-[46px] items-center gap-2.5 px-5 text-[11px] font-bold tracking-[0.16em] uppercase transition-all duration-300 active:scale-[0.98] sm:inline-flex",
                solid
                  ? "bg-midnight text-ivory hover:bg-teal-dark"
                  : "bg-gold text-midnight hover:bg-gold-light"
              )}
              aria-label={isPhoneConfigured ? `Call Glamour Custom Pools at ${SITE.phoneDisplay}` : "Call to discuss your pool — go to enquiry form"}
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
              <span className="hidden xl:inline">Call to Discuss Your Pool</span>
              <span className="xl:hidden">Call Us</span>
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center transition-colors lg:hidden",
                solid ? "text-midnight hover:bg-midnight/5" : "text-white hover:bg-white/10"
              )}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="menu-anim fixed inset-0 z-40 flex flex-col bg-midnight lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="h-[72px] shrink-0" />
          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8">
            <p className="mb-6 text-[10px] font-bold tracking-[0.34em] text-gold uppercase">Menu</p>
            <ul className="divide-y divide-white/10">
              {SITE.nav.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-4 text-white"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[11px] font-bold text-gold">0{i + 1}</span>
                      <span className="font-serif text-[30px] font-medium leading-none">{item.label}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition-all group-hover:text-gold" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={callHref}
              onClick={() => setOpen(false)}
              className="mt-9 inline-flex min-h-[56px] items-center justify-center gap-3 bg-gold px-6 text-[12px] font-bold tracking-[0.18em] text-midnight uppercase transition-colors hover:bg-gold-light"
            >
              <Phone className="h-4 w-4" /> Call to Discuss Your Pool
            </a>
            <p className="mt-4 text-center text-[11px] leading-relaxed text-white/50">
              {isPhoneConfigured ? SITE.phoneDisplay : "Tap above to share your details — we'll continue the conversation from there."}
              <br />{SITE.serviceAreaLine}
            </p>
            <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="sr-only">Close menu</button>
          </nav>
          <p className="px-8 pb-8 text-center text-[10px] tracking-[0.28em] text-white/35 uppercase">Glamour Custom Pools · Southwest Florida</p>
        </div>
      )}
    </>
  );
}
