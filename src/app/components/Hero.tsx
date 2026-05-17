export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#101722] flex items-center justify-start overflow-hidden">
      
      {/* 👑 SCHRAUBE 1: via-80% schiebt den Start des Verlaufs extrem weit nach unten 👑 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101722] via-[#101722] via-80% to-[#4541FE] pointer-events-none" />

      {/* 👑 SCHRAUBE 2: -bottom-80 zieht die leuchtende Wolke tiefer 👑 */}
      <div className="absolute -bottom-80 left-0 right-0 h-96 bg-[#5B4CF0] opacity-50 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Hey. I{" "}
            <span className="inline-block align-middle -ml-1 mr-2 lg:-ml-2 lg:mr-3">
              <img 
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Profilbild-Kasten.png" 
                alt="Jasmin" 
                className="w-20 h-16 md:w-28 md:h-24 lg:w-32 lg:h-24 object-contain"
              />
            </span>
            <em className="italic font-serif">love</em> to simplify complex problems through thoughtful design
          </h1>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-200">
            <a
              href="mailto:jasmine.heiden@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#101722] rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Get in touch
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}