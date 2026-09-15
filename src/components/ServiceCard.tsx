import type { Service } from '../data/content'

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-stlad-line bg-stlad-bg-raised p-8 transition-colors duration-300 hover:border-gold/50">
      <span className="font-display text-5xl font-light text-white/10 transition-colors duration-300 group-hover:text-gold/20">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-4 font-display text-xl font-medium text-stlad-ink">{service.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stlad-ink-soft">{service.summary}</p>
      <ul className="mt-6 space-y-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-stlad-ink-soft">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}
