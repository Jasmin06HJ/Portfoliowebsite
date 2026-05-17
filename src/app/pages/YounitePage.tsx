import userJourneyImage from "../../imports/Section_2_2x.png";
import onboardingImage from "../../imports/image-14.png";
import surveysImage from "../../imports/image-16.png";
import homeImage from "../../imports/image-19.png";
import applicationsImage1 from "../../imports/image-21.png";
import applicationsImage2 from "../../imports/image-22.png";
import newsEventsImage from "../../imports/image-25.png";
import heroImage from "../../imports/image-26.png";
import { ScreenPlaceholder } from "../components/ScreenPlaceholder";
import { Link } from "react-router";
import { useEffect } from "react";

export function YounitePage() {
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="min-h-screen">
      {/* Hero Section - Title and Info */}
      <section className="relative py-16 md:py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Younite - a digital solution for the Youth
                Council
              </h1>
            </div>

            {/* Right: Project Info */}
            <div className="space-y-8 text-black">
              <div>
                <div className="text-sm mb-2 font-medium">
                  Project Length
                </div>
                <div className="text-lg">Okt 25 - Jan 26</div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium">
                  Team
                </div>
                <div className="text-lg">
                  Lena van Maris, Nicole Birk & me
                </div>
              </div>

              <div>
                <div className="text-sm mb-2 font-medium">
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
          src={heroImage}
          alt="Younite presentation with phones showing the app and team member presenting"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Why we designed Younite Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#011B37]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 pb-3 border-b-4 border-[#6EB3FC] inline-block">
            Why we designed Younite
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Problem */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Problem
              </div>
              <p className="text-white leading-relaxed">
                Youth councils offer important opportunities for
                participation, but complex administrative
                structures make it difficult for young people to
                actively engage and bring ideas to life.
              </p>
            </div>

            {/* The Status Quo */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Status Quo
              </div>
              <p className="text-white leading-relaxed">
                Processes are often fragmented, non-transparent
                and difficult to navigate — especially for
                first-time members. Existing tools fail to
                support collaboration, guidance and knowledge
                sharing across councils.
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="text-sm text-gray-400 mb-4">
                The Solution
              </div>
              <p className="text-white leading-relaxed">
                Younite empowers young people to turn ideas into
                real projects by guiding them through complete
                processes, making progress visible and enabling
                collaboration across councils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#011B37] mb-6 pb-3 border-b-4 border-[#6EB3FC] inline-block">
            Research
          </h2>

          <p className="text-gray-700 max-w-4xl mb-12 leading-relaxed">
            To better understand the current challenges within
            youth councils, we conducted guided qualitative
            interviews with administrative experts and active
            members. These findings enabled us to define the
            scope of our project and identify the main obstacles
            currently facing the Youth Council.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#011B37] mb-6">
              The Painpoints
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#6EB3FC]"
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
              <h4 className="text-lg font-semibold text-[#011B37] mb-4">
                Process & Complexity
              </h4>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  Long and opaque administrative processes make
                  it difficult to track progress
                </p>
                <p>
                  Fragmented tools create confusion and disrupt
                  the user experience
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#6EB3FC]"
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
              <h4 className="text-lg font-semibold text-[#011B37] mb-4">
                Tools & Structure
              </h4>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  Complex and time-consuming application
                  processes are discouraging, especially for
                  less experienced youth council members
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#6EB3FC]"
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
              <h4 className="text-lg font-semibold text-[#011B37] mb-4">
                Collaboration & Knowledge Sharing
              </h4>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  Knowledge and experiences are not effectively
                  shared between youth council members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#011B37]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-4 border-[#6EB3FC] inline-block">
            User Journey
          </h2>

          <p className="text-gray-300 mb-12 leading-relaxed">
            To move from isolated challenges to a holistic
            understanding, we mapped the end-to-end user journey
            of youth council members. This helped us identify
            where complexity, lack of transparency and missing
            guidance create friction throughout the process.
          </p>

          <div className="relative">
            <img
              src={userJourneyImage}
              alt="User Journey - 8 steps showing the process from idea discussion to project implementation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Iteration & Testing Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#011B37] mb-6 pb-3 border-b-4 border-[#6EB3FC] inline-block">
            Iteration & Testing
          </h2>

          <div className="mb-12 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our iterative prototyping and testing process
              allowed us to refine every aspect of the design.
              Through user feedback sessions, we could validate
              our assumptions and pivot where needed. Close
              collaboration with the youth council members gave
              us invaluable insights into real-world use cases.
            </p>
            <p>
              To validate our design decisions, we created an
              early prototype based on the initial user
              research. We used a rapid iteration approach,
              refining the flows incrementally based on
              usability tests, such as an unguided test where a
              test subject used the app for sending surveys.
              These insights allowed us to identify pain points
              early, such as complex navigation, readability,
              and areas that needed additional guidance or
              contextual help.
            </p>
            <p>
              Each round of testing was followed by design
              adjustments to ensure the final product not only
              meets the needs of youth council members but also
              provides a seamless, intuitive experience that
              aligns with their workflows and expectations.
            </p>
          </div>

          {/* Prototype Screenshots - Custom Layout */}
          <div className="relative space-y-12">
            {/* Row 1: an undersized header */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Label */}
              <h3 className="text-lg font-bold text-gray-800 flex-shrink-0 md:w-48">
                an undersized header
              </h3>

              {/* Image */}
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Younite-Testing1.png"
                alt="Header illustration"
                className="w-full max-w-2xl h-auto object-cover rounded-lg"
              />
            </div>

            {/* Row 2: the AI capabilities */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Label */}
              <h3 className="text-lg font-bold text-gray-800 flex-shrink-0 md:w-48">
                the AI capabilities
                <br />
                for drafting applications
              </h3>

              {/* Image */}
              <img
                src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Younite-Testing2.png"
                alt="AI capabilities for drafting applications"
                className="w-full max-w-3xl h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Result Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#011B37]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-3 border-b-4 border-[#6EB3FC] inline-block">
            The result
          </h2>

          <p className="text-gray-300 mb-16 leading-relaxed max-w-4xl">
            By directly addressing the usability hurdles
            uncovered during testing, we finalized a solution
            that truly empowers youth council members, defining
            a set of focused features tailored to their needs
            across the entire user journey.
          </p>

          {/* 01 Onboarding */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                01 Onboarding
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Users sign up with their official youth council
                email to ensure verification. Based on their
                interests, they receive personalized content and
                project recommendations and can choose to make
                their profile visible to connect with others.
              </p>
            </div>

            {/* Right: Onboarding Screens Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={onboardingImage}
                alt="Onboarding screens showing welcome, profile setup, and interests selection"
                className="w-full max-w-2xl h-auto"
              />
            </div>
          </div>

          {/* 02 Surveys */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Surveys Screens Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src={surveysImage}
                alt="Survey creation screens with AI assistance"
                className="w-full max-w-2xl h-auto"
              />
            </div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-white mb-6">
                02 Surveys
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Even before you start your application, use AI
                to create surveys and discover what the people
                affected by your idea really think — so you can
                work on what really matters.
              </p>
            </div>
          </div>

          {/* 03 Home */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                03 Home
              </h3>
              <p className="text-gray-300 leading-relaxed">
                See the results of the survey, the latest news
                and your own projects directly on the
                homescreen.
              </p>
            </div>

            {/* Right: Home Screens Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={homeImage}
                alt="Home screen showing projects, events and navigation"
                className="w-full max-w-4xl h-auto"
              />
            </div>
          </div>

          {/* 04 Applications */}
          <div className="space-y-16">
            {/* Top Row: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: First Applications Image */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={applicationsImage1}
                  alt="Application creation with AI assistance"
                  className="w-full max-w-2xl h-auto"
                />
              </div>

              {/* Right: Text */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  04 Applications
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Write your own application effortlessly with
                  the help of AI or by using a structured
                  template. Tell me a real knowledge database to
                  guide your draft.
                </p>
              </div>
            </div>
            {/* Bottom Row: Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Second Applications Image */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={applicationsImage2}
                  alt="Application submission and tracking"
                  className="w-full max-w-2xl h-auto"
                />
              </div>

              {/* Right: Text */}
              <div>
                <p className="text-gray-300 leading-relaxed">
                  Track its status, see who is responsible, and
                  monitor the decision-making process in real
                  time.
                </p>
              </div>
            </div>
          </div>

          {/* 05 News & Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                04 News & Events
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Discover inspiring projects from other councils
                and highlight your own successes to strengthen
                motivation and self-efficacy.
              </p>
            </div>

            {/* Right: News & Events Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={newsEventsImage}
                alt="News and events showing projects from other councils"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Want to see more? - Other Projects */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#011B37] mb-4">
              Want to see more?
            </h2>
            <p className="text-xl text-gray-600">
              Other projects
            </p>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card - Vía */}
            <Link
              to="/projects/via"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-hero.png"
                  alt="Vía Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#011B37] group-hover:text-[#6EB3FC] transition-colors">
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
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
  <img
    src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-Zwischenbild2.png"
    alt="Vía Hero Image"
    className="w-full h-full object-cover"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#011B37] group-hover:text-[#6EB3FC] transition-colors">
                  Peacefully
                </h3>
                <p className="text-gray-600 mt-2">
                  Mindfulness and wellness app
                </p>
              </div>
            </Link>

            {/* Project Card - Koino */}
            <Link
              to="/projects/koino"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <img
    src="https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-Hero-klein.png"
    alt="Vía Hero Image"
    className="w-full h-full object-cover"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#011B37] group-hover:text-[#6EB3FC] transition-colors">
                  Koino
                </h3>
                <p className="text-gray-600 mt-2">
                  Community platform
                </p>
              </div>
            </Link>
          </div>

          {/* Back to all projects link */}
          <div className="mt-12 text-center">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-[#6EB3FC] hover:text-[#011B37] transition-colors duration-300 font-medium"
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
      <footer className="relative py-32 overflow-hidden bg-[#011B37]">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6EB3FC] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
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