import { Link } from 'react-router';

// CV PDF URL - Replace with your actual CV file URL or path
const cvDownloadURL = "[YOUR_CV_PDF_URL]";

export function CVPage() {
  return (
    <div className="min-h-screen bg-[#101722]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[#4541FE] text-sm mb-6 font-medium">
            Curriculum Vitae
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            [Your Name]
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            [Your Professional Title / Tagline]
          </p>
          
          {/* Download CV Button */}
          <a
            href={cvDownloadURL}
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#4541FE] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4541FE]/20"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV (PDF)
          </a>
        </div>
      </section>

      {/* Summary Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1a2332]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 pb-3 border-b-4 border-[#4541FE] inline-block">
            Summary
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            [Professional summary - Your experience, specialization, and what you bring to the table]
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#101722]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-3 border-b-4 border-[#4541FE] inline-block">
            Work Experience
          </h2>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="relative pl-8 border-l-2 border-[#4541FE]/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#4541FE] rounded-full"></div>
              <div className="mb-2">
                <span className="text-sm text-[#4541FE] font-medium">
                  [Start Date] - [End Date / Present]
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                [Job Title]
              </h3>
              <div className="text-lg text-gray-400 mb-4">
                [Company Name] • [Location]
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 1]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 2]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 3]</span>
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-8 border-l-2 border-[#4541FE]/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#4541FE] rounded-full"></div>
              <div className="mb-2">
                <span className="text-sm text-[#4541FE] font-medium">
                  [Start Date] - [End Date]
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                [Job Title]
              </h3>
              <div className="text-lg text-gray-400 mb-4">
                [Company Name] • [Location]
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 1]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 2]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 3]</span>
                </li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="relative pl-8 border-l-2 border-[#4541FE]/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#4541FE] rounded-full"></div>
              <div className="mb-2">
                <span className="text-sm text-[#4541FE] font-medium">
                  [Start Date] - [End Date]
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                [Job Title]
              </h3>
              <div className="text-lg text-gray-400 mb-4">
                [Company Name] • [Location]
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 1]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 2]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4541FE] mt-2">•</span>
                  <span>[Key responsibility or achievement 3]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1a2332]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-3 border-b-4 border-[#4541FE] inline-block">
            Education
          </h2>

          <div className="space-y-12">
            {/* Education 1 */}
            <div className="relative pl-8 border-l-2 border-[#4541FE]/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#4541FE] rounded-full"></div>
              <div className="mb-2">
                <span className="text-sm text-[#4541FE] font-medium">
                  [Start Year] - [End Year]
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                [Degree / Certificate]
              </h3>
              <div className="text-lg text-gray-400 mb-4">
                [Institution Name] • [Location]
              </div>
              <p className="text-gray-300">
                [Brief description, specialization, honors, or relevant coursework]
              </p>
            </div>

            {/* Education 2 */}
            <div className="relative pl-8 border-l-2 border-[#4541FE]/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#4541FE] rounded-full"></div>
              <div className="mb-2">
                <span className="text-sm text-[#4541FE] font-medium">
                  [Start Year] - [End Year]
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                [Degree / Certificate]
              </h3>
              <div className="text-lg text-gray-400 mb-4">
                [Institution Name] • [Location]
              </div>
              <p className="text-gray-300">
                [Brief description, specialization, honors, or relevant coursework]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#101722]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-3 border-b-4 border-[#4541FE] inline-block">
            Skills & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {/* Skill 1 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">[Skill Name 1]</span>
                    <span className="text-[#4541FE] text-sm">[Expert/Advanced/Intermediate]</span>
                  </div>
                  <div className="w-full h-2 bg-[#1a2332] rounded-full overflow-hidden">
                    <div className="h-full bg-[#4541FE] rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                {/* Skill 2 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">[Skill Name 2]</span>
                    <span className="text-[#4541FE] text-sm">[Expert/Advanced/Intermediate]</span>
                  </div>
                  <div className="w-full h-2 bg-[#1a2332] rounded-full overflow-hidden">
                    <div className="h-full bg-[#4541FE] rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* Skill 3 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">[Skill Name 3]</span>
                    <span className="text-[#4541FE] text-sm">[Expert/Advanced/Intermediate]</span>
                  </div>
                  <div className="w-full h-2 bg-[#1a2332] rounded-full overflow-hidden">
                    <div className="h-full bg-[#4541FE] rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                {/* Skill 4 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">[Skill Name 4]</span>
                    <span className="text-[#4541FE] text-sm">[Expert/Advanced/Intermediate]</span>
                  </div>
                  <div className="w-full h-2 bg-[#1a2332] rounded-full overflow-hidden">
                    <div className="h-full bg-[#4541FE] rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Software */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Tools & Software
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Figma',
                  'Adobe XD',
                  'Sketch',
                  'Photoshop',
                  'Illustrator',
                  'InVision',
                  'Protopie',
                  'Miro',
                  'Framer',
                  'Webflow',
                  'HTML/CSS',
                  'JavaScript'
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#1a2332] text-gray-300 rounded-full text-sm border border-white/10 hover:border-[#4541FE] transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications (Optional) */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1a2332]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-3 border-b-4 border-[#4541FE] inline-block">
            Awards & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Award/Certification 1 */}
            <div className="bg-[#101722] rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4541FE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#4541FE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    [Award/Certification Name]
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    [Issuing Organization] • [Year]
                  </p>
                  <p className="text-sm text-gray-300">
                    [Brief description or achievement details]
                  </p>
                </div>
              </div>
            </div>

            {/* Award/Certification 2 */}
            <div className="bg-[#101722] rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4541FE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#4541FE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    [Award/Certification Name]
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    [Issuing Organization] • [Year]
                  </p>
                  <p className="text-sm text-gray-300">
                    [Brief description or achievement details]
                  </p>
                </div>
              </div>
            </div>

            {/* Award/Certification 3 */}
            <div className="bg-[#101722] rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4541FE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#4541FE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    [Award/Certification Name]
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    [Issuing Organization] • [Year]
                  </p>
                  <p className="text-sm text-gray-300">
                    [Brief description or achievement details]
                  </p>
                </div>
              </div>
            </div>

            {/* Award/Certification 4 */}
            <div className="bg-[#101722] rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4541FE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#4541FE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    [Award/Certification Name]
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    [Issuing Organization] • [Year]
                  </p>
                  <p className="text-sm text-gray-300">
                    [Brief description or achievement details]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages (Optional) */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#101722]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pb-3 border-b-4 border-[#4541FE] inline-block">
            Languages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Language 1 */}
            <div className="bg-[#1a2332] rounded-2xl p-6 border border-white/10 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                [Language 1]
              </h3>
              <p className="text-[#4541FE]">
                [Native / Fluent / Advanced / Intermediate]
              </p>
            </div>

            {/* Language 2 */}
            <div className="bg-[#1a2332] rounded-2xl p-6 border border-white/10 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                [Language 2]
              </h3>
              <p className="text-[#4541FE]">
                [Native / Fluent / Advanced / Intermediate]
              </p>
            </div>

            {/* Language 3 */}
            <div className="bg-[#1a2332] rounded-2xl p-6 border border-white/10 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                [Language 3]
              </h3>
              <p className="text-[#4541FE]">
                [Native / Fluent / Advanced / Intermediate]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#1a2332]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in working together?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's connect and discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#4541FE] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4541FE]/20"
            >
              Get in touch
            </Link>
            <a
              href={cvDownloadURL}
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-[#4541FE] text-[#4541FE] rounded-full font-medium transition-all duration-300 hover:bg-[#4541FE] hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
