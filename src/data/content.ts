// Marketing copy + structured content for the site. Keep real business
// facts (phone, email, hours, pricing) out of code — they're marked
// PLACEHOLDER below until James supplies the real details.

export const business = {
  name: 'St. Louis Aircraft Detailing',
  shortName: 'STL Aircraft Detailing',
  tagline: 'Precision detailing for private aircraft, on your ramp.',
  city: 'St. Louis, MO',
  serviceArea:
    'Serving Spirit of St. Louis Airport (SUS), St. Louis Downtown Airport (CPS), St. Louis Lambert International (STL), and surrounding fields.',
  // PLACEHOLDER — replace with real contact details.
  phone: '(314) 555-0142',
  email: 'hello@stlaircraftdetailing.com',
  instagram: '@stlaircraftdetailing',
}

export type Service = {
  slug: string
  name: string
  summary: string
  description: string
  bullets: string[]
}

export const services: Service[] = [
  {
    slug: 'exterior-wash-wax',
    name: 'Exterior Wash & Wax',
    summary: 'Hand-washed exteriors, streak-free and swirl-free, with a durable protective wax.',
    description:
      "A full hand wash for fuselage, wings, and empennage using aircraft-safe soaps, followed by a clay treatment to lift bonded contaminants and a carnauba or synthetic wax to protect the finish and keep it looking freshly delivered.",
    bullets: [
      'Aircraft-safe, non-abrasive wash media',
      'Bug and tar removal from leading edges',
      'Belly wash and landing gear wipe-down',
      'Streak-free windscreen and window glass',
    ],
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Paint Protection',
    summary: 'A long-term ceramic layer that keeps paint glossy and easier to maintain between visits.',
    description:
      'A professional-grade ceramic coating applied to painted surfaces after a full paint decontamination. It builds a hydrophobic layer that sheds water, UV, and exhaust staining, so the aircraft stays cleaner longer and future washes take a fraction of the time.',
    bullets: [
      'Multi-stage paint decontamination first',
      'UV and oxidation resistant finish',
      'Hydrophobic — water and grime sheet off',
      'Extends time between full details',
    ],
  },
  {
    slug: 'interior-detailing',
    name: 'Interior Detailing',
    summary: 'Cabin, cockpit, and cargo areas cleaned, conditioned, and freshened.',
    description:
      'Seats, sidewalls, headliners, carpets, and cockpit surfaces are vacuumed, cleaned, and conditioned with products safe for leather, Alcantara, and avionics. We finish with an odor treatment so the cabin feels — and smells — brand new.',
    bullets: [
      'Leather & Alcantara-safe cleaning and conditioning',
      'Carpet and cargo area deep vacuum',
      'Cockpit glass and panel dusting (avionics-safe)',
      'Cabin odor and air treatment',
    ],
  },
  {
    slug: 'engine-belly',
    name: 'Engine Bay & Belly Cleaning',
    summary: 'The unglamorous areas, done right — degreased, rinsed, and inspection-ready.',
    description:
      'Engine cowlings, nacelles, and belly surfaces collect the most grime and are the first thing an inspector or buyer looks at closely. We degrease, hand-scrub, and rinse these areas so the aircraft is clean where it counts.',
    bullets: [
      'Cowling and nacelle degreasing',
      'Exhaust stain and soot removal',
      'Landing gear and wheel well detail',
      'Pre-inspection and pre-sale ready',
    ],
  },
  {
    slug: 'mobile-ramp-service',
    name: 'Mobile Ramp Service',
    summary: 'We come to your hangar or ramp across the St. Louis area — no need to move the aircraft.',
    description:
      'Our team travels to you with everything needed to detail on-site, coordinating around your flight schedule so the aircraft is ready when you need it, not when a shop has an opening.',
    bullets: [
      'On-site at your hangar or FBO ramp',
      'Scheduled around your flight itinerary',
      'Serving SUS, CPS, STL, and nearby fields',
      'Recurring maintenance plans available',
    ],
  },
]

export type GalleryItem = {
  slug: string
  title: string
  category: 'Exterior' | 'Interior' | 'Detail'
  image: string
}

export const gallery: GalleryItem[] = [
  {
    slug: 'hangar-exterior-1',
    title: 'Turboprop exterior, full wash & wax',
    category: 'Exterior',
    image: '/images/stock/hero-hangar-jet.webp',
  },
  {
    slug: 'engine-detail-1',
    title: 'Engine nacelle degreasing',
    category: 'Detail',
    image: '/images/stock/engine-closeup.webp',
  },
  {
    slug: 'brand-card-black',
    title: 'St. Louis Aircraft Detailing — brand card',
    category: 'Detail',
    image: '/images/cards/black-card-preview.webp',
  },
]
