import { Link } from "react-router";
import { useEffect } from "react";
export function KoinoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Platzhalter-URLs für Bilder - diese kannst du mit deinen externen Links ersetzen
  const heroImage =
    "https://via.placeholder.com/1920x800/ECF8F6/176963?text=Hero+Image";
  const userJourneyImage =
    "https://via.placeholder.com/1920x600/ECF8F6/176963?text=User+Journey";
  const onboardingImage =
    "https://via.placeholder.com/800x600/ECF8F6/176963?text=Feature+1";
  const surveysImage =
    "https://via.placeholder.com/800x600/ECF8F6/176963?text=Feature+2";
  const homeImage =
    "https://via.placeholder.com/1200x800/ECF8F6/176963?text=Feature+3";
  const applicationsImage1 =
    "https://via.placeholder.com/800x600/ECF8F6/176963?text=Feature+4A";
  const applicationsImage2 =
    "https://via.placeholder.com/800x600/ECF8F6/176963?text=Feature+4B";
  const newsEventsImage =
    "https://via.placeholder.com/1000x700/ECF8F6/176963?text=Feature+5";

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Title and Info */}
      <section
        className="relative py-16 md:py-24 px-6 lg:px-12"
        style={{ backgroundColor: "#ECF8F6" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Koino - Find your people. Create your moments.
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
                <div className="text-lg">me</div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium text-gray-700">
                  My Role
                </div>
                <div className="text-lg">
                  Research, Concept Development, UX & UI Design,
                  Prototyping, Testing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image - Edge to Edge */}
      <section className="w-full bg-[#ECF8F6]">
        <img
          src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-Hero.png"
          alt="Koino Hero"
          className="w-full h-auto object-cover block"
        />
      </section>

      {/* Why I designed Koino Section */}
      <section
        className="relative py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#071C1B" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-16 pb-3 inline-block"
            style={{ borderBottom: "4px solid #176963" }}
          >
            Why I designed Koino
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Problem */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Problem
              </div>
              <p className="text-gray-200 leading-relaxed">
                Loneliness has become a widespread issue in
                Germany, affecting 19% to over 40% of people.
                Especially in large cities, it’s hard to find
                like-minded people and turn that into real-life
                connections. Building new relationships often
                takes initiative, time, and effort—barriers that
                stop many before they even start.
              </p>
            </div>

            {/* The Status Quo */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Status Quo
              </div>
              <p className="text-gray-200 leading-relaxed">
                Today, social interaction relies on individuals
                to make the first move. Platforms exist, but
                they require effort: searching, posting,
                waiting. Too often, good intentions never turn
                into actual meetups.
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Solution
              </div>
              <p className="text-gray-200 leading-relaxed">
                Koino makes connecting easier. AI creates
                relevant events nearby and matches people with
                shared interests. Instead of planning and
                coordinating, users can simply join—turning
                intention into real interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section
        className="relative py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#ECF8F6" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block"
            style={{ borderBottom: "4px solid #176963" }}
          >
            Research
          </h2>

          <p className="text-gray-800 mb-12 leading-relaxed">
            To better understand the challenges behind social
            connection in urban environments, I conducted focus
            groups with diverse participants living in large
            cities. The goal was to uncover shared behaviors,
            frustrations, and unmet needs around meeting new
            people and building real connections.
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
                  style={{ color: "#176963" }}
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
                High barrier to initiation{" "}
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  Connecting with new people often requires
                  someone to take the first step—suggesting
                  ideas, organizing, and motivating others,
                  which many find uncomfortable or exhausting.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/60 border border-gray-300 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  style={{ color: "#176963" }}
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
                From intention to action gap{" "}
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  Even when people want to meet others, plans
                  rarely materialize. Coordination takes time,
                  responses are uncertain, and momentum is
                  easily lost.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/60 border border-gray-300 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  style={{ color: "#176963" }}
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
                Difficulty finding relevant connections{" "}
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  Existing platforms make it hard to find people
                  with genuinely shared interests nearby,
                  leading to interactions that feel random or
                  don’t result in meaningful meetups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Result Section - TEIL 1 (Features 1 bis 3) */}
      <section
        className="relative py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#ECF8F6" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-6 pb-3 inline-block"
            style={{ borderBottom: "4px solid #176963" }}
          >
            The result
          </h2>

          <p className="text-gray-800 mb-16 leading-relaxed">
            Driven by real user insights, Koino transforms the
            way people connect—turning the challenge of meeting
            others into a seamless experience through intuitive,
            AI-powered features.
          </p>

          {/* 01 Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                01 Personal Profile
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Define your interests and skills to unlock more
                relevant connections. Get matched with the right
                people, discover tailored events, and see your
                impact through your past activity and
                engagement.{" "}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-results1.png"
                alt="Feature 1 screens"
                className="w-full max-w-48 lg:max-w-72 h-auto"
              />
            </div>
          </div>

          {/* 02 Feature 2 */}
          <div className="mb-20">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-6">
                02 Home Feed & Filtering
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Explore everything in one place. Filter between
                events, requests, offers, and more, so you
                always see what matters to you, right when you
                need it.{" "}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-results2.png"
                alt="Feature 2 screens"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* 03 Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                03 AI-Generated Events & Matching
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Join events created just for you. Based on your
                interests, AI generates local experiences and
                matches you with like-minded people. Connect
                instantly through group chats or start private
                conversations.{" "}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-results3.png"
                alt="Feature 3 screens"
                className="w-full max-w-4xl h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 HIER IST DIE MAGIE: ZWISCHENBILD ALS EIGENE SEKTION 🟢 */}
      {/* Es liegt komplett ausserhalb von max-w-7xl und px-6, weshalb es 100% Breite einnimmt */}
      <section className="w-full bg-[#ECF8F6]">
        <img
          src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-Zwischenbild1.png"
          alt="Koino Hero"
          className="w-full h-auto object-cover block"
        />
      </section>

      {/* The Result Section - TEIL 2 (Feature 4 und 5) */}
      {/* Hier machen wir einen neuen Container auf, damit Text wieder Ränder hat */}
      <section
        className="relative py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#ECF8F6" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* 04 Feature 4 */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-results4.png"
                  alt="Feature 4 screens"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">
                  04 Create & Contribute
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  Bring your ideas to life. Create events,
                  requests, or offers in seconds, on your own or
                  with AI assistance. No overthinking, no
                  friction, just sharing, connecting, and
                  participating.
                </p>
              </div>
            </div>
          </div>

          {/* 05 Feature 5 (Platzhalter für deinen weiteren Content) */}
        </div>
      </section>

      {/* Want to see more? - Other Projects */}
      <section
        className="py-20 px-6 lg:px-12"
        style={{ backgroundColor: "#ECF8F6" }}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card - Younite */}
            <Link
              to="/projects/younite"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* HIER IST DIE ÄNDERUNG: Bild statt SVG-Platzhalter */}
              <div className="aspect-[4/3] w-full bg-gray-100">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Younite-hero.png"
                  alt="Younite Project Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black group-hover:text-[#176963] transition-colors">
                  Younite
                </h3>
                <p className="text-gray-600 mt-2">
                  Youth Council digital solution
                </p>
              </div>
            </Link>

            {/* Project Card - Vía */}
            <Link
              to="/projects/via"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] w-full bg-gray-100">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-hero.png"
                  alt="Younite Project Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black group-hover:text-[#176963] transition-colors">
                  Vía
                </h3>
                <p className="text-gray-600 mt-2">
                  Travel and navigation platform
                </p>
              </div>
            </Link>

            {/* Project Card - Peacefully */}
            <Link
              to="/projects/peacefully"
              className="group bg-white/60 border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] w-full bg-gray-100">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-Zwischenbild2.png"
                  alt="Younite Project Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black group-hover:text-[#176963] transition-colors">
                  Peacefully
                </h3>
                <p className="text-gray-600 mt-2">
                  Mindfulness and wellness app
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/#projects"
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
      <footer
        className="relative py-32 overflow-hidden"
        style={{ backgroundColor: "#071C1B" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
                    <img 
    src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Profilbild-Kasten.png" 
    alt="Jasmin" 
    /* mb-4 sorgt für den sehr geringen Abstand zur Überschrift darunter */
    className="w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-24 object-contain rounded-lg mb-4" 
  />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Got a complex Problem?
              <br />
              Let's solve it!
            </h2>
            <div className="mb-16">
              <a
                href="mailto:jasmine.heiden@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#176963] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
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
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-6">
                {/* 👑 HIER GEÄNDERT: Helle Hover-Effekte für dunkle Hintergründe 👑 */}
                <Link to="/imprint" className="hover:text-white transition-colors duration-200">
                  Imprint
                </Link>
                <span className="text-gray-600">|</span>
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
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