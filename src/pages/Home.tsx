import { ButtonLink } from '../components/Button'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import GalleryCard from '../components/GalleryCard'
import { business, gallery, services } from '../data/content'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/stock/hero-hangar-jet.webp"
            alt="A private turboprop aircraft parked in a bright, spotless hangar"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stlad-bg via-stlad-bg/85 to-stlad-bg/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-stlad-bg via-stlad-bg/10 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {business.city} · Mobile Aircraft Detailing
          </p>
          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.05] text-stlad-ink sm:text-6xl md:text-7xl">
            Detailing worthy of the aircraft.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stlad-ink-soft">
            {business.tagline} We bring showroom-level exterior and interior
            detailing straight to your hangar or ramp — so your aircraft looks
            the way it flies.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink to="/contact" variant="primary">
              Book a Detail
            </ButtonLink>
            <ButtonLink to="/gallery" variant="secondary">
              See Our Work
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-stlad-line bg-stlad-bg-sunken">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center sm:grid-cols-4">
          {[
            ['Mobile', 'We come to your ramp'],
            ['Interior + Exterior', 'Full-service detailing'],
            ['Ceramic Coating', 'Long-term paint protection'],
            ['St. Louis Based', 'SUS · CPS · STL'],
          ].map(([label, sub]) => (
            <div key={label}>
              <p className="font-display text-lg font-medium text-stlad-ink">{label}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-stlad-ink-soft">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services preview */}
      <Section
        eyebrow="What We Do"
        title="Every surface, treated with the same precision as the cockpit."
        subtitle="From a full exterior wash and ceramic coating to cabin detailing and engine bay cleaning, each service is built around aircraft-safe products and a careful eye."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink to="/services" variant="ghost">
            View all services →
          </ButtonLink>
        </div>
      </Section>

      {/* Gold-forward feature band */}
      <section className="relative overflow-hidden bg-stlad-bg-sunken py-24">
        <div className="stlad-grain pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Why It Matters
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-stlad-ink md:text-4xl">
              A clean aircraft protects its value — and its impression.
            </h2>
            <p className="mt-5 text-stlad-ink-soft">
              Whether you're prepping for a pre-buy inspection, keeping a fleet
              aircraft presentation-ready, or simply want your ride to look as
              good as it flies, consistent detailing protects paint, interior
              materials, and resale value over the long run.
            </p>
            <div className="mt-8">
              <ButtonLink to="/about" variant="secondary">
                About St. Louis Aircraft Detailing
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-stlad-line">
              <img
                src="/images/stock/engine-closeup.webp"
                alt="Close-up detail of a clean, well-maintained aircraft engine and fuselage"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <Section
        eyebrow="Recent Work"
        title="A look at the work we've done."
        subtitle="A sample of exterior, interior, and detail work across the fleets we service."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GalleryCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink to="/gallery" variant="ghost">
            View full gallery →
          </ButtonLink>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="border-t border-stlad-line bg-stlad-bg-sunken">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-medium text-stlad-ink md:text-4xl">
              Ready to schedule your next detail?
            </h2>
            <p className="mt-3 max-w-md text-stlad-ink-soft">
              Tell us your aircraft and airport, and we'll get you on the
              schedule.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink to="/contact" variant="primary">
              Book a Detail
            </ButtonLink>
            <ButtonLink to={`tel:${business.phone.replace(/[^\d+]/g, '')}`} variant="secondary">
              Call {business.phone}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
