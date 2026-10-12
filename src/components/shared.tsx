import { useEffect, useRef, useState, type ReactNode, type ImgHTMLAttributes } from "react";
import { IMAGES, SITE } from "../config";
import { cn } from "../utils/cn";

/* ── Scroll reveal wrapper ─────────────────────────────── */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  as?: "div" | "section" | "article" | "li" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("is-visible"); obs.disconnect(); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const delayClass = delay === 1 ? "reveal-delay-1" : delay === 2 ? "reveal-delay-2" : delay === 3 ? "reveal-delay-3" : "";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return <Comp ref={ref} className={cn("reveal", delayClass, className)}>{children}</Comp>;
}

/* ── Image with graceful fallback ──────────────────────── */
export function SafeImage({ src, alt, className, eager = false, ...rest }: { src: string; alt: string; eager?: boolean } & ImgHTMLAttributes<HTMLImageElement>) {
  const [current, setCurrent] = useState(src);
  useEffect(() => setCurrent(src), [src]);
  return (
    <img
      src={current}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => { if (current !== IMAGES.fallback) setCurrent(IMAGES.fallback); }}
      className={className}
      {...rest}
    />
  );
}

/* ── Wordmark ──────────────────────────────────────────── */
export function Wordmark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <a href="#home" aria-label="Glamour Custom Pools — back to top" className="group inline-flex flex-col leading-none">
      <span className={cn(
        "font-serif font-medium tracking-[0.28em] transition-colors",
        compact ? "text-[19px]" : "text-[22px] sm:text-[24px]",
        dark ? "text-midnight" : "text-white"
      )}>
        {SITE.wordmarkTop}
      </span>
      <span className={cn(
        "mt-[5px] flex items-center gap-2 text-[8.5px] font-bold tracking-[0.42em]",
        dark ? "text-teal" : "text-gold-light"
      )}>
        <span className={cn("h-px flex-1", dark ? "bg-gold" : "bg-gold/70")} aria-hidden="true" />
        {SITE.wordmarkBottom}
        <span className={cn("h-px flex-1", dark ? "bg-gold" : "bg-gold/70")} aria-hidden="true" />
      </span>
    </a>
  );
}

/* ── Eyebrow label ─────────────────────────────────────── */
export function Eyebrow({ children, light = false, center = false }: { children: ReactNode; light?: boolean; center?: boolean }) {
  return (
    <p className={cn("flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] uppercase", center && "justify-center", light ? "text-gold-light" : "text-teal")}>
      <span className="h-px w-10 bg-gold" aria-hidden="true" />
      {children}
      {center && <span className="h-px w-10 bg-gold" aria-hidden="true" />}
    </p>
  );
}

/* ── Buttons ───────────────────────────────────────────── */
const btnBase =
  "inline-flex min-h-[52px] items-center justify-center gap-2.5 px-7 text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.98]";

export function GoldButton({ href, children, className, onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <a href={href} onClick={onClick} className={cn(btnBase, "bg-gold text-midnight hover:bg-gold-light hover:shadow-[0_12px_32px_-10px_rgba(197,165,116,0.7)] focus-visible:outline-gold", className)}>
      {children}
    </a>
  );
}
export function OutlineButton({ href, children, className, dark = false, onClick }: { href: string; children: ReactNode; className?: string; dark?: boolean; onClick?: () => void }) {
  return (
    <a href={href} onClick={onClick} className={cn(
      btnBase,
      dark
        ? "border border-midnight/30 text-midnight hover:border-midnight hover:bg-midnight hover:text-ivory focus-visible:outline-midnight"
        : "border border-white/50 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-midnight focus-visible:outline-white",
      className
    )}>
      {children}
    </a>
  );
}
