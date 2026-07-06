import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { services } from '@/content/services'

export default function WaysIHelp() {
  return (
    <section className="py-24 bg-black" id="services">
      <Container>
        <AnimatedSection className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 block">
            Ways I Help
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-5">
            Business outcomes, not technical outputs.
          </h2>
          <p className="text-base text-muted-light max-w-xl">
            Every project starts with the business problem. The technology comes
            second. Always.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {services.map((service, i) => (
            <AnimatedSection key={service.number} delay={i * 0.1}>
              <div className="bg-surface p-10 h-full hover:bg-surface-2 transition-colors duration-300">
                <span className="font-serif text-5xl text-accent/30 font-normal leading-none block mb-6">
                  {service.number}
                </span>
                <h3 className="font-serif font-medium text-xl text-white mb-4 leading-snug tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-light leading-relaxed mb-7">
                  {service.description}
                </p>
                <ul className="space-y-2.5 list-none">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-2.5 text-xs text-muted"
                    >
                      <span className="text-accent flex-shrink-0 mt-0.5">→</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
