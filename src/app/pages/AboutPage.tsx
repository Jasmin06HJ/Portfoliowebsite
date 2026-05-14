import { Link } from 'react-router';

// Image URLs - Replace these with your actual image URLs
const aboutHeroImage = "[YOUR_HERO_IMAGE_URL]";
const aboutImage1 = "[YOUR_IMAGE_1_URL]";
const aboutImage2 = "[YOUR_IMAGE_2_URL]";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#101722]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div className="text-white">
              <div className="text-[#4541FE] text-sm mb-6 font-medium">
                About me
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                [Your Headline]
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                [Introduction paragraph - Tell your story, what drives you, your passion for design]
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                [Second paragraph - Your background, experience, or what makes you unique]
              </p>
            </div>

            {/* Right: Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutHeroImage}
                alt="About me hero"
                className="w-full max-w-lg h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-3 border-b-4 border-[#4541FE] inline-block">
            My Story
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                [Paragraph 1 - Your journey, how you got started in UX/UI design]
              </p>
              <p>
                [Paragraph 2 - Key experiences, turning points, or projects that shaped you]
              </p>
              <p>
                [Paragraph 3 - Your approach to design, methodology, or philosophy]
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutImage1}
                alt="Story visual"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#101722]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-3 border-b-4 border-[#4541FE] inline-block">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Skill Category 1 */}
            <div className="bg-[#1a2332] rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#4541FE]/10 rounded-xl">
                <svg
                  className="w-6 h-6 text-[#4541FE]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                [Skill Category 1]
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
                <li>[Skill 4]</li>
              </ul>
            </div>

            {/* Skill Category 2 */}
            <div className="bg-[#1a2332] rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#4541FE]/10 rounded-xl">
                <svg
                  className="w-6 h-6 text-[#4541FE]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                [Skill Category 2]
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
                <li>[Skill 4]</li>
              </ul>
            </div>

            {/* Skill Category 3 */}
            <div className="bg-[#1a2332] rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#4541FE]/10 rounded-xl">
                <svg
                  className="w-6 h-6 text-[#4541FE]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                [Skill Category 3]
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
                <li>[Skill 4]</li>
              </ul>
            </div>
          </div>

          {/* Tools Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Tools I Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Protopie'].map((tool, index) => (
                <div
                  key={index}
                  className="bg-[#1a2332] rounded-xl p-6 border border-white/10 flex items-center justify-center text-center hover:border-[#4541FE] transition-colors duration-300"
                >
                  <span className="text-gray-300 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values or Approach Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-3 border-b-4 border-[#4541FE] inline-block">
            My Approach
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src={aboutImage2}
                alt="Approach visual"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Right: Text */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Value 1 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  [Value/Principle 1]
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  [Description of your first value or design principle]
                </p>
              </div>

              {/* Value 2 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  [Value/Principle 2]
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  [Description of your second value or design principle]
                </p>
              </div>

              {/* Value 3 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  [Value/Principle 3]
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  [Description of your third value or design principle]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#101722]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's work together
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            [Call-to-action text - Invite collaboration, projects, or conversations]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#4541FE] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4541FE]/20"
            >
              Get in touch
            </Link>
            <Link
              to="/cv"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-[#4541FE] text-[#4541FE] rounded-full font-medium transition-all duration-300 hover:bg-[#4541FE] hover:text-white"
            >
              View CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
