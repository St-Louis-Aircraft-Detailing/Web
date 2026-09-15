import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import GalleryCard from '../components/GalleryCard'
import { gallery } from '../data/content'

const categories = ['All', 'Exterior', 'Interior', 'Detail'] as const

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const filtered = useMemo(
    () => (active === 'All' ? gallery : gallery.filter((g) => g.category === active)),
    [active],
  )

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="See the work."
        subtitle="A running look at exterior, interior, and detail work. More gets added as jobs wrap."
      />

      <Section>
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-stlad-line text-stlad-ink-soft hover:text-stlad-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <GalleryCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-stlad-ink-soft">No entries in this category yet — check back soon.</p>
        )}
      </Section>
    </>
  )
}
