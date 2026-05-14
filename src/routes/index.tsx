import { createFileRoute, Link } from "@tanstack/react-router";
import { Pill, Stethoscope, Truck, ShieldCheck, Clock, HeartPulse, ArrowRight, Phone, MapPin, Mail } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Featured />
        <Promise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Pill className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Simstel</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#featured" className="transition-colors hover:text-foreground">Wellness</a>
          <a href="#promise" className="transition-colors hover:text-foreground">Our Promise</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90">
          Visit us <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open today · 8am – 9pm
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Trusted care,<br />
            <em className="text-primary">quietly modern.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Simstel Pharmacy blends pharmacist expertise with calm, considered service — prescriptions filled, wellness curated, advice always free.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]">
              Explore services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              Speak to a pharmacist
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "24+", v: "Years of care" },
              { k: "12k", v: "Patients served" },
              { k: "4.9★", v: "Community rating" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-foreground">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/40 blur-2xl" />
          <img
            src={heroImage}
            alt="Apothecary bottles with eucalyptus and pills on cream surface"
            width={1280}
            height={1280}
            className="aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-elevated)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Licensed & accredited</div>
                <div className="text-xs text-muted-foreground">Registered pharmacists on duty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Pill, title: "Prescriptions", body: "Fast, accurate dispensing with electronic prescription support and refill reminders." },
  { icon: Stethoscope, title: "Consultations", body: "Private one-on-one consultations with a pharmacist — at no extra cost." },
  { icon: Truck, title: "Home delivery", body: "Discreet same-day delivery within the city, scheduled at a time that suits you." },
  { icon: HeartPulse, title: "Health checks", body: "Blood pressure, glucose, cholesterol and BMI screening on a walk-in basis." },
  { icon: ShieldCheck, title: "Vaccinations", body: "Seasonal and travel vaccinations administered by certified immunisers." },
  { icon: Clock, title: "Chronic care", body: "Personalised medication management for ongoing conditions and treatment plans." },
];

function Services() {
  return (
    <section id="services" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Services</span>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Everything you need, under one calm roof.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">From routine refills to expert clinical advice — Simstel is built around making healthcare feel effortless.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform group-hover:-rotate-6">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Send your prescription", body: "Drop in, snap a photo, or forward it from your doctor — we handle the rest." },
  { n: "02", title: "We prepare & verify", body: "A licensed pharmacist double-checks every dose, dosage, and interaction." },
  { n: "03", title: "Pick up or delivered", body: "Collect at the counter or have it delivered, discreetly, to your door." },
];

function Featured() {
  return (
    <section id="featured" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">How it works</span>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Three quiet steps to your medication.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">No queues, no confusion — just a calm, reliable process from prescription to pick-up.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="font-display text-7xl leading-none text-primary/20">{s.n}</div>
              <h3 className="mt-6 text-2xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute right-6 top-8 hidden h-5 w-5 text-primary/30 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section id="promise" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Our promise</span>
          <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Pharmacy, made <em>personal</em> again.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We believe healthcare should feel less clinical and more considered. Every prescription is double-checked, every question is answered, every patient is known by name.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
            Become a patient <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {[
            { t: "Always a real pharmacist", d: "No phone trees. No bots. Speak with a licensed pharmacist any time we're open." },
            { t: "Transparent pricing", d: "Fair, posted prices on every wellness product — and insurance accepted on prescriptions." },
            { t: "Confidential by design", d: "Private consultation rooms and discreet packaging on every delivery." },
            { t: "Locally rooted", d: "Independent and family-run — proudly serving the community since 2001." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Visit Simstel</span>
          <h2 className="mt-3 text-4xl sm:text-5xl">We're open seven days.<br />Come say hello.</h2>
          <p className="mt-6 max-w-md text-background/70">Walk in for a refill, a chat, or a coffee from the wellness bar. Our team is here whenever you need us.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <InfoCard icon={MapPin} title="Address" lines={["Nigeria"]} />
          <InfoCard icon={Phone} title="Call us" lines={["+1 (555) 014-2200", "Mon–Sun, 8am – 9pm"]} />
          <InfoCard icon={Mail} title="Email" lines={["care@simstelpharmacy.com", "Reply within 2 hours"]} />
          <InfoCard icon={Clock} title="Hours" lines={["Mon–Sat: 8am – 9pm", "Sunday: 9am – 6pm"]} />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-background/10 bg-background/[0.04] p-6 backdrop-blur">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-background/60">{title}</h3>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-base">{l}</p>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground py-8 text-background/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground">
            <Pill className="h-3 w-3" />
          </div>
          <span>© {new Date().getFullYear()} Simstel Pharmacy</span>
        </div>
        <span>Trusted care, quietly modern.</span>
      </div>
    </footer>
  );
}
