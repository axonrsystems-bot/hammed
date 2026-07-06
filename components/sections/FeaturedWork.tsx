import Link from 'next/link'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { projects } from '@/content/projects'

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-light-bg" id="work">
      <Container>
        <AnimatedSection className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 block">
            Selected Work
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-black leading-tight tracking-tight mb-5">
            Built for businesses, not portfolios.
          </h2>
          <p className="text-base text-zinc-500 max-w-xl">
            Each project below started with a business problem. The build came
            second.
          </p>
        </AnimatedSection>

        <div className="rounded-xl overflow-hidden divide-y divide-black/6 border border-black/6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:grid md:grid-cols-[220px_1fr] gap-8 bg-white hover:bg-zinc-50 transition-colors duration-200 p-8 md:p-10 block"
              >
                <div className="flex-shrink-0">
                  <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                    {project.category}
                  </p>
                  <h3 className="font-serif font-medium text-xl text-black mb-2 leading-snug tracking-tight group-hover:text-accent transition-colors duration-200">
                    {project.client}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.tech.join(' · ')}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">
                    The Challenge
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    {project.challenge}
                  </p>
                  <div className="flex flex-wrap gap-8 pt-5 border-t border-black/6">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome.label}>
                        <strong className="block font-serif text-2xl font-medium text-black leading-none mb-1">
                          {outcome.value}
                        </strong>
                        <span className="text-xs text-zinc-400">
                          {outcome.label}
                        </span>
                      </div>
                    ))}
                    <div className="ml-auto self-end">
                      <span className="text-xs text-accent font-medium group-hover:underline">
                        View project →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
