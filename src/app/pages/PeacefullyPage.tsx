import { Link } from 'react-router';

export function PeacefullyPage() {
  // Platzhalter-URLs für Bilder - diese kannst du mit deinen externen Links ersetzen
  const heroImage = "https://via.placeholder.com/1920x800/A5CBEC/92B495?text=Hero+Image";
  const userJourneyImage = "https://via.placeholder.com/1920x600/A5CBEC/92B495?text=User+Journey";
  const onboardingImage = "https://via.placeholder.com/800x600/A5CBEC/92B495?text=Feature+1";
  const surveysImage = "https://via.placeholder.com/800x600/A5CBEC/92B495?text=Feature+2";
  const homeImage = "https://via.placeholder.com/1200x800/A5CBEC/92B495?text=Feature+3";
  const applicationsImage1 = "https://via.placeholder.com/800x600/A5CBEC/92B495?text=Feature+4A";
  const applicationsImage2 = "https://via.placeholder.com/800x600/A5CBEC/92B495?text=Feature+4B";
  const newsEventsImage = "https://via.placeholder.com/1000x700/A5CBEC/92B495?text=Feature+5";

  return (
    <div className="min-h-screen">
      {/* Hero Section - Title and Info */}
      <section className="relative py-16 md:py-24 px-6 lg:px-12" style={{ backgroundColor: '#EEF4FC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Peacefully - [Project Title]
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
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image - Full Width */}
      <section className="relative w-full">
        <img
          src={heroImage}
          alt="Peacefully project hero image"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Why we designed Peacefully Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#121412' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 pb-3 inline-block" style={{ borderBottom: '4px solid rgba(146, 180, 149, 0.5)' }}>
            Why we designed Peacefully
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

      {/* Research Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#EEF4FC' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block" style={{ borderBottom: '4px solid rgba(146, 180, 149, 0.5)' }}>
            Research
          </h2>

          <p className="text-gray-800 max-w-4xl mb-12 leading-relaxed">
            [Add your research description and findings here]
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-6">
              The Painpoints
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/60 border border-gray-300 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  style={{ color: 'rgba(146, 180, 149, 0.8)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-4">
                [Painpoint Title 1]
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  [Describe first painpoint]
                </p>
                <p>
                  [Additional details about painpoint]
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/60 border border-gray-300 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  style={{ color: 'rgba(146, 180, 149, 0.8)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-4">
                [Painpoint Title 2]
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  [Describe second painpoint]
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/60 border border-gray-300 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  style={{ color: 'rgba(146, 180, 149, 0.8)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-4">
                [Painpoint Title 3]
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  [Describe third painpoint]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#EEF4FC' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block" style={{ borderBottom: '4px solid rgba(146, 180, 149, 0.5)' }}>
            User Journey
          </h2>

          <p className="text-gray-800 mb-12 leading-relaxed">
            [Describe your user journey mapping process and key insights]
          </p>

          <div className="relative">
            <img
              src={userJourneyImage}
              alt="User Journey mapping"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Iteration & Testing Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#EEF4FC' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block" style={{ borderBottom: '4px solid rgba(146, 180, 149, 0.5)' }}>
            Iteration & Testing
          </h2>

          <div className="mb-12 space-y-4 text-gray-800 leading-relaxed">
            <p>
              [Describe your iterative prototyping and testing process - Paragraph 1]
            </p>
            <p>
              [Describe validation methods and early prototypes - Paragraph 2]
            </p>
            <p>
              [Describe testing rounds and design adjustments - Paragraph 3]
            </p>
          </div>

          {/* Prototype Screenshots - Custom Layout */}
          <div className="relative space-y-12">
            {/* Row 1: Example iteration */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Label */}
              <h3 className="text-lg font-bold text-black md:w-48 flex-shrink-0">
                [Iteration Label 1]
              </h3>

              {/* Screen 1 */}
              <div className="aspect-[9/16] w-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Screen 1</span>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Screen 2 */}
              <div className="aspect-[9/16] w-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Screen 2</span>
              </div>
            </div>

            {/* Row 2: Another iteration */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Label */}
              <h3 className="text-lg font-bold text-black md:w-48 flex-shrink-0">
                [Iteration Label 2]
              </h3>

              {/* Screen 3 */}
              <div className="aspect-[9/16] w-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Screen 3</span>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Screen 4 */}
              <div className="aspect-[9/16] w-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Screen 4</span>
              </div>

              {/* Screen 5 */}
              <div className="aspect-[9/16] w-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Screen 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Result Section */}
      <section className="relative py-20 px-6 lg:px-12" style={{ backgroundColor: '#EEF4FC' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block" style={{ borderBottom: '4px solid rgba(146, 180, 149, 0.5)' }}>
            The result
          </h2>

          <p className="text-gray-800 mb-16 leading-relaxed max-w-4xl">
            [Describe the final solution and how it addresses the identified needs]
          </p>

          {/* 01 Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">01 [Feature Title 1]</h3>
              <p className="text-gray-800 leading-relaxed">
                [Describe first key feature of your solution]
              </p>
            </div>

            {/* Right: Feature 1 Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={onboardingImage}
                alt="Feature 1 screens"
                className="w-full max-w-2xl h-auto"
              />
            </div>
          </div>

          {/* 02 Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Feature 2 Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src={surveysImage}
                alt="Feature 2 screens"
                className="w-full max-w-2xl h-auto"
              />
            </div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-black mb-6">02 [Feature Title 2]</h3>
              <p className="text-gray-800 leading-relaxed">
                [Describe second key feature of your solution]
              </p>
            </div>
          </div>

          {/* 03 Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">03 [Feature Title 3]</h3>
              <p className="text-gray-800 leading-relaxed">
                [Describe third key feature of your solution]
              </p>
            </div>

            {/* Right: Feature 3 Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={homeImage}
                alt="Feature 3 screens"
                className="w-full max-w-4xl h-auto"
              />
            </div>
          </div>

          {/* 04 Feature 4 */}
          <div className="space-y-16">
            {/* Top Row: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: First Image */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={applicationsImage1}
                  alt="Feature 4A screens"
                  className="w-full max-w-2xl h-auto"
                />
              </div>

              {/* Right: Text */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">04 [Feature Title 4]</h3>
                <p className="text-gray-800 leading-relaxed">
                  [Describe fourth key feature - Part 1]
                </p>
              </div>
            </div>
            {/* Bottom Row: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Second Image */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={applicationsImage2}
                  alt="Feature 4B screens"
                  className="w-full max-w-2xl h-auto"
                />
              </div>

              {/* Right: Text */}
              <div>
                <p className="text-gray-800 leading-relaxed">
                  [Describe fourth key feature - Part 2]
                </p>
              </div>
            </div>
          </div>

          {/* 05 Feature 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">05 [Feature Title 5]</h3>
              <p className="text-gray-800 leading-relaxed">
                [Describe fifth key feature of your solution]
              </p>
            </div>

            {/* Right: Feature 5 Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={newsEventsImage}
                alt="Feature 5 screens"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Want to see more? - Other Projects */}
      <section className="py-20 px-6 lg:px-12" style={{ backgroundColor: '#EEF4FC' }}>
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
                <h3 className="text-xl font-bold text-black transition-colors" style={{ color: 'rgba(146, 180, 149, 1)' }}>
                  Younite
                </h3>
                <p className="text-gray-700 mt-2">Youth Council digital solution</p>
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
                <h3 className="text-xl font-bold text-black transition-colors" style={{ color: 'rgba(146, 180, 149, 1)' }}>
                  Vía
                </h3>
                <p className="text-gray-700 mt-2">Travel and navigation platform</p>
              </div>
            </Link>

            {/* Project Card - Koino */}
            <Link
              to="/projects/koino"
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
                <h3 className="text-xl font-bold text-black transition-colors" style={{ color: 'rgba(146, 180, 149, 1)' }}>
                  Koino
                </h3>
                <p className="text-gray-700 mt-2">Community platform</p>
              </div>
            </Link>
          </div>

          {/* Back to all projects link */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 hover:text-black transition-colors duration-300 font-medium"
              style={{ color: 'rgba(146, 180, 149, 0.8)' }}
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
      <footer className="relative py-32 overflow-hidden" style={{ backgroundColor: '#EEF4FC' }}>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Logo/Icon Placeholder */}
            <div className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center mb-8">
              <span className="text-black text-xl font-bold">JH</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
              Got a complex Problem?<br />
              Let's solve it!
            </h2>

            {/* CTA Button */}
            <div className="mb-16">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{ backgroundColor: 'rgba(146, 180, 149, 0.8)' }}
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
            <div className="flex items-center justify-between text-sm text-gray-700">
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-black transition-colors duration-200">
                  Follow us on 𝕏
                </a>
                <span className="text-gray-500">or</span>
                <a href="mailto:hello@example.com" className="hover:text-black transition-colors duration-200">
                  get in touch on ✉️
                </a>
              </div>

              <div className="hidden md:block">
                <span>©2025 Small Studio</span>
                <span className="mx-4 text-gray-500">•</span>
                <span>Monday, 5/12/2026</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}