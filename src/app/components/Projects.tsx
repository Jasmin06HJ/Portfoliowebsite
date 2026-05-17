import { Link } from "react-router";

const projectsData = [
  {
    title: "Younite",
    description:
      "A digital solution for the Youth Council to simplify complex processes and enable collaboration.",
    tags: ["UX Design", "Research", "Governance"],
    link: "/projects/younite",
    image:
      "https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Younite-hero.png",
  },
  {
    title: "Vía",
    description:
      "a mobility app that automatically calculates the cheapest public transport ticket based on a user’s actual travel behavior.",
    tags: ["UX Design", "Mobile", "Ticketing"],
    link: "/projects/via",
    image:
      "https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/via-hero.png",
  },
  {
    title: "Peacefully",
    description:
      "A smartwatch and app for people with ME/CFS that tracks physiological data and provides real-time personalized guidance to help manage energy and reduce mental load.",
    tags: ["UX Design", "Wearable", "Health"],
    link: "/projects/peacefully",
    image:
      "https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Peacefully-Zwischenbild2.png",
  },
  {
    title: "Koino",
    description:
      "A platform that uses AI to create nearby events and match people with shared interests, making it easy to join instead of plan and coordinate, and turning intention into real interaction.",
    tags: ["UX Design", "Community", "Social"],
    link: "/projects/koino",
    image:
      "https://raw.githubusercontent.com/Jasmin06HJ/Portfoliowebsite/main/public/Konio-Hero-klein.png",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#101722]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* 👑 NEUE CLEAN ÜBERSCHRIFT OHNE STRICH 👑 */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group relative bg-[#1a2332] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4541FE]/10 block"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[#4541FE] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 bg-[#101722] text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}