import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import WaysIHelp from '@/components/sections/WaysIHelp'
import FeaturedWork from '@/components/sections/FeaturedWork'
import Professionals from '@/components/sections/Professionals'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FunnelAudit from '@/components/sections/FunnelAudit'
import About from '@/components/sections/About'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WaysIHelp />
      <FeaturedWork />
      <Professionals />
      <Process />
      <Testimonials />
      <FunnelAudit />
      <About />
      <ContactCTA />
    </main>
  )
}
