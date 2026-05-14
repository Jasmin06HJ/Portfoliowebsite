export function Footer() {
  return (
    <footer id="contact" className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101722] via-[#1a2540] to-[#4541FE]/20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Logo/Icon Placeholder */}
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center mb-8">
            <span className="text-white text-xl font-bold">JH</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Got a complex Problem?<br />
            Let's solve it!
          </h2>

          {/* CTA Button */}
          <div className="mb-16">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#101722] rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Get in touch
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Follow us on 𝕏
              </a>
              <span className="text-gray-600">or</span>
              <a href="mailto:hello@example.com" className="hover:text-white transition-colors duration-200">
                get in touch on ✉️
              </a>
            </div>

            <div className="hidden md:block">
              <span>©2025 Small Studio</span>
              <span className="mx-4 text-gray-600">•</span>
              <span>Monday, 5/11/2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
