'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TRUST_STATS = [
  { value: '120+', label: 'Businesses helped' },
  { value: '5 yrs', label: 'Since 2021' },
  { value: 'US · UK · AU · CA · NG', label: 'Markets served' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-8xl mx-auto px-6 md:px-10 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-xs text-accent font-medium mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-6"
            >
              Turn more visitors into{' '}
              <em className="text-accent not-italic">enquiries, conversations</em>{' '}
              and clients.
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-lg text-muted-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              I help coaches, consultants and service businesses grow through
              conversion-focused websites, engaging communities and practical
              growth strategy.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start mb-14"
            >
              <a
                href="https://calendly.com/toyeshe20/growthsession" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent-hover transition-all duration-200 w-full sm:w-auto"
              >
                Book a Discovery Call
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center text-muted-light hover:text-white px-6 py-3.5 font-medium text-sm transition-colors duration-200"
              >
                View My Work →
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center gap-6 justify-center lg:justify-start flex-wrap"
            >
              {TRUST_STATS.map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div>
                    <strong className="block font-serif text-2xl font-medium text-white leading-none">
                      {stat.value}
                    </strong>
                    <span className="text-xs text-muted">{stat.label}</span>
                  </div>
                  {i < TRUST_STATS.length - 1 && (
                    <div className="w-px h-8 bg-white/10 flex-shrink-0" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[440px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/hammed1.jpg"
                alt="Hammed Olayinka"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>

            {/* Floating card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-8 -right-4 md:-right-10 bg-surface-2 border border-white/10 rounded-xl p-3.5 backdrop-blur-md min-w-[170px]"
            >
              <p className="text-xs text-muted font-medium mb-1">LAST 30 DAYS</p>
              <p className="text-sm font-semibold text-white">460 new followers</p>
              <p className="text-xs text-muted mt-0.5">44.5K views · 4.7K interactions</p>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-10 -left-4 md:-left-10 bg-surface-2 border border-white/10 rounded-xl p-3.5 backdrop-blur-md min-w-[155px]"
            >
              <p className="text-xs text-muted font-medium mb-1">AVERAGE RESULT</p>
              <p className="text-sm font-semibold text-white">20–40% revenue</p>
              <p className="text-xs text-muted mt-0.5">recovered per client</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
