import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { testimonials } from '@/content/testimonials'

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <AnimatedSection className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 block">
            What Clients Say
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-4xl text-white leading-tight tracking-tight">
            Relationships built over years, not projects.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-surface-2 border border-white/5 rounded-xl p-7 flex flex-col gap-6 h-full">
                <blockquote className="font-serif text-base text-muted-light leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white tracking-tight">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
