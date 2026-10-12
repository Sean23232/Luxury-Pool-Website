/**
 * ─────────────────────────────────────────────────────────────
 *  GLAMOUR CUSTOM POOLS — CENTRAL SITE CONFIGURATION
 *  Edit business details here only. They update everywhere.
 * ─────────────────────────────────────────────────────────────
 */
export const SITE = {
  businessName: "Glamour Custom Pools",
  wordmarkTop: "GLAMOUR",
  wordmarkBottom: "CUSTOM POOLS",

  // ⚠ OWNER TO CONFIRM — no real number has been supplied yet.
  // When verified, set e.g. phoneDisplay: "(239) 555-0100", phoneHref: "tel:+12395550100"
  // Until then every "call" action gracefully routes to the enquiry form.
  phoneDisplay: "Phone number — to be confirmed by owner",
  phoneHref: null as string | null,

  // ⚠ OWNER TO CONFIRM
  emailDisplay: "Email — to be confirmed by owner",
  emailHref: null as string | null,

  serviceAreas: ["Naples", "Marco Island", "Bonita Springs"] as const,
  serviceAreaLine: "NAPLES · MARCO ISLAND · BONITA SPRINGS",

  // Form endpoint — leave null for concept mode (client-side demo only).
  // Connect a form service / backend here before launch.
  formEndpoint: null as string | null,

  nav: [
    { label: "Home", href: "#home" },
    { label: "Our Approach", href: "#approach" },
    { label: "Pool Designs", href: "#designs" },
    { label: "Service Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ],
};

/** Where a "call" CTA should point right now. */
export const callHref = SITE.phoneHref ?? "#contact";
export const isPhoneConfigured = SITE.phoneHref !== null;

export const IMAGES = {
  hero: {
    src: "https://images.pexels.com/photos/31817160/pexels-photo-31817160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1920",
    alt: "Luxury ocean-view villa with an infinity-edge pool glowing at sunset",
  },
  intro: {
    src: "https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300",
    alt: "Modern residence with a spacious custom pool and landscaped garden in bright Florida-style light",
  },
  whyMain: {
    src: "https://images.pexels.com/photos/36394726/pexels-photo-36394726.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=820",
    alt: "Contemporary villa pool at twilight with warm interior light spilling onto the terrace",
  },
  whySecondary: {
    src: "https://images.pexels.com/photos/30781823/pexels-photo-30781823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
    alt: "Elegant modern villa and pool photographed at twilight",
  },
  finalCta: {
    src: "https://images.pexels.com/photos/20975727/pexels-photo-20975727.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1920",
    alt: "Infinity pool with sun loungers overlooking a warm sunset landscape",
  },
  areasBg: {
    src: "https://images.pexels.com/photos/29702273/pexels-photo-29702273.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1600",
    alt: "Aerial view of coastal villas with pools beside turquoise water",
  },
  fallback:
    "https://images.pexels.com/photos/28054849/pexels-photo-28054849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
};

export type Concept = {
  id: string;
  label: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  span: string;
};

export const CONCEPTS: Concept[] = [
  {
    id: "modern-infinity",
    label: "MODERN INFINITY",
    title: "The Modern Infinity",
    description: "Clean lines, uninterrupted views, and a beautifully understated finish.",
    src: "https://images.pexels.com/photos/19075385/pexels-photo-19075385.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Infinity-edge pool appearing to merge with the sea beyond a luxury villa",
    span: "lg:col-span-7 aspect-[16/10]",
  },
  {
    id: "private-resort",
    label: "PRIVATE RESORT",
    title: "The Resort Escape",
    description: "A relaxed, resort-inspired setting designed for everyday enjoyment.",
    src: "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    alt: "Tropical pool framed by palm trees and a shaded gazebo in clear daylight",
    span: "lg:col-span-5 aspect-[16/10] lg:aspect-auto",
  },
  {
    id: "timeless-elegance",
    label: "TIMELESS ELEGANCE",
    title: "The Contemporary Classic",
    description: "A refined design that brings enduring character to your outdoor space.",
    src: "https://images.pexels.com/photos/8143671/pexels-photo-8143671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=1050",
    alt: "Balanced geometric pool with pale stone surround and manicured garden",
    span: "lg:col-span-5 aspect-[16/11]",
  },
  {
    id: "family-living",
    label: "FAMILY LIVING",
    title: "The Family Retreat",
    description: "Room to relax, reconnect, and make the most of life at home.",
    src: "https://images.pexels.com/photos/8134750/pexels-photo-8134750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=1150",
    alt: "Spacious residential pool with generous lawn and outdoor living space under a blue sky",
    span: "lg:col-span-7 aspect-[16/11]",
  },
  {
    id: "tropical-modern",
    label: "TROPICAL MODERN",
    title: "The Tropical Modern",
    description: "Natural surroundings and contemporary design in perfect balance.",
    src: "https://images.pexels.com/photos/3011575/pexels-photo-3011575.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    alt: "Sleek modern pool lined with palm trees and contemporary architecture",
    span: "lg:col-span-5 aspect-[16/10] lg:aspect-auto",
  },
  {
    id: "evening-oasis",
    label: "EVENING OASIS",
    title: "The Evening Oasis",
    description: "A striking outdoor atmosphere as the Florida evening settles in.",
    src: "https://images.pexels.com/photos/7974837/pexels-photo-7974837.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Pool illuminated at night beneath palm trees with warm reflections on the water",
    span: "lg:col-span-7 aspect-[16/10]",
  },
];

export const SERVICES = [
  {
    title: "Custom Pool Construction",
    copy: "Explore a pool designed around the character of your property, your preferred style, and the way you plan to use your outdoor space.",
    src: "https://images.pexels.com/photos/8134748/pexels-photo-8134748.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=1000",
    alt: "Contemporary home with a newly built pool and green lawn under a clear sky",
    index: "01",
  },
  {
    title: "Luxury Pool Design",
    copy: "Discover design directions that balance visual appeal, functionality, and the overall look of your home.",
    src: "https://images.pexels.com/photos/7546708/pexels-photo-7546708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=1000",
    alt: "Elegant modern house with a tranquil pool and lush surroundings",
    index: "02",
  },
  {
    title: "Outdoor Living Integration",
    copy: "Consider how your pool, surrounding deck, landscaping, and outdoor entertaining areas can work together as one cohesive space.",
    src: "https://images.pexels.com/photos/36676879/pexels-photo-36676879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=1000",
    alt: "Modern villa at sunset with outdoor seating arranged around the pool",
    index: "03",
  },
  {
    title: "Personalised Project Consultation",
    copy: "Start with a conversation about your ideas, property, preferences, and the next steps toward a custom pool.",
    src: "https://images.pexels.com/photos/24805051/pexels-photo-24805051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=1000",
    alt: "Tranquil evening terrace beside a modern villa pool",
    index: "04",
  },
];
