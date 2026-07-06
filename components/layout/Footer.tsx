import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

const FOOTER_LINKS = {
  Work: [
    { label: 'Portfolio', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Axonr Digital', href: 'https://axonrdigital.com', external: true },
  ],
  Connect: [
    { label: 'Email', href: 'mailto:toyeshe20@gmail.com', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/hammedolayinka', external: true },
    { label: 'Instagram', href: 'https://instagram.com/hammed.axonr', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Hammed Olayinka"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Helping service businesses turn more website visitors into
              enquiries, conversations and paying clients.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-sm font-semibold text-white mb-4 tracking-tight">
                {title}
              </h5>
              <ul className="space-y-3 list-none">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Hammed Olayinka
          </p>
          <p className="text-xs text-muted">Built with Next.js · Deployed on Vercel</p>
        </div>
      </Container>
    </footer>
  )
}
