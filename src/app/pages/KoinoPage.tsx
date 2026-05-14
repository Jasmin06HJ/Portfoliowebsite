import { Link } from 'react-router';

export function KoinoPage() {
  // Platzhalter-URLs für Bilder - diese kannst du mit deinen externen Links ersetzen
  const heroImage = "https://via.placeholder.com/1920x800/ECF8F6/176963?text=Hero+Image";
  const userJourneyImage = "https://via.placeholder.com/1920x600/ECF8F6/176963?text=User+Journey";
  const onboardingImage = "https://via.placeholder.com/800x600/ECF8F6/176963?text=Feature+1";
  const surveysImage = "https://via.placeholder.com/800x600/ECF8F6/176963?text=Feature+2";
  const homeImage = "https://via.placeholder.com/1200x800/ECF8F6/176963?text=Feature+3";
  const applicationsImage1 = "https://via.placeholder.com/800x600/ECF8F6/176963?text=Feature+4A";
  const applicationsImage2 = "https://via.placeholder.com/800x600/ECF8F6/176963?text=Feature+4B";
  const newsEventsImage = "https://via.placeholder.com/1000x700/ECF8F6/176963?text=Feature+5";

  return (
    <div className="min-h-screen">
      {/* Hero Section - Title and Info */}
      <section className="relative py-16 md:py-24 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Koino - [Project Title]
              </h1>
            </div>

            {/* Right: Project Info */}
            <div className="space-y-8 text-black">
              <div>
                <div className="text-sm mb-2 font-medium text-gray-700">
                  Project Length
                </div>
                <div className="text-lg">[Add dates]</div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium text-gray-700">
                  Team
                </div>
                <div className="text-lg">
                  [Add team members]
                </div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium text-gray-700">
                  My Role
                </div>
                <div className="text-lg">
                  [Add your role and responsibilities]
                </div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium text-gray-700">
                  Tools
                </div>
                <div className="text-lg">
                  [Add tools used]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="w-full">
          <img
            src={heroImage}
            alt="Koino Hero"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            Project Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                [Add main project description paragraph 1]
              </p>
              <p className="text-lg leading-relaxed">
                [Add main project description paragraph 2]
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                [Add main project description paragraph 3]
              </p>
              <p className="text-lg leading-relaxed">
                [Add main project description paragraph 4]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I designed Koino Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#071C1B' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            Why I designed Koino
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Problem */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Problem
              </div>
              <p className="text-gray-200 leading-relaxed">
                [Describe the problem this project solves]
              </p>
            </div>

            {/* The Status Quo */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Status Quo
              </div>
              <p className="text-gray-200 leading-relaxed">
                [Describe the current situation before your solution]
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Solution
              </div>
              <p className="text-gray-200 leading-relaxed">
                [Describe your solution approach]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            User Journey
          </h2>

          <p className="text-lg text-black leading-relaxed mb-12 max-w-4xl">
            [Add description of user journey]
          </p>

          <div className="w-full">
            <img
              src={userJourneyImage}
              alt="User Journey"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            [Feature 1 Title - e.g., Onboarding]
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                [Feature Subtitle]
              </h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                [Feature description paragraph 1]
              </p>
              <p className="text-lg text-black leading-relaxed">
                [Feature description paragraph 2]
              </p>
            </div>
            <div>
              <img
                src={onboardingImage}
                alt="Feature 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Surveys Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            [Feature 2 Title - e.g., Surveys]
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={surveysImage}
                alt="Feature 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-black mb-6">
                [Feature Subtitle]
              </h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                [Feature description paragraph 1]
              </p>
              <p className="text-lg text-black leading-relaxed">
                [Feature description paragraph 2]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            [Feature 3 Title - e.g., Home]
          </h2>

          <p className="text-lg text-black leading-relaxed mb-12 max-w-4xl">
            [Feature description]
          </p>

          <div className="w-full">
            <img
              src={homeImage}
              alt="Feature 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            [Feature 4 Title - e.g., Applications]
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-black leading-relaxed">
                [Feature description part 1]
              </p>
            </div>
            <div>
              <p className="text-lg text-black leading-relaxed">
                [Feature description part 2]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={applicationsImage1}
              alt="Feature 4 - Part 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src={applicationsImage2}
              alt="Feature 4 - Part 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            [Feature 5 Title - e.g., News & Events]
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                [Feature Subtitle]
              </h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                [Feature description paragraph 1]
              </p>
              <p className="text-lg text-black leading-relaxed">
                [Feature description paragraph 2]
              </p>
            </div>
            <div>
              <img
                src={newsEventsImage}
                alt="Feature 5"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16 pb-3 inline-block" style={{ borderBottom: '4px solid #176963' }}>
            Learnings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                [Learning paragraph 1]
              </p>
              <p className="text-lg leading-relaxed">
                [Learning paragraph 2]
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                [Learning paragraph 3]
              </p>
              <p className="text-lg leading-relaxed">
                [Learning paragraph 4]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Want to see more? - Other Projects */}
      <section className="py-20 px-6 lg:px-12" style={{ backgroundColor: '#ECF8F6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Want to see more?
            </h2>
            <p className="text-xl text-gray-700">Other projects</p>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card - Younite */}
            <Link
              to="/projects/younite"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black group-hover:text-[#176963] transition-colors">
                  Younite
                </h3>
                <p className="text-gray-600 mt-2">Youth Council digital solution</p>
              </div>
            </Link>

            {/* Project Card - Vía */}
            <Link
              to="/projects/via"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black group-hover:text-[#176963] transition-colors">
                  Vía
                </h3>
                <p className="text-gray-600 mt-2">Travel and navigation platform</p>
              </div>
            </Link>

            {/* Project Card - Peacefully */}
            <Link
              to="/projects/peacefully"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black group-hover:text-[#176963] transition-colors">
                  Peacefully
                </h3>
                <p className="text-gray-600 mt-2">Mindfulness and wellness app</p>
              </div>
            </Link>
          </div>

          {/* Back to all projects link */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#176963] hover:text-black transition-colors duration-300 font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-32 overflow-hidden" style={{ backgroundColor: '#071C1B' }}>
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#176963] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}