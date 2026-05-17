import image_via_result2 from "@/imports/via-result2.png";
import { Link } from "react-router";
import { useEffect } from "react";

export function ViaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Platzhalter-URLs für Bilder - diese kannst du mit deinen externen Links ersetzen
  const heroImage =
    "https://via.placeholder.com/1920x800/1C1F23/73F7C7?text=Hero+Image";
  const userJourneyImage =
    "https://via.placeholder.com/1920x600/1C1F23/73F7C7?text=User+Journey";
  const onboardingImage =
    "https://via.placeholder.com/800x600/1C1F23/73F7C7?text=Onboarding";
  const surveysImage =
    "https://via.placeholder.com/800x600/1C1F23/73F7C7?text=Feature+2";
  const homeImage =
    "https://via.placeholder.com/1200x800/1C1F23/73F7C7?text=Feature+3";
  const applicationsImage1 =
    "https://via.placeholder.com/800x600/1C1F23/73F7C7?text=Feature+4A";
  const applicationsImage2 =
    "https://via.placeholder.com/800x600/1C1F23/73F7C7?text=Feature+4B";
  const newsEventsImage =
    "https://via.placeholder.com/1000x700/1C1F23/73F7C7?text=Feature+5";
  const fullWidthImage = "[YOUR_FULL_WIDTH_IMAGE_URL]";

  return (
    <div className="min-h-screen">
      {/* Hero Section - Title and Info */}
      <section className="relative py-16 md:py-24 px-6 lg:px-12 bg-[#1C1F23]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Vía - Ride first, pay the best fare later.
              </h1>
            </div>

            {/* Right: Project Info */}
            <div className="space-y-8 text-white">
              <div>
                <div className="text-sm mb-2 font-medium text-gray-400">
                  Project Length
                </div>
                <div className="text-lg">Okt 25 - Jan 26</div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium text-gray-400">
                  Team
                </div>
                <div className="text-lg">
                  Lena van Maris, Elina Grandt and me
                </div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium text-gray-400">
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

      {/* Hero Image - Full Width */}
      <section className="relative w-full">
        <img
          src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-hero.png"
          alt="Vía project hero image"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Why we designed Vía Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1C1F23]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 pb-3 border-b-4 border-[#73F7C7] inline-block">
            Why we designed Vía
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Problem */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Problem
              </div>
              <p className="text-white leading-relaxed">
                Buying train tickets is confusing and stressful.
                Users struggle to predict their travel behavior
                and risk choosing the wrong ticket — whether
                subscription, semester ticket, or single ride.
                Complex pricing and fear of hidden costs create
                uncertainty and reduce trust.
              </p>
            </div>

            {/* The Status Quo */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Status Quo
              </div>
              <p className="text-white leading-relaxed">
                Ticket information is scattered across apps,
                websites, and transport associations. Users are
                redirected between platforms, while conditions
                like cancellation or validity remain unclear.
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Solution
              </div>
              <p className="text-white leading-relaxed">
                Vía tracks journeys and calculates the cheapest
                ticket at the end of a selected period. Users no
                longer need to decide upfront and can travel
                flexibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1C1F23]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-4 border-[#73F7C7] inline-block">
            Research
          </h2>

          <p className="text-gray-300 mb-12 leading-relaxed">
            To understand challenges in public transport usage
            in Germany, we conducted qualitative interviews with
            frequent train users, complemented by social
            listening and a benchmark analysis. These insights
            helped us identify key pain points in ticket
            selection and usage.{" "}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              The Painpoints
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#73F7C7]"
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
              <h4 className="text-lg font-semibold text-white mb-4">
                Pricing & Decision Uncertainty
              </h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>
                  Users struggle to predict their travel
                  behavior and choose the right ticket Fear of
                  hidden costs and wrong decisions creates
                  stress and reduces trust
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#73F7C7]"
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
              <h4 className="text-lg font-semibold text-white mb-4">
                Information & Transparency
              </h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>
                  Ticket information is scattered across
                  platforms and hard to understand Conditions
                  like validity, pricing, and cancellation are
                  often unclear
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#73F7C7]"
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
              <h4 className="text-lg font-semibold text-white mb-4">
                Trust & Subscription Issues
              </h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>
                  Missed deadlines and automatic renewals lead
                  to negative experiences Users are skeptical
                  toward subscriptions and complex ticket models
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Iteration & Testing Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1C1F23]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-4 border-[#73F7C7] inline-block">
            Iteration & Testing
          </h2>

          <div className="mb-12 space-y-4 text-gray-300 leading-relaxed">
            <p>
              We conducted user tests using early, functional
              vibecoding prototypes instead of wireframes. The
              tests showed that users care most about the
              Homescreen where they can see live tracking and
              their routes, as well as the payment overview that
              displays past trips and final costs. This allowed
              us to identify key features and main information
              flows and also determine which vibecoding tool
              could implement them most effectively.
            </p>
          </div>

          {/* Full Width Image - Same width as paragraph container */}
          <div className="w-full">
            <img
              src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-iteration.png"
              alt="Iteration and testing process"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Full Width Divider Image - Spans entire browser width */}
      <section className="relative w-full">
        <img
          src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-zwischenbild1.png"
          alt="Full width divider image"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* The Result Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1C1F23]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-4 border-[#73F7C7] inline-block">
            The result
          </h2>

          <p className="text-gray-300 mb-16 leading-relaxed max-w-4xl">
            Through our testing, we discovered that the Vibe
            Coding tools Google AI Studio and Base44 were best
            suited to build a digital application that allows
            train passengers to board without purchasing a
            ticket upfront — automatically charging them only
            for the journeys they actually made at the end of
            the month.
          </p>

          {/* 01 Feature 1 */}
          <div className="mb-20">
            {/* Text */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                01 Set time period
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Users sign up with their official youth council
                email to ensure verification. Based on their
                interests, they receive personalized event and
                project recommendations and can choose to make
                their profile visible to connect with
                others.{" "}
              </p>
            </div>

            {/* Full Width Image */}
            <div className="w-full">
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-result1.png"
                alt="Feature 1 screens"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 02 Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Feature 2 Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-result2.png"
                alt="Feature 2 screens"
                className="w-full max-w-2xl h-auto"
              />
            </div>

            {/* Right: Text */}
            {/* 1. HIER GEÄNDERT: flex, flex-col und h-full hinzugefügt */}
            <div className="order-1 lg:order-2 flex flex-col h-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  And your ready to go
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Your ticket appears automatically when a
                  conductor checks, or you can show your NFC
                  card if your battery runs out
                </p>
              </div>

              {/* Image below text */}
              {/* 2. HIER GEÄNDERT: mt-auto hinzugefügt */}
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-result-karte.png"
                alt="Feature 2 additional image"
                className="w-full max-w-md h-auto object-cover mt-12"
              />
            </div>
          </div>

          {/* 03 Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start mb-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                02 Search for connection
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Search for connections, apply filters, and get
                personalized recommendations based on your
                selected time period and past journeys.{" "}
              </p>
            </div>

            {/* Right: Feature 3 Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-result3.png"
                alt="Feature 3 screens"
                className="w-full h-auto"
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
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-result4.png"
                  alt="Feature 4A screens"
                  className="w-full max-w-2xl h-auto"
                />
              </div>

              {/* Right: Text */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  04 Smart Tracking & Billing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  See your current journey being tracked in real
                  time. Get an overview of all trips within your
                  selected billing period, including the total
                  cost if calculated individually. At the same
                  time, the app highlights the best possible
                  price — such as a subscription — and shows how
                  much you save. The final amount is then
                  automatically calculated at the end of the
                  period.
                </p>
              </div>
            </div>
            {/* Bottom Row: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Second Image */}
              <div className="flex justify-center lg:justify-start"></div>

              {/* Right: Text */}
              <div></div>
            </div>
          </div>
        </div>
      </section>
      {/* Want to see more? - Other Projects */}
      <section className="py-20 px-6 lg:px-12 bg-[#1C1F23]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to see more?
            </h2>
            <p className="text-xl text-gray-400">
              Other projects
            </p>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card - Younite */}
            <Link
              to="/projects/younite"
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Younite-hero.png"
                  alt="Vía Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#73F7C7] transition-colors">
                  Younite
                </h3>
                <p className="text-gray-400 mt-2">
                  Youth Council digital solution
                </p>
              </div>
            </Link>

            {/* Project Card - Peacefully */}
            <Link
              to="/projects/peacefully"
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-Zwischenbild2.png"
                  alt="Vía Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#73F7C7] transition-colors">
                  Peacefully
                </h3>
                <p className="text-gray-400 mt-2">
                  Mindfulness and wellness app
                </p>
              </div>
            </Link>

            {/* Project Card - Koino */}
            <Link
              to="/projects/koino"
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-Hero-klein.png"
                  alt="Koino project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#73F7C7] transition-colors">
                  Koino
                </h3>
                <p className="text-gray-400 mt-2">
                  Community platform
                </p>
              </div>
            </Link>
          </div>

          {/* Back to all projects link */}
          <div className="mt-12 text-center">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-[#73F7C7] hover:text-white transition-colors duration-300 font-medium"
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
      <footer className="relative py-32 overflow-hidden bg-[#1C1F23]">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
              <img 
    src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Profilbild-Kasten.png" 
    alt="Jasmin" 
    /* mb-4 sorgt für den sehr geringen Abstand zur Überschrift darunter */
    className="w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-24 object-contain rounded-lg mb-4" 
  />

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Got a complex Problem?
              <br />
              Let's solve it!
            </h2>

            {/* CTA Button */}
            <div className="mb-16">
              <a
                href="mailto:jasmine.heiden@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#73F7C7] text-[#1C1F23] rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
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