import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-stlad-bg hover:brightness-105 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_var(--gold)]',
  secondary: 'border border-stlad-line text-stlad-ink hover:border-gold hover:text-gold bg-white/[0.02]',
  ghost: 'text-stlad-ink-soft hover:text-gold',
}

export function ButtonLink({
  to,
  variant = 'primary',
  className = '',
  children,
  ...rest
}: { to: string; variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = /^https?:\/\//.test(to) || to.startsWith('mailto:') || to.startsWith('tel:')
  const classes = `${base} ${variants[variant]} ${className}`
  if (isExternal) {
    return (
      <a href={to} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: { variant?: Variant } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}
