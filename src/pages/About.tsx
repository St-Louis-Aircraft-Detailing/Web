import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { ButtonLink } from '../components/Button'
import { business } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Local, hands-on, and particular about the details."
        subtitle={`${business.name} is based in ${business.city} and works directly on your ramp — no drop-off, no waiting in line behind someone else's project.`}
      />

      <Section
        eyebrow="Our Approach"
        title="Aircraft-safe, every step."
        subtitle="Cars and aircraft don't share a wash bay for a reason. Composite panels, avionics, anti-glare coatings, and specialty paints all call for different products and technique than a quick-lube car wash."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: 'The Right Products',
              copy: 'Aircraft-safe soaps, waxes, and interior cleaners — nothing that risks paint, plastics, or avionics.',
            },
            {
              title: 'On Your Schedule',
              copy: "We work around your flight itinerary, not the other way around.",
            },
            {
              title: 'Attention to Detail',
              copy: 'Landing gear, belly, cowlings, and cabin corners get the same care as the fuselage.',
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-stlad-line bg-stlad-bg-raised p-8">
              <h3 className="font-display text-lg font-medium text-stlad-ink">{f.title}</h3>
              <p className="mt-3 text-sm text-stlad-ink-soft">{f.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-stlad-line bg-stlad-bg-sunken py-24">
        <div className="stlad-grain pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-stlad-line">
            <img
              src="/images/cards/charcoal-gold-aircraft.webp"
              alt="St. Louis Aircraft Detailing brand artwork"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Serving the St. Louis Area
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-stlad-ink md:text-4xl">
              {business.serviceArea}
            </h2>
            <p className="mt-5 text-stlad-ink-soft">
              If your aircraft is based somewhere else nearby, reach out — we
              regularly travel to surrounding fields for recurring clients.
            </p>
            <div className="mt-8">
              <ButtonLink to="/contact" variant="primary">
                Get in Touch
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
