import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'

const SKILLS = [
  'Next.js 15',
  'WordPress',
  'Circle.so',
  'Mighty Networks',
  'Vercel',
  'Shopify',
  'LearnDash',
  'WooCommerce',
  'CRO Audits',
  'Instagram Growth',
  'Supabase',
  'TypeScript',
]

export default function About() {
  return (
    <section className="py-24 bg-light-bg" id="about">
      <Container>
        <AnimatedSection className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 block">
            About Hammed
          </span>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimatedSection direction="left">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-black/8">
              <Image
                src="/images/hammed2.jpg"
                alt="Hammed Olayinka"
                width={600}
                height={750}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="text-black">
              <h2 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl text-black leading-tight tracking-tight mb-7">
                The right result matters more than the right technology.
              </h2>
              <div className="space-y-5 text-base text-zinc-500 leading-relaxed">
                <p>
                  I studied Statistics at Federal Polytechnic Ede, Nigeria. That
                  background taught me something more valuable than any
                  programming language: how to look at a system, find where it is
                  failing, and fix the right thing instead of just the most
                  obvious one.
                </p>
                <p>
                  Since 2021, I have worked with over 120 businesses across the
                  US, UK, Australia, and Canada. Coaches, consultants, SaaS
                  founders, community builders, and ecommerce brands. The work
                  has ranged from single landing pages to full SaaS platforms.
                  The goal has always been the same: help the business convert
                  more of the visitors it is already getting.
                </p>
                <p>
                  I am based in Nigeria and I work globally. The two coexist
                  without compromise. My clients stay with me for years, not
                  projects. That is the standard I hold myself to.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-black/6 text-zinc-600 px-3 py-1.5 rounded-full border border-black/8"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
