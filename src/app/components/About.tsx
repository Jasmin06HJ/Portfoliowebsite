export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Blue/Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4541FE] via-[#5B4CF0] to-[#7B61FF]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Section Label */}
          <div className="text-white/70 text-sm mb-8 font-medium">
            [01] About me
          </div>

          {/* About Text */}
          <div className="space-y-6 text-white/90">
            <p className="text-xl md:text-2xl leading-relaxed">
              With a background across media, business, and design – from Bayerischer Rundfunk to DHBW Ravensburg — I have learned how to navigate complexity.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed font-semibold">
              Now at pub.tech, I help design digital products that turn complex ideas into intuitive experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
