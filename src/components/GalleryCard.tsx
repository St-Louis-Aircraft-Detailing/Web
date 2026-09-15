import type { GalleryItem } from '../data/content'

export default function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-stlad-line bg-stlad-bg-raised">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold">{item.category}</p>
        <figcaption className="mt-1 text-sm font-medium text-white">{item.title}</figcaption>
      </div>
    </figure>
  )
}
