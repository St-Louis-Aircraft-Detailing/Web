import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonLink } from './Button'
import { business } from '../data/content'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-stlad-line bg-stlad-bg/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/images/logo/logo-mark.webp"
            alt={business.name}
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-lg font-medium tracking-wide text-stlad-ink">
            St. Louis <span className="text-gold">Aircraft Detailing</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-gold' : 'text-stlad-ink-soft hover:text-stlad-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink to="/contact" variant="primary">
            Book a Detail
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-stlad-ink transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-[1.5px] w-6 bg-stlad-ink transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-stlad-line bg-stlad-bg px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-gold' : 'text-stlad-ink-soft'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ButtonLink to="/contact" variant="primary" className="mt-2 w-full">
              Book a Detail
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  )
}
