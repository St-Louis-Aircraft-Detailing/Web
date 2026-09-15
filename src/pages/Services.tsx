import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { ButtonLink } from '../components/Button'
import { services } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-service detailing, built around your aircraft."
        subtitle="Every service uses aircraft-safe products and techniques — never automotive shortcuts — because paint, composites, and cabin materials on an aircraft aren't the same as on a car."
      />

      <Section>
        <div className="flex flex-col gap-8">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="grid gap-8 rounded-2xl border border-stlad-line bg-stlad-bg-raised p-8 md:grid-cols-[auto_1fr] md:items-start md:p-10"
            >
              <span className="font-display text-6xl font-light text-gold/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-display text-2xl font-medium text-stlad-ink">{service.name}</h2>
                <p className="mt-3 text-stlad-ink-soft">{service.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-stlad-ink-soft">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-stlad-line bg-stlad-bg-sunken">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-medium text-stlad-ink md:text-3xl">
              Not sure which service fits?
            </h2>
            <p className="mt-2 text-stlad-ink-soft">
              Tell us about your aircraft and we'll recommend a plan.
            </p>
          </div>
          <ButtonLink to="/contact" variant="primary">
            Get a Recommendation
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
