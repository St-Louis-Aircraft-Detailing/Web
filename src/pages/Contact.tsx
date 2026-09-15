import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { Button } from '../components/Button'
import { business, services } from '../data/content'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = new FormData(e.currentTarget)

    const { error: submitError } = await supabase.from('contact_submissions').insert({
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      aircraft: form.get('aircraft'),
      airport: form.get('airport'),
      service: form.get('service'),
      message: form.get('message'),
    })

    setSubmitting(false)

    if (submitError) {
      console.error(submitError)
      setError("Something went wrong sending that — try again, or call/email us directly.")
      return
    }

    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your aircraft on the schedule."
        subtitle="Tell us about your aircraft, where it's based, and what you need — we'll follow up to confirm details and timing."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-medium text-stlad-ink">Reach us directly</h2>
            <ul className="mt-6 space-y-4 text-stlad-ink-soft">
              <li>
                <span className="block text-xs uppercase tracking-wider text-stlad-ink-soft/70">Phone</span>
                <a href={`tel:${business.phone.replace(/[^\d+]/g, '')}`} className="text-lg text-stlad-ink hover:text-gold">
                  {business.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-stlad-ink-soft/70">Email</span>
                <a href={`mailto:${business.email}`} className="text-lg text-stlad-ink hover:text-gold">
                  {business.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-stlad-ink-soft/70">Service Area</span>
                <span className="text-stlad-ink">{business.serviceArea}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stlad-line bg-stlad-bg-raised p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-start gap-3 py-8">
                <span className="text-3xl">✓</span>
                <h3 className="font-display text-xl font-medium text-stlad-ink">Thanks — request received.</h3>
                <p className="text-stlad-ink-soft">
                  We'll follow up shortly to confirm details and get you scheduled.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Aircraft (make & model)" name="aircraft" />
                  <Field label="Home airport" name="airport" placeholder="e.g. SUS, CPS, STL" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-stlad-ink-soft" htmlFor="service">
                    Service interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-stlad-line bg-stlad-bg px-4 py-3 text-sm text-stlad-ink outline-none focus:border-gold"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-stlad-ink-soft" htmlFor="message">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-stlad-line bg-stlad-bg px-4 py-3 text-sm text-stlad-ink outline-none focus:border-gold"
                    placeholder="Timing, access details, special requests…"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-2 justify-self-start disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? 'Sending…' : 'Send Request'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-stlad-ink-soft" htmlFor={name}>
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-stlad-line bg-stlad-bg px-4 py-3 text-sm text-stlad-ink outline-none focus:border-gold"
      />
    </div>
  )
}
