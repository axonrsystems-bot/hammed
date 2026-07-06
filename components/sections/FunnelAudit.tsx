'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { CheckCircle } from 'lucide-react'

const AUDIT_POINTS = [
  'Where visitors are dropping off in your funnel',
  'The one page that is costing you the most enquiries',
  'What your strongest conversion opportunity is right now',
]

export default function FunnelAudit() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [url, setUrl] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !url) return
    setLoading(true)

    const subject = encodeURIComponent('Free Funnel Audit Request')
    const body = encodeURIComponent(
      `Hi Hammed,\n\nI would like a free funnel audit.\n\nName: ${name}\nEmail: ${email}\nWebsite URL: ${url}\n\nPlease review my funnel and send your findings.`
    )

    setTimeout(() => {
      window.location.href = `mailto:toyeshe20@gmail.com?subject=${subject}&body=${body}`
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section className="py-24 bg-surface" id="audit">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <AnimatedSection direction="left">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 block">
              Free Offer
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-white leading-tight tracking-tight mb-5">
              Get a free funnel audit. Find out exactly where your website is
              losing clients.
            </h2>
            <p className="text-base text-muted-light leading-relaxed mb-8">
              Submit your website URL and I will personally review your funnel
              and send you three specific findings within 48 hours. No
              templates. No automated reports. A real audit from someone who has
              done this for 120+ businesses.
            </p>
            <ul className="space-y-3 list-none">
              {AUDIT_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-muted-light">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted mt-6">
              Free. No pitch. No obligation. Just findings you can act on.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            {submitted ? (
              <div className="bg-surface-2 border border-accent/20 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-accent" />
                </div>
                <h3 className="font-serif text-xl font-medium text-white mb-3">
                  Audit request received
                </h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  Check your email client to send the request. I will review
                  your funnel and get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface-2 border border-white/5 rounded-2xl p-8 space-y-4"
              >
                <div>
                  <label
                    htmlFor="audit-name"
                    className="block text-xs font-semibold text-muted-light mb-2 tracking-wide"
                  >
                    Your Name
                  </label>
                  <input
                    id="audit-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="audit-email"
                    className="block text-xs font-semibold text-muted-light mb-2 tracking-wide"
                  >
                    Your Email
                  </label>
                  <input
                    id="audit-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@yoursite.com"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="audit-url"
                    className="block text-xs font-semibold text-muted-light mb-2 tracking-wide"
                  >
                    Your Website URL
                  </label>
                  <input
                    id="audit-url"
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? 'Preparing your request...' : 'Request My Free Audit'}
                </button>
                <p className="text-xs text-muted text-center">
                  Delivered personally within 48 hours.
                </p>
              </form>
            )}
          </AnimatedSection>

        </div>
      </Container>
    </section>
  )
}
