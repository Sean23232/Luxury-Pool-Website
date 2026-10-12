import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, X, Loader2 } from "lucide-react";
import { SITE, isPhoneConfigured } from "../config";
import { Eyebrow, Reveal, Wordmark } from "./shared";
import { cn } from "../utils/cn";

/* ── Contact / Enquiry form ────────────────────────────── */
type Fields = {
  name: string; phone: string; email: string;
  location: string; interest: string; vision: string; contactMethod: string;
};
const INITIAL: Fields = { name: "", phone: "", email: "", location: "", interest: "", vision: "", contactMethod: "Phone Call" };

const inputCls = (error?: string) => cn(
  "w-full border bg-white px-4 py-3.5 text-[15px] text-midnight placeholder:text-slate-custom/60 transition-colors",
  "focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20",
  error ? "border-red-400" : "border-midnight/15 hover:border-midnight/30"
);
const labelCls = "mb-2 block text-[11px] font-bold tracking-[0.18em] text-midnight uppercase";
const errCls = "mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return <p id={id} role="alert" className={errCls}><AlertCircle className="h-3.5 w-3.5 shrink-0" />{msg}</p>;
}

export function Contact() {
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please enter your full name.";
    if (!fields.phone.trim()) next.phone = "Please enter a phone number so we can reach you.";
    else if (fields.phone.replace(/\D/g, "").length < 7) next.phone = "That phone number looks a little short — please check it.";
    if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) next.email = "Please enter a valid email address, or leave this blank.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) {
      document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    setStatus("submitting");
    // Concept mode: no backend is connected (see SITE.formEndpoint).
    // Simulate processing time only — nothing is transmitted or emailed.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-ivory py-20 sm:py-28 lg:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

          {/* Left — invitation */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Let&apos;s Talk About Your Project</Eyebrow>
              <h2 id="contact-heading" className="mt-5 font-serif text-[40px] font-medium leading-[1.05] text-midnight text-balance sm:text-[54px]">
                Tell Us What You&apos;re <em className="text-teal">Imagining.</em>
              </h2>
              <p className="mt-5 max-w-[440px] text-[15.5px] leading-[1.85] text-slate-custom">
                Share a few details about the pool you&apos;re considering, and we can begin
                with a conversation about your goals and next steps.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <ul className="mt-10 space-y-5" role="list">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-midnight text-gold"><Phone className="h-4.5 w-4.5" /></span>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-slate-custom uppercase">Call Us</p>
                    {isPhoneConfigured ? (
                      <a href={SITE.phoneHref!} className="mt-0.5 block text-[16px] font-bold text-midnight hover:text-teal">{SITE.phoneDisplay}</a>
                    ) : (
                      <p className="mt-0.5 text-[15px] font-semibold text-midnight">{SITE.phoneDisplay}
                        <span className="block text-[12.5px] font-medium text-slate-custom">Share your number in the form and the conversation starts there.</span>
                      </p>
                    )}
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-midnight text-gold"><Mail className="h-4.5 w-4.5" /></span>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-slate-custom uppercase">Email</p>
                    <p className="mt-0.5 text-[15px] font-semibold text-midnight">{SITE.emailDisplay}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-midnight text-gold"><MapPin className="h-4.5 w-4.5" /></span>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-slate-custom uppercase">Serving</p>
                    <p className="mt-0.5 text-[15px] font-semibold text-midnight">Naples · Marco Island · Bonita Springs, Florida</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 hidden border-l-2 border-gold pl-5 lg:block">
                <p className="font-serif text-[20px] italic leading-snug text-midnight/80">
                  “Beautifully considered pools, designed around your home — and the way you want to live outdoors.”
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={1} className="lg:col-span-7">
            <div className="bg-white p-6 shadow-[0_24px_60px_-24px_rgba(17,37,43,0.25)] sm:p-9">
              {status === "success" ? (
                <div className="py-8 text-center" role="status">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                    <CheckCircle2 className="h-8 w-8 text-teal" />
                  </span>
                  <h3 className="mt-6 font-serif text-[32px] font-semibold text-midnight">Thank you, {fields.name.split(" ")[0]}.</h3>
                  <p className="mx-auto mt-3 max-w-[460px] text-[15px] leading-[1.8] text-slate-custom">
                    Your details have been noted for this concept demonstration.{" "}
                    <strong className="text-midnight">No enquiry has been sent yet</strong> — live delivery
                    will be enabled when the owner connects a form service or email address.
                  </p>
                  <dl className="mx-auto mt-7 max-w-[420px] space-y-2 border border-midnight/10 bg-ivory p-5 text-left text-[13.5px]">
                    <div className="flex justify-between gap-4"><dt className="font-bold text-slate-custom">Name</dt><dd className="font-semibold text-midnight">{fields.name}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="font-bold text-slate-custom">Phone</dt><dd className="font-semibold text-midnight">{fields.phone}</dd></div>
                    {fields.location && <div className="flex justify-between gap-4"><dt className="font-bold text-slate-custom">Location</dt><dd className="font-semibold text-midnight">{fields.location}</dd></div>}
                    {fields.interest && <div className="flex justify-between gap-4"><dt className="font-bold text-slate-custom">Interested in</dt><dd className="font-semibold text-midnight">{fields.interest}</dd></div>}
                    <div className="flex justify-between gap-4"><dt className="font-bold text-slate-custom">Preferred contact</dt><dd className="font-semibold text-midnight">{fields.contactMethod}</dd></div>
                  </dl>
                  <button type="button" onClick={() => { setFields(INITIAL); setStatus("idle"); }}
                    className="mt-7 text-[12px] font-bold tracking-[0.16em] text-teal uppercase underline decoration-gold decoration-2 underline-offset-4 hover:text-midnight">
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate aria-describedby="form-note">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="f-name" className={labelCls}>Full Name <span className="text-gold" aria-hidden="true">*</span></label>
                      <input id="f-name" name="name" type="text" autoComplete="name" required aria-required="true"
                        aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined}
                        value={fields.name} onChange={set("name")} placeholder="Your full name" className={inputCls(errors.name)} />
                      <FieldError id="e-name" msg={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="f-phone" className={labelCls}>Phone Number <span className="text-gold" aria-hidden="true">*</span></label>
                      <input id="f-phone" name="phone" type="tel" autoComplete="tel" required aria-required="true"
                        aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined}
                        value={fields.phone} onChange={set("phone")} placeholder="(239) 000-0000" className={inputCls(errors.phone)} />
                      <FieldError id="e-phone" msg={errors.phone} />
                    </div>
                    <div>
                      <label htmlFor="f-email" className={labelCls}>Email Address <span className="font-medium normal-case tracking-normal text-slate-custom">(optional)</span></label>
                      <input id="f-email" name="email" type="email" autoComplete="email"
                        aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined}
                        value={fields.email} onChange={set("email")} placeholder="you@example.com" className={inputCls(errors.email)} />
                      <FieldError id="e-email" msg={errors.email} />
                    </div>
                    <div>
                      <label htmlFor="f-location" className={labelCls}>Preferred Location</label>
                      <select id="f-location" name="location" value={fields.location} onChange={set("location")} className={cn(inputCls(), !fields.location && "text-slate-custom/70")}>
                        <option value="">Select a location…</option>
                        <option>Naples</option><option>Marco Island</option><option>Bonita Springs</option><option>Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="f-interest" className={labelCls}>What Are You Interested In?</label>
                      <select id="f-interest" name="interest" value={fields.interest} onChange={set("interest")} className={cn(inputCls(), !fields.interest && "text-slate-custom/70")}>
                        <option value="">Select an option…</option>
                        <option>New Custom Pool</option><option>Luxury Pool Design</option><option>Pool and Outdoor Living</option><option>Not Sure Yet</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="f-vision" className={labelCls}>Tell Us About Your Vision <span className="font-medium normal-case tracking-normal text-slate-custom">(optional)</span></label>
                      <textarea id="f-vision" name="vision" rows={4} value={fields.vision} onChange={set("vision")}
                        placeholder="A quiet morning pool, space for the grandchildren, a view that deserves an infinity edge…" className={cn(inputCls(), "resize-y")} />
                    </div>
                    <fieldset className="sm:col-span-2">
                      <legend className={labelCls}>Preferred Contact Method</legend>
                      <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label="Preferred contact method">
                        {["Phone Call", "Text Message", "Email"].map((m) => (
                          <label key={m} className={cn(
                            "inline-flex min-h-[44px] cursor-pointer items-center px-5 text-[12px] font-bold tracking-[0.08em] uppercase transition-all",
                            fields.contactMethod === m ? "bg-midnight text-ivory" : "border border-midnight/20 text-midnight hover:border-midnight"
                          )}>
                            <input type="radio" name="contactMethod" value={m} checked={fields.contactMethod === m} onChange={set("contactMethod")} className="sr-only" />
                            {m}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <button type="submit" disabled={status === "submitting"}
                    className="mt-7 inline-flex min-h-[56px] w-full items-center justify-center gap-3 bg-gold px-8 text-[12.5px] font-bold tracking-[0.18em] text-midnight uppercase transition-all duration-300 hover:bg-gold-light disabled:cursor-wait disabled:opacity-70 active:scale-[0.99] sm:w-auto sm:min-w-[300px]">
                    {status === "submitting" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Let&apos;s Discuss Your Pool</>}
                  </button>

                  <p id="form-note" className="mt-5 text-[12px] leading-relaxed text-slate-custom">
                    By submitting, you&apos;re asking Glamour Custom Pools to contact you about your enquiry.
                    No marketing consent is assumed. <span className="font-semibold text-midnight">Concept note:</span> this
                    demonstration form does not yet transmit enquiries — live delivery requires a connected
                    form service, which the owner will configure before launch.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ── Footer + info dialogs ─────────────────────────────── */
const INFO_CONTENT: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "This is placeholder policy text for the homepage concept and must be replaced with the owner's approved privacy policy before launch.",
      "In the live website, this page would explain what personal information is collected through the enquiry form (such as your name, phone number, and project details), how it is used to respond to your enquiry, and how to request its deletion.",
      "No information submitted through this concept demonstration is transmitted, stored, or shared.",
    ],
  },
  accessibility: {
    title: "Accessibility",
    body: [
      "Glamour Custom Pools aims to make this website usable for everyone. This concept has been built with semantic structure, keyboard-navigable menus and dialogs, visible focus states, descriptive image text, and support for reduced-motion preferences.",
      "This statement is placeholder text for the concept and should be reviewed and approved by the owner before launch. If you encounter an accessibility barrier on the live site, please contact the business so it can be addressed.",
    ],
  },
};

export function Footer() {
  const [info, setInfo] = useState<keyof typeof INFO_CONTENT | null>(null);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-ivory" aria-label="Footer">
      <div className="mx-auto max-w-[1440px] px-5 pb-28 pt-16 sm:px-8 lg:px-12 lg:pb-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-6 max-w-[340px] font-serif text-[21px] italic leading-snug text-ivory/80">
              Custom pool inspiration for a more beautiful way to experience outdoor living.
            </p>
            <p className="mt-5 max-w-[340px] text-[13px] leading-[1.8] text-ivory/50">
              Bespoke pool design conversations for homeowners in Naples, Marco Island,
              and Bonita Springs, Florida.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase">Explore</p>
            <ul className="mt-5 space-y-3">
              {SITE.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[14.5px] font-medium text-ivory/75 transition-colors hover:text-gold-light">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase">Contact</p>
            <ul className="mt-5 space-y-3.5 text-[14.5px] text-ivory/75">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{SITE.phoneDisplay}</li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{SITE.emailDisplay}</li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />Naples, Marco Island &amp; Bonita Springs, Florida</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              <button type="button" onClick={() => setInfo("privacy")} className="text-[12px] font-bold tracking-[0.14em] text-ivory/60 uppercase transition-colors hover:text-gold-light">Privacy Policy</button>
              <button type="button" onClick={() => setInfo("accessibility")} className="text-[12px] font-bold tracking-[0.14em] text-ivory/60 uppercase transition-colors hover:text-gold-light">Accessibility</button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[12px] text-ivory/45 sm:flex-row">
          <p>© {year} {SITE.businessName}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
            Homepage concept — imagery shown for design inspiration
          </p>
        </div>
      </div>

      {/* Mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-midnight/95 backdrop-blur-md lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <a href="#contact" className="flex min-h-[56px] items-center justify-center gap-2 bg-gold text-[11.5px] font-bold tracking-[0.14em] text-midnight uppercase">
          <Phone className="h-4 w-4" /> Call / Enquire
        </a>
        <a href="#designs" className="flex min-h-[56px] items-center justify-center text-[11.5px] font-bold tracking-[0.14em] text-ivory uppercase">
          View Designs
        </a>
      </div>

      {/* Info dialog */}
      {info && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-midnight/90 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={INFO_CONTENT[info].title} onClick={() => setInfo(null)}>
          <div className="lightbox-anim max-h-[85svh] w-full max-w-xl overflow-y-auto bg-ivory p-7 text-midnight sm:p-9" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-[30px] font-semibold">{INFO_CONTENT[info].title}</h3>
              <button type="button" onClick={() => setInfo(null)} aria-label="Close" autoFocus className="flex h-10 w-10 shrink-0 items-center justify-center border border-midnight/20 transition-colors hover:bg-midnight hover:text-ivory">
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
            <div className="mt-3 h-px w-12 bg-gold" aria-hidden="true" />
            {INFO_CONTENT[info].body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[14.5px] leading-[1.85] text-slate-custom">{p}</p>
            ))}
          </div>
        </div>
      )}
    </footer>
  );
}
