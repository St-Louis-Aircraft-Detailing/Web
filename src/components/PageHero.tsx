import type { ReactNode } from 'react'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-stlad-line bg-stlad-bg-sunken">
      <div className="stlad-grain pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--gold)' }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] text-stlad-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-6 max-w-xl text-lg text-stlad-ink-soft">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
