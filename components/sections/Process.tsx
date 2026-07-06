import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { processSteps } from '@/content/process'

export default function Process() {
  return (
    <section className="py-24 bg-black" id="process">
      <Container>
        <AnimatedSection className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 block">
            My Process
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-5">
            From first conversation to live and converting.
          </h2>
          <p className="text-base text-muted-light max-w-xl">
            Every engagement follows the same four steps. No surprises.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-accent/10 rounded-xl overflow-hidden">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="bg-black p-8 h-full">
                <span className="font-serif text-4xl text-accent/25 font-normal leading-none block mb-5">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
