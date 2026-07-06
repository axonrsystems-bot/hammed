import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'

const PROFESSIONAL_NICHES = [
  {
    emoji: '🏥',
    title: 'Medical Professionals',
    description:
      'Doctors, dentists, and clinics. Patient acquisition funnels, appointment booking systems, and trust-building websites that convert visitors into booked consultations.',
    tags: ['Patient Acquisition', 'Booking Systems', 'Trust Architecture'],
  },
  {
    emoji: '⚖️',
    title: 'Legal Professionals',
    description:
      'Lawyers and solicitors. Conversion-focused websites that move urgent visitors from "I need help" to a booked case review, with clear practice area positioning.',
    tags: ['Case Review Funnels', 'Authority Building', 'Lead Qualification'],
  },
  {
    emoji: '🎓',
    title: 'Coaches and Consultants',
    description:
      'Business coaches, executive consultants, and leadership trainers. Course platforms, community builds on Circle and Mighty Networks, and high-converting sales pages.',
    tags: ['Course Platforms', 'Circle Communities', 'Sales Pages'],
  },
  {
    emoji: '📊',
    title: 'Business Valuers and Advisors',
    description:
      'Financial advisors, business valuers, and M&A consultants. SaaS platforms, professional websites, and affiliate systems that reflect the authority the work deserves.',
    tags: ['SaaS Builds', 'Affiliate Portals', 'Professional Websites'],
  },
  {
    emoji: '✨',
    title: 'Beauty and Wellness',
    description:
      'Med spas, aesthetic clinics, salons, and wellness studios. Visually premium websites that reduce booking friction and retain clients through smart follow-up systems.',
    tags: ['Booking Optimization', 'Visual-First Design', 'Retention Systems'],
  },
  {
    emoji: '🏨',
    title: 'Hospitality and Lifestyle',
    description:
      'Boutique hotels, restaurants, wedding professionals, and event businesses. Experience-led websites that drive direct bookings and reduce dependence on third-party platforms.',
    tags: ['Direct Bookings', 'Experience Design', 'Local SEO'],
  },
]

export default function Professionals() {
  return (
    <section className="py-24 bg-black" id="professionals">
      <Container>
        <AnimatedSection className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 block">
            Who I Work With
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-5">
            Coaches, consultants, doctors, lawyers, and everyone in between.
          </h2>
          <p className="text-base text-muted-light leading-relaxed">
            The industries change. The problem stays the same: too many visitors
            leaving without taking action. I have solved this across six different
            professional categories and counting.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROFESSIONAL_NICHES.map((niche, i) => (
            <AnimatedSection key={niche.title} delay={i * 0.08}>
              <div className="bg-surface border border-white/5 rounded-xl p-7 hover:border-accent/20 transition-colors duration-300 h-full flex flex-col gap-4">
                <span className="text-3xl">{niche.emoji}</span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                    {niche.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {niche.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {niche.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/8 text-accent/80 px-2.5 py-1 rounded-full border border-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
