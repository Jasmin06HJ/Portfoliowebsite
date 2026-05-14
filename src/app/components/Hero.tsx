export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101722] via-[#1a2540] to-[#4541FE]/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
        <div className="max-w-4xl">
          {/* Main Heading with animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Hey. I{' '}
            <span className="inline-flex items-center gap-2">
              <span className="inline-block w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-300" />
            </span>{' '}
            <em className="italic font-serif">love</em> to simplify complex problems through thoughtful design
          </h1>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-200">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#101722] rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Get in touch
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
