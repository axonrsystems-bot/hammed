export default function ContactCTA() {
  return (
    <section className="py-28 border-t border-white/5 text-center" id="contact">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5">
          Let&apos;s talk about what&apos;s{' '}
          <em className="text-accent not-italic">getting in the way</em> of your
          growth.
        </h2>
        <p className="text-base text-muted-light mb-10 leading-relaxed">
          Most businesses already have what they need to grow. They just have a
          leak somewhere in the journey. Let us find it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://calendly.com/toyeshe20/growthsession"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-200"
          >
            Book a Discovery Call
          </a>
          <a
            href="mailto:toyeshe20@gmail.com"
            className="inline-flex items-center justify-center border border-white/10 text-white px-7 py-3.5 rounded-xl font-medium text-sm hover:border-white/25 transition-all duration-200"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}
