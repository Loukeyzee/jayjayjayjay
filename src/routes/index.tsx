import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroAsset from "@/assets/hero.png.asset.json";
const heroImg = heroAsset.url;
import ctaImg from "@/assets/cta.jpg";
import resultExterior1Asset from "@/assets/results/result-exterior-1.png.asset.json";
import resultExterior2Asset from "@/assets/results/result-exterior-2.png.asset.json";
import resultExterior3Asset from "@/assets/results/result-exterior-3.png.asset.json";
import resultExterior4Asset from "@/assets/results/result-exterior-4.png.asset.json";
import resultExterior5Asset from "@/assets/results/result-exterior-5.png.asset.json";
import resultInterior1Asset from "@/assets/results/result-interior-1.png.asset.json";
import resultInterior2Asset from "@/assets/results/result-interior-2.png.asset.json";
import resultInterior3Asset from "@/assets/results/result-interior-3.png.asset.json";
import resultInterior4Asset from "@/assets/results/result-interior-4.png.asset.json";
import resultInterior5Asset from "@/assets/results/result-interior-5.png.asset.json";

const PHONE = "(647) 856-8201";
const PHONE_HREF = "tel:+16478568201";
const SMS_HREF = "sms:+16478568201";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mobile Detailing North York | GlossHaus — Premium Car Detailing" },
      { name: "description", content: "Premium mobile car detailing in North York, Vaughan & Toronto. Interior & exterior detailing delivered to your home or workplace. Book a quote in minutes." },
      { property: "og:title", content: "GlossHaus — Premium Mobile Car Detailing in North York" },
      { property: "og:description", content: "Interior & exterior detailing at your door. Serving North York, Vaughan and the GTA." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
      { name: "keywords", content: "mobile detailing North York, car detailing North York, mobile car detailing Toronto, interior car cleaning North York, mobile detailing Vaughan" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: "GlossHaus Mobile Detailing",
          image: ["https://glosshaus.ca/og.jpg"],
          telephone: "+1-647-856-8201",
          priceRange: "$$",
          areaServed: ["North York", "Willowdale", "Bayview Village", "York Mills", "Lawrence Park", "Downsview", "Vaughan", "Midtown Toronto"],
          address: { "@type": "PostalAddress", addressLocality: "North York", addressRegion: "ON", addressCountry: "CA" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "84" },
        }),
      },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full gradient-gold text-ink font-display text-lg font-semibold">G</span>
          <span className="font-display text-xl font-semibold tracking-tight text-white drop-shadow">GlossHaus</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#results" className="hover:text-white">Results</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#areas" className="hover:text-white">Areas</a>
        </nav>
        <a href={PHONE_HREF} className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-card transition hover:bg-white/90 md:inline-flex">
          {PHONE}
        </a>
        <a href={PHONE_HREF} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-card transition hover:bg-white/90 md:hidden" aria-label="Call us">
          <Phone size={18} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink text-white md:min-h-[100svh]">
      {/* Mobile: full image, uncropped, sits above content, with same overlays as desktop */}
      <div className="relative md:hidden">
        <Nav />
        <img src={heroImg} alt="Freshly detailed Lexus SUV in a North York driveway" width={1920} height={1080} className="block w-full h-auto opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
      </div>
      {/* Desktop: full-bleed background image */}
      <img src={heroImg} alt="" aria-hidden="true" width={1920} height={1080} className="hidden md:block absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end container-px pb-16 pt-10 md:min-h-[100svh] md:pb-24 md:pt-40">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7 fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> MOBILE DETAILING IN NORTH YORK & GTA
            </span>
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              A cleaner vehicle<br />
              <span className="italic text-gold">without giving up your weekend.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
              Interior and exterior detailing at your home or workplace. Save time and enjoy a cleaner vehicle without disrupting your day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink shadow-soft transition hover:scale-[1.02]">
                Get a quick quote
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href={SMS_HREF} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                <Phone size={16} />
                Call or text us
              </a>
            </div>
          </div>

          <div className="md:col-span-5 fade-up" style={{ animationDelay: "0.15s" }}>
            <QuoteCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteCard() {
  return (
    <div className="glass-dark rounded-3xl p-6 text-white shadow-soft md:p-7">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">Instant Quote</span>
        <span className="rounded-full bg-gold/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">Live pricing</span>
      </div>
      <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
        <Row label="Vehicle" value="SUV" />
        <Row label="Location" value="North York" />
        <Row label="Service" value="Full Detail" />
      </div>
      <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/60">Starting at</p>
          <p className="font-display text-4xl font-light text-white">$229</p>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">~2.5 hrs</span>
      </div>
      <a href="#quote" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90">
        Get my quote <span>→</span>
      </a>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/60">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}

const trustBadges = [
  { icon: "🚗", label: "Mobile Service" },
  { icon: "⭐", label: "Premium Products" },
  { icon: "🛡", label: "Fully Insured" },
  { icon: "📍", label: "North York Based" },
  { icon: "⚡", label: "Fast Response" },
  { icon: "✨", label: "Professional Results" },
];

const resultPhotos = [
  {
    src: resultExterior1Asset.url,
    title: "Camry exterior revival",
    meta: "Exterior detail",
    alt: "Before and after exterior detail of a black Toyota Camry in a residential driveway",
  },
  {
    src: resultInterior1Asset.url,
    title: "Rogue interior reset",
    meta: "Interior detail",
    alt: "Before and after interior detail of a Nissan Rogue with restored light seats and floor mats",
  },
  {
    src: resultExterior2Asset.url,
    title: "F-150 wash and finish",
    meta: "Exterior detail",
    alt: "Before and after exterior detail of a black Ford F-150 truck parked in front of a home",
  },
  {
    src: resultInterior2Asset.url,
    title: "Truck cabin deep clean",
    meta: "Interior detail",
    alt: "Before and after interior detail of a Ford truck cabin with cleaned flooring and seats",
  },
  {
    src: resultExterior3Asset.url,
    title: "Tesla gloss restore",
    meta: "Exterior detail",
    alt: "Before and after exterior detail of a white Tesla sedan with restored shine",
  },
  {
    src: resultInterior3Asset.url,
    title: "Leather seat restoration",
    meta: "Interior detail",
    alt: "Before and after close-up of a cleaned cream leather car seat",
  },
  {
    src: resultExterior4Asset.url,
    title: "Lexus curb-appeal finish",
    meta: "Exterior detail",
    alt: "Before and after exterior detail of a white Lexus SUV in front of a modern home",
  },
  {
    src: resultInterior4Asset.url,
    title: "Daily-driver interior refresh",
    meta: "Interior detail",
    alt: "Before and after interior detail of a dark Nissan cabin with cleaned carpets and seats",
  },
  {
    src: resultExterior5Asset.url,
    title: "Honda SUV transformation",
    meta: "Exterior detail",
    alt: "Before and after exterior detail of a black Honda SUV with enhanced gloss",
  },
  {
    src: resultInterior5Asset.url,
    title: "Floor mat reset",
    meta: "Interior detail",
    alt: "Before and after interior detail of a Toyota Camry driver footwell and seat",
  },
];

function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-px mx-auto max-w-7xl py-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {trustBadges.map((b) => (
            <li key={b.label} className="flex items-center gap-2 text-sm text-ink-soft">
              <span className="text-base">{b.icon}</span>
              <span className="font-medium">{b.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle, light }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${light ? "text-gold" : "text-gold"}`}>{eyebrow}</span>
      )}
      <h2 className={`mt-3 font-display text-3xl font-light leading-tight tracking-tight md:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base md:text-lg ${light ? "text-white/70" : "text-ink-soft"}`}>{subtitle}</p>}
    </div>
  );
}

const audience = [
  { icon: "👔", title: "Busy Professionals", text: "Vehicle care that fits your schedule — at home or the office." },
  { icon: "👨‍👩‍👧", title: "Families", text: "Keep your vehicle clean despite spills, snacks, and everyday life." },
  { icon: "🏠", title: "Homeowners", text: "Professional detailing delivered directly to your driveway." },
];

function WhoWeServe() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Who We Serve" title={<>Designed for busy <em className="not-italic text-gold">vehicle owners</em></>} />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {audience.map((a) => (
          <div key={a.title} className="hover-lift rounded-3xl border border-border bg-white p-8 shadow-card">
            <div className="text-4xl">{a.icon}</div>
            <h3 className="mt-6 font-display text-2xl font-medium text-ink">{a.title}</h3>
            <p className="mt-3 text-ink-soft">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Pkg = {
  emoji: string;
  name: string;
  price: string;
  desc?: string;
  includes: string[];
  excludes?: string[];
  popular?: boolean;
};

const packages: Pkg[] = [
  {
    emoji: "🚿",
    name: "Exterior Refresh",
    price: "$99",
    desc: "Perfect for maintaining a clean and polished vehicle.",
    includes: ["Hand wash", "Wheels cleaned", "Tire dressing", "Exterior windows", "Door jamb wipe down", "Quick spray protection", "Final towel dry"],
  },
  {
    emoji: "✨",
    name: "Interior Refresh",
    price: "$149",
    desc: "For vehicles already in reasonable condition that need professional maintenance.",
    includes: ["Full vacuum", "Dash cleaning", "Door panel cleaning", "Interior windows", "Floor mat cleaning", "Light seat cleaning", "Dust removal"],
    excludes: ["Deep stain removal", "Shampoo extraction", "Heavy pet hair removal"],
  },
  {
    emoji: "🚗",
    name: "Full Mobile Detail",
    price: "$229",
    desc: "Our most-booked service. Inside and out, top to bottom.",
    includes: ["Everything in Exterior Refresh", "Everything in Interior Refresh", "Exterior hand wash", "Wheels & tire dressing", "Door jamb cleaning", "Protective spray finish"],
    popular: true,
  },
  {
    emoji: "🏆",
    name: "Deep Clean / Reset",
    price: "$299",
    desc: "For pet hair, stains, odors, salt buildup, or neglected interiors.",
    includes: ["Everything in Full Mobile Detail", "Deep stain treatment", "Fabric extraction", "Pet hair removal", "Odor treatment", "Deep interior cleaning", "Salt removal"],
  },
];

function Services() {
  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Detailing Packages"
          title={<>Detailing packages designed around <em className="not-italic text-gold">your life</em></>}
          subtitle="Professional vehicle care without the inconvenience of visiting a shop."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-card hover-lift ${
                p.popular ? "border-gold/60 ring-1 ring-gold/40 xl:scale-[1.03]" : "border-border"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink shadow">
                  🔥 Most Popular
                </div>
              )}
              <div className="text-3xl">{p.emoji}</div>
              <h3 className="mt-5 font-display text-2xl font-medium text-ink">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-xs uppercase tracking-wider text-ink-soft">Starting at</span>
              </div>
              <p className="font-display text-4xl font-light text-ink">{p.price}</p>
              {p.desc && <p className="mt-3 text-sm text-ink-soft">{p.desc}</p>}
              <ul className="mt-6 space-y-2.5 text-sm text-ink">
                {p.includes.map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-0.5 text-gold">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
                {p.excludes?.map((i) => (
                  <li key={i} className="flex gap-2.5 text-ink-soft/70">
                    <span className="mt-0.5">✕</span>
                    <span className="line-through">{i}</span>
                  </li>
                ))}
              </ul>
              <a href="#quote" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                p.popular ? "bg-ink text-white hover:bg-ink/90" : "border border-ink/15 text-ink hover:bg-ink hover:text-white"
              }`}>
                Book this package →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const addons = [
  { icon: "🛡", title: "Premium Spray Wax", price: "from $39", text: "Adds gloss and short-term paint protection." },
  { icon: "✨", title: "Machine Polish", price: "from $149", text: "Improves gloss and reduces light paint imperfections. Inspection required." },
  { icon: "💡", title: "Headlight Restoration", price: "from $79", text: "Restore foggy, oxidized lenses to clear." },
  { icon: "🐶", title: "Pet Hair Removal", price: "$30 – $100", text: "Thorough removal from carpets and upholstery." },
  { icon: "🧼", title: "Odor Treatment", price: "$40 – $80", text: "Neutralize lingering smells at the source." },
  { icon: "🚗", title: "Engine Bay Detail", price: "from $40", text: "Clean and dressed engine bay for a finished look." },
];

function AddOns() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Add-On Services" title={<>Tailor your detail with <em className="not-italic text-gold">premium add-ons</em></>} />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {addons.map((a) => (
          <div key={a.title} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-card hover-lift">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-2xl">{a.icon}</div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-ink">{a.title}</h3>
                <span className="text-sm font-semibold text-gold">{a.price}</span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="bg-surface py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Before & After"
          title={<>Real <em className="not-italic text-gold">transformations</em></>}
          subtitle="A curated set of recent exterior and interior before-and-after results from real mobile detailing appointments."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {resultPhotos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-[28px] border border-border bg-white shadow-card hover-lift">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{photo.meta}</p>
                  <p className="mt-1 text-sm font-medium text-ink">{photo.title}</p>
                </div>
                <span className="text-lg text-ink/40">↗</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const vehicles = [
  { icon: "⚡", label: "Electric Vehicles" },
  { icon: "🚙", label: "SUVs" },
  { icon: "🚗", label: "Sedans" },
  { icon: "👨‍👩‍👧", label: "Family Vehicles" },
  { icon: "💼", label: "Executive Vehicles" },
];

function Vehicles() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Vehicles We Service" title={<>From daily drivers to <em className="not-italic text-gold">executive vehicles</em></>} />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {vehicles.map((v) => (
          <div key={v.label} className="hover-lift rounded-2xl border border-border bg-white p-6 text-center shadow-card">
            <div className="text-3xl">{v.icon}</div>
            <p className="mt-3 text-sm font-medium text-ink">{v.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { n: "01", icon: "📸", title: "Send Photos", text: "Snap a few photos of your vehicle and message them over." },
  { n: "02", icon: "💬", title: "Receive Pricing", text: "Get clear, transparent pricing — no surprises." },
  { n: "03", icon: "📅", title: "Book A Time", text: "Choose a convenient appointment that fits your schedule." },
  { n: "04", icon: "✨", title: "We Come To You", text: "Professional detailing delivered on-site at your door." },
];

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--gold) 0, transparent 40%)" }} />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="How It Works" title={<>Convenience from <em className="not-italic text-gold">start to finish</em></>} light />
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="glass-dark h-full rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-light text-gold">{s.n}</span>
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-gradient-to-r from-gold/60 to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const prep = [
  { icon: "🚰", title: "Access to Water", text: "Customer must have access to an outdoor water source during the appointment." },
  { icon: "⚡", title: "Access to Electricity", text: "Customer must provide access to a standard electrical outlet for detailing equipment." },
  { icon: "🚗", title: "Vehicle Accessible", text: "Vehicle should be parked in an accessible driveway or designated work area before arrival." },
  { icon: "🧳", title: "Remove Personal Valuables", text: "Please remove valuable personal belongings prior to your appointment." },
];

function Prep() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader
        eyebrow="Before Your Appointment"
        title={<>A few quick things to <em className="not-italic text-gold">have ready</em></>}
        subtitle="To ensure the highest-quality detailing experience, please have the following available."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {prep.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-white p-6 shadow-card hover-lift">
            <div className="text-3xl">{p.icon}</div>
            <h3 className="mt-5 font-display text-lg font-medium text-ink">{p.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{p.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-white to-[oklch(0.97_0.04_85)] p-8 md:p-12 shadow-card">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Service Requirements</span>
            <h3 className="mt-2 font-display text-2xl font-medium text-ink md:text-3xl">A few details for the best experience.</h3>
            <p className="mt-3 text-ink-soft">
              To provide the highest quality mobile detailing experience, GlossHaus requires access to both water and electricity at the service location. Most residential driveways are fully suitable.
            </p>
            <p className="mt-2 text-ink-soft">
              &nbsp;
            </p>
          </div>
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl gradient-gold text-3xl shadow-soft">ℹ️</div>
        </div>
      </div>
    </section>
  );
}

const whys = [
  { icon: "⭐", title: "Professional Results", text: "Premium products and uncompromising attention to detail." },
  { icon: "⏱", title: "Save Time", text: "We come to you — home, office, or condo driveway." },
  { icon: "🛡", title: "Trusted Service", text: "Reliable communication and fully insured service." },
  { icon: "💯", title: "Satisfaction Focused", text: "We stand behind every detail we deliver." },
];

function WhyUs() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why GlossHaus" title={<>More than just a <em className="not-italic text-gold">clean car</em></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whys.map((w) => (
            <div key={w.title} className="rounded-3xl border border-border bg-white p-8 shadow-card hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-xl text-white">{w.icon}</div>
              <h3 className="mt-6 font-display text-xl font-medium text-ink">{w.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { quote: "Looks better than when I bought it.", name: "Daniel R.", area: "Bayview Village" },
  { quote: "Professional and easy to work with.", name: "Priya S.", area: "Willowdale" },
  { quote: "Great communication and excellent results.", name: "Marcus L.", area: "Vaughan" },
];

function Testimonials() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Reviews" title={<>Clients across the <em className="not-italic text-gold">GTA</em></>} />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-3xl border border-border bg-white p-8 shadow-card hover-lift">
            <div className="text-gold">★★★★★</div>
            <blockquote className="mt-5 font-display text-xl font-light leading-snug text-ink">"{t.quote}"</blockquote>
            <figcaption className="mt-6 text-sm text-ink-soft">
              <span className="font-semibold text-ink">{t.name}</span> · {t.area}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section className="container-px mx-auto max-w-7xl py-12">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-white md:p-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full gradient-gold opacity-20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full gradient-gold opacity-10 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">🔁 GlossHaus Care Plan</span>
            <h2 className="mt-3 font-display text-3xl font-light leading-tight md:text-5xl">
              Keep your vehicle looking <em className="not-italic text-gold">freshly detailed</em> year-round.
            </h2>
            <a href={SMS_HREF} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition hover:scale-[1.02]">
              Learn more →
            </a>
          </div>
          <ul className="grid gap-3 text-sm sm:grid-cols-2">
            {["Priority Scheduling", "Monthly Visits", "Member Pricing", "Discounted Deep Cleans", "Consistent Appearance", "Dedicated Detailer"].map((b) => (
              <li key={b} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <span className="text-gold">✓</span>
                <span className="text-white/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const areas = ["North York", "Willowdale", "Bayview Village", "York Mills", "Lawrence Park", "Downsview", "Vaughan", "Midtown Toronto"];

function Areas() {
  return (
    <section id="areas" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Service Areas" title={<>Mobile detailing across <em className="not-italic text-gold">North York & the GTA</em></>} />
      <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {areas.map((a) => (
          <div key={a} className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 shadow-card">
            <span className="text-gold">📍</span>
            <span className="font-medium text-ink">{a}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-ink-soft">Not sure if we cover your area? <a href={SMS_HREF} className="text-ink underline">Text us</a> and we'll let you know.</p>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="quote" className="relative isolate overflow-hidden bg-ink text-white">
      <img src={ctaImg} alt="Detailed BMW SUV at a Toronto home" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="container-px relative mx-auto max-w-5xl py-32 text-center md:py-48">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Ready when you are</span>
        <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] md:text-7xl">
          Ready for a <em className="not-italic text-gold">cleaner vehicle?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          Send photos and receive a quote in minutes. Detailing comes to your driveway.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={SMS_HREF} className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition hover:scale-[1.02]">📱 Text photos</a>
          <a href="#services" className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">🚗 Request quote</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full gradient-gold text-ink font-display text-lg font-semibold">G</span>
              <span className="font-display text-xl font-semibold text-white">GlossHaus</span>
            </div>
            <p className="mt-4 max-w-sm text-sm">
              Premium mobile car detailing. We come to your home or workplace across North York, Vaughan, and the GTA.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={PHONE_HREF} className="hover:text-white">{PHONE}</a></li>
              <li><a href="mailto:hello@glosshaus.ca" className="hover:text-white">hello@glosshaus.ca</a></li>
              <li>North York, ON</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Service</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Packages</a></li>
              <li><a href="#results" className="hover:text-white">Before & After</a></li>
              <li><a href="#areas" className="hover:text-white">Service Areas</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} GlossHaus Mobile Detailing. All rights reserved.</p>
          <p>Mobile Detailing North York · Vaughan · Toronto</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-white text-ink">
      <Hero />
      <TrustBar />
      <WhoWeServe />
      <Services />
      <AddOns />
      <Results />
      <Vehicles />
      <Process />
      <Prep />
      <WhyUs />
      <Testimonials />
      <Membership />
      <Areas />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
