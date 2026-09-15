import { Link } from 'react-router-dom'
import { business, services } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-stlad-line bg-stlad-bg-sunken">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo-mark.webp"
                alt={business.name}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-base font-medium text-stlad-ink">
                {business.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stlad-ink-soft">
              {business.tagline} Based in {business.city}, we bring showroom-quality
              detailing to your hangar or ramp.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-stlad-ink">
              Services
            </p>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="text-sm text-stlad-ink-soft transition-colors hover:text-gold"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-stlad-ink">
              Get in touch
            </p>
            <ul className="space-y-3 text-sm text-stlad-ink-soft">
              <li>
                <a href={`tel:${business.phone.replace(/[^\d+]/g, '')}`} className="hover:text-gold">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-gold">
                  {business.email}
                </a>
              </li>
              <li className="text-stlad-ink-soft/80">{business.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-stlad-line pt-8 text-xs text-stlad-ink-soft/70 md:flex-row md:items-center">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>St. Louis, Missouri</p>
        </div>
      </div>
    </footer>
  )
}
