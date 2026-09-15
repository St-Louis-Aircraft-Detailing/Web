import type { PropsWithChildren, ReactNode } from 'react'

type SectionProps = PropsWithChildren<{
  id?: string
  eyebrow?: string
  title?: ReactNode
  subtitle?: ReactNode
  className?: string
  bleed?: boolean
}>

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = '',
  bleed = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className={bleed ? '' : 'mx-auto max-w-6xl px-6'}>
        {(eyebrow || title || subtitle) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-medium leading-tight text-stlad-ink sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-stlad-ink-soft">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
