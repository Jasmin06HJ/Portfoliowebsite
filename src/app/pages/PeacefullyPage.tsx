import { Link } from "react-router";
import { useEffect } from "react";

export function PeacefullyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Platzhalter-URLs für Bilder - diese kannst du mit deinen externen Links ersetzen
  const heroImage =
    "https://via.placeholder.com/1920x800/A5CBEC/92B495?text=Hero+Image";
  const userJourneyImage =
    "https://via.placeholder.com/1920x600/A5CBEC/92B495?text=User+Journey";
  const onboardingImage =
    "https://via.placeholder.com/800x600/A5CBEC/92B495?text=Feature+1";
  const surveysImage =
    "https://via.placeholder.com/800x600/A5CBEC/92B495?text=Feature+2";
  const homeImage =
    "https://via.placeholder.com/1200x800/A5CBEC/92B495?text=Feature+3";
  const applicationsImage1 =
    "https://via.placeholder.com/800x600/A5CBEC/92B495?text=Feature+4A";
  const applicationsImage2 =
    "https://via.placeholder.com/800x600/A5CBEC/92B495?text=Feature+4B";
  const newsEventsImage =
    "https://via.placeholder.com/1000x700/A5CBEC/92B495?text=Feature+5";

  return (
    <div className="min-h-screen">
      {/* Hero Section - Title and Info */}
      <section
        className="relative py-16 md:py-24 px-6 lg:px-12"
        style={{ backgroundColor: "#EEF4FC" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Peacefully - Energy management for people with
                ME/CFS
              </h1>
            </div>

            {/* Right: Project Info */}
            <div className="space-y-8 text-black">
              <div>
                <div className="text-sm mb-2 font-medium text-gray-700">
                  Project Length
                </div>
                <div className="text-lg">Okt 25 - Jan 26</div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium text-gray-700">
                  Team
                </div>
                <div className="text-lg">
                  Lena van Maris, Maria Camila Herrán, Jessica
                  Ulbrich, Laura Krohmer & me
                </div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium text-gray-700">
                  My Role
                </div>
                <div className="text-lg">
                  Research, Concept Development, UX & UI Design,
                  Prototyping, Testing{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image - Full Width */}
      <section
        className="relative w-full"
        style={{ backgroundColor: "#EEF4FC" }}
      >
        <img
          src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-hero.png"
          alt="Peacefully project hero image"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Why we designed Peacefully Section */}
      <section
        className="relative pt-20 pb-32 px-6 lg:px-12"
        style={{ backgroundColor: "#121412" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-16 pb-3 inline-block"
            style={{
              borderBottom:
                "4px solid rgba(146, 180, 149, 0.5)",
            }}
          >
            Why we designed Peacefully
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Problem */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Problem
              </div>
              <p className="text-gray-200 leading-relaxed">
                Even minimal physical or mental effort can
                trigger severe crashes for people with ME/CFS,
                lasting days, weeks, or longer. Because energy
                limits are invisible and unpredictable, users
                constantly risk overexertion and loss of
                control.{" "}
              </p>
            </div>

            {/* The Status Quo */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Status Quo
              </div>
              <p className="text-gray-200 leading-relaxed">
                Patients rely on subjective judgment, manual
                tracking, or fragmented tools. There is no
                system that translates body signals into clear
                guidance, making energy management mentally
                exhausting.
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Solution
              </div>
              <p className="text-gray-200 leading-relaxed">
                Peacefully combines a smartwatch and app to
                track physiological data and translate it into
                personalized, real-time recommendations. Users
                understand their energy limits, make safer
                decisions, and reduce mental load through
                automated guidance.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section
        className="relative py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#EEF4FC" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block"
            style={{
              borderBottom:
                "4px solid rgba(146, 180, 149, 0.5)",
            }}
          >
            Research
          </h2>

          <p className="text-gray-800 mb-12 leading-relaxed">
            To understand the daily challenges of people living
            with ME/CFS, we conducted asynchronous, text-based
            interviews with affected individuals, as live
            conversations would have required significant
            preparation and energy that many could not
            afford. We complemented these insights with social
            listening, analyzing podcasts and personal accounts
            shared by patients. 
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
                  style={{ color: "rgba(146, 180, 149, 0.8)" }}
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
                Unpredictable energy limits{" "}
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  Users cannot reliably anticipate how much
                  physical or mental activity will trigger a
                  crash, making everyday decisions risky and
                  uncertain.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/60 border border-gray-300 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  style={{ color: "rgba(146, 180, 149, 0.8)" }}
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
                Severe and long-lasting crashes{" "}
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  Even minimal exertion can lead to debilitating
                  symptom flare-ups that last days, weeks, or
                  longer, with the risk of not returning to the
                  previous baseline.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/60 border border-gray-300 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  style={{ color: "rgba(146, 180, 149, 0.8)" }}
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
                High cognitive and emotional burden
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  Constantly monitoring, planning, and limiting
                  activities requires significant mental effort,
                  leading to stress, frustration, and a loss of
                  independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iteration & Testing Section */}
      <section
        className="relative py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#EEF4FC" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block"
            style={{
              borderBottom:
                "4px solid rgba(146, 180, 149, 0.5)",
            }}
          >
            Iteration & Testing
          </h2>

          <div className="mb-12 space-y-4 text-gray-800 leading-relaxed">
            <p>
              For iteration and testing, we used early
              functional prototypes to explore text clarity,
              information density, and haptic feedback on the
              smartwatch. We also tested how users prefer to be
              prompted to take breaks and whether health data
              should be visualized or kept minimal.
            </p>
            <p>
              Due to the condition’s constraints, testing with
              ME/CFS patients was limited, so we complemented
              our approach with proxy users and prior research.
              This helped us define intuitive and supportive
              interactions.
            </p>
          </div>

          {/* Image under Paragraph 1 */}
          <div className="mb-12">
            <img
              src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-Testing.png"
              alt="Iteration and testing illustration"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Prototype Screenshots - Custom Layout */}
          <div className="relative space-y-12"></div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative w-full">
        <img
          src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-Zwischenbild3.png"
          alt="Full width illustration"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* The Result Section */}
      <section
        className="relative py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#EEF4FC" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block"
            style={{
              borderBottom:
                "4px solid rgba(146, 180, 149, 0.5)",
            }}
          >
            The result
          </h2>

          <p className="text-gray-800 mb-16 leading-relaxed">
            By addressing the key challenges identified during
            testing, we shaped Peacefully into a focused
            solution that supports people with ME/CFS, with
            features carefully tailored to their needs across
            the entire energy management journey.
          </p>

          {/* 01 Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                01 Daily energy companion
              </h3>
              <p className="text-gray-800 leading-relaxed">
                The smartwatch tracks sleep quality and key
                physiological signals like heart rate, body
                temperature and activity levels to directly
                calculate the user’s daily energy level. Based
                on this, it supports personalized energy
                management throughout the day. After waking,
                users can optionally view their sleep insights,
                while the system continuously guides them to
                pace their energy in a safe and optimal way{" "}
              </p>
            </div>

            {/* Right: Feature 1 Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-result1.png"
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
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-result2.png"
                alt="Feature 2 screens"
                className="w-full max-w-2xl h-auto"
              />
            </div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold text-black mb-6">
                02 Voice-controlled interaction
              </h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                The smartwatch enables hands-free communication
                via voice to reduce cognitive and physical
                strain. Users can easily check their daily
                schedule, manage existing appointments, or
                create new ones through simple voice commands. 
              </p>
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/peacefully-result2.1.png"
                alt="Feature detail"
                className="w-1/2 h-auto mx-auto"
              />
            </div>
          </div>

          {/* 03 Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                03 Optimized & automated energy management
              </h3>
              <p className="text-gray-800 leading-relaxed">
                The calendar combines scheduled appointments
                with automatically adjusted recovery breaks
                based on real-time energy levels. It not only
                balances activity and rest to prevent overload,
                but also suggests suitable activities for
                remaining energy—reducing cognitive load and
                making daily pacing more effortless.
              </p>
            </div>

            {/* Right: Feature 3 Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-result3.png"
                alt="Feature 3 screens"
                className="w-full max-w-4xl h-auto"
              />
            </div>
          </div>

          {/* 04 Feature 4 */}
          <div className="space-y-16">
            {/* Top Row: Image left, Text right */}

            {/* Bottom Row: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Second Image */}
              <div className="flex justify-center lg:justify-start"></div>

              {/* Right: Text */}
              <div></div>
            </div>
          </div>

          {/* 05 Feature 5 */}
        </div>
      </section>

      {/* Full Width Image Section 2 */}
      <section className="relative w-full">
        <img
          src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-Zwischenbild2.png"
          alt="Full width illustration"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Want to see more? - Other Projects */}
      <section
        className="py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#EEF4FC" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Want to see more?
            </h2>
            <p className="text-xl text-gray-700">
              Other projects
            </p>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card - Younite */}
            <Link
              to="/projects/younite"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Younite-hero.png"
                  alt="Vía Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-black transition-colors"
                  style={{ color: "rgba(146, 180, 149, 1)" }}
                >
                  Younite
                </h3>
                <p className="text-gray-700 mt-2">
                  Youth Council digital solution
                </p>
              </div>
            </Link>

            {/* Project Card - Vía */}
            <Link
              to="/projects/via"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-hero.png"
                  alt="Vía Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-black transition-colors"
                  style={{ color: "rgba(146, 180, 149, 1)" }}
                >
                  Vía
                </h3>
                <p className="text-gray-700 mt-2">
                  Travel and navigation platform
                </p>
              </div>
            </Link>

            {/* Project Card - Koino */}
            <Link
              to="/projects/koino"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] w-full bg-gray-100">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-Hero-klein.png"
                  alt="Younite Project Cover"
                  className="w-full h-full object-cover"
                />{" "}
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-black transition-colors"
                  style={{ color: "rgba(146, 180, 149, 1)" }}
                >
                  Koino
                </h3>
                <p className="text-gray-700 mt-2">
                  Community platform
                </p>
              </div>
            </Link>
          </div>

          {/* Back to all projects link */}
          <div className="mt-12 text-center">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 hover:text-black transition-colors duration-300 font-medium"
              style={{ color: "rgba(146, 180, 149, 0.8)" }}
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
      <footer
        className="relative py-32 overflow-hidden"
        style={{ backgroundColor: "#EEF4FC" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Logo/Icon Placeholder */}
                    <img 
    src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Profilbild-Kasten.png" 
    alt="Jasmin" 
    /* mb-4 sorgt für den sehr geringen Abstand zur Überschrift darunter */
    className="w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-24 object-contain rounded-lg mb-4" 
  />

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
              Got a complex Problem?
              <br />
              Let's solve it!
            </h2>

            {/* CTA Button */}
            <div className="mb-16">
              <a
                href="mailto:jasmine.heiden@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{
                  backgroundColor: "rgba(146, 180, 149, 0.8)",
                }}
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

          {/* Bottom Row */}
            <div className="flex items-center justify-between text-sm text-gray-700">
              <div className="flex items-center gap-6">
                {/* 👑 HIER GEÄNDERT: Imprint und Privacy Links statt X und Email 👑 */}
                <Link
                  to="/imprint"
                  className="hover:text-black transition-colors duration-200"
                >
                  Imprint
                </Link>
                <span className="text-gray-400">|</span>
                <Link
                  to="/privacy"
                  className="hover:text-black transition-colors duration-200"
                >
                  Privacy
                </Link>
              </div>

              <div className="hidden md:block">
                <span>©2026 Jasmin Heiden</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}