import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'

const PROBLEMS = [
  {
    number: '01',
    title: 'A messaging problem',
    description:
      'Visitors land on your site and cannot immediately understand what you do, who you help, or why you are the right choice. Clarity converts. Confusion does not.',
  },
  {
    number: '02',
    title: 'A conversion problem',
    description:
      'Most websites present information but never guide the visitor toward a clear next step. Every page should have one job. Most pages have none.',
  },
  {
    number: '03',
    title: 'A customer journey problem',
    description:
      'Visitors arrive, browse, and leave. There is no structured path from first visit to booked call, enquiry, or sale. The journey is missing.',
  },
  {
    number: '04',
    title: 'A trust problem',
    description:
      'People buy from people they trust. Most websites do not build trust fast enough. Social proof, clarity, and consistency all compound trust over time.',
  },
]

export default function Problem() {
  return (
    <section className="py-24 bg-light-bg" id="problem">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 block">
              The Real Problem
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-black leading-tight tracking-tight mb-6">
              Most businesses do not have a traffic problem. They have a
              conversion problem.
            </h2>
            <p className="text-base text-zinc-500 leading-relaxed max-w-md">
              Visitors are landing on your website. They are reading about your
              services. Then they are leaving without taking action. This is not
              a marketing budget problem. It is a clarity, trust, and journey
              problem.
            </p>
          </AnimatedSection>

          <div className="divide-y divide-black/8">
            {PROBLEMS.map((item, i) => (
              <AnimatedSection key={item.number} delay={i * 0.1}>
                <div className="flex gap-6 py-7">
                  <span className="font-serif text-xl text-accent font-medium flex-shrink-0 mt-0.5">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-black mb-2 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
