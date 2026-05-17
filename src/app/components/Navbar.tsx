import { Link, useLocation } from 'react-router';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isCV = location.pathname === '/cv';
  const isYounite = location.pathname === '/projects/younite';
  const isVia = location.pathname === '/projects/via';
  const isPeacefully = location.pathname === '/projects/peacefully';
  const isKoino = location.pathname === '/projects/koino';

  // Define colors based on current page
  let navBg = 'bg-[#101722]/80';
  let buttonBg = 'bg-[#4541FE]';
  let buttonShadow = 'hover:shadow-[#4541FE]/20';
  let buttonTextColor = 'text-white';
  let textColor = 'text-white';
  let textHoverColor = 'hover:text-gray-300';
  let linkColor = 'text-gray-300';
  let linkHoverColor = 'hover:text-white';
  let borderColor = 'border-white/5';

  if (isYounite) {
    navBg = 'bg-[#011B37]';
    buttonBg = 'bg-[#6EB3FC]';
    buttonShadow = 'hover:shadow-[#6EB3FC]/20';
    buttonTextColor = 'text-white';
    textColor = 'text-white';
    textHoverColor = 'hover:text-gray-300';
    linkColor = 'text-gray-300';
    linkHoverColor = 'hover:text-white';
    borderColor = 'border-transparent';
  } else if (isVia) {
    navBg = 'bg-[#1C1F23]';
    buttonBg = 'bg-[#73F7C7]';
    buttonShadow = 'hover:shadow-[#73F7C7]/20';
    buttonTextColor = 'text-black';
    textColor = 'text-white';
    textHoverColor = 'hover:text-gray-300';
    linkColor = 'text-gray-300';
    linkHoverColor = 'hover:text-white';
    borderColor = 'border-transparent';
  } else if (isPeacefully) {
    navBg = 'bg-[#EEF4FC]';
    buttonBg = 'bg-[#92B495]/80';
    buttonShadow = 'hover:shadow-[#92B495]/20';
    buttonTextColor = 'text-white';
    textColor = 'text-black';
    textHoverColor = 'hover:text-gray-600';
    linkColor = 'text-gray-700';
    linkHoverColor = 'hover:text-black';
    borderColor = 'border-transparent';
  } else if (isKoino) {
    navBg = 'bg-[#ECF8F6]';
    buttonBg = 'bg-[#176963]';
    buttonShadow = 'hover:shadow-[#176963]/20';
    buttonTextColor = 'text-white';
    textColor = 'text-black';
    textHoverColor = 'hover:text-gray-600';
    linkColor = 'text-gray-700';
    linkHoverColor = 'hover:text-black';
    borderColor = 'border-transparent';
  }

  return (
    <nav className={`sticky top-0 z-50 w-full ${navBg} backdrop-blur-md border-b ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link to="/" className={`${textColor} font-semibold text-lg ${textHoverColor} transition-colors`}>
              Jasmin Heiden
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHome ? (
              <>
                {/* 👑 About ist auskommentiert 👑 */}
                {/* <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</Link> */}
                
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
                
                {/* 👑 CV-Link mit jsDelivr für PDF-Vorschau in neuem Tab 👑 */}
                <a
                  href="https://cdn.jsdelivr.net/gh/Jasmin06HJ/Portfoliowebsite@main/public/CV26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  CV
                </a>
              </>
            ) : (
              <>
                {/* 👑 About ist auskommentiert 👑 */}
                {/* <Link to="/about" className={`${linkColor} ${linkHoverColor} transition-colors duration-200`}>About</Link> */}
                
                <Link
                  to="/#projects"
                  className={`${linkColor} ${linkHoverColor} transition-colors duration-200`}
                >
                  Projects
                </Link>
                
                {/* 👑 CV-Link mit jsDelivr für PDF-Vorschau in neuem Tab 👑 */}
                <a
                  href="https://cdn.jsdelivr.net/gh/Jasmin06HJ/Portfoliowebsite@main/public/CV26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkColor} ${linkHoverColor} transition-colors duration-200`}
                >
                  CV
                </a>
              </>
            )}
          </div>

          {/* Contact Button */}
          <div>
            {/* 👑 Öffnet immer direkt dein Mailprogramm 👑 */}
            <a
              href="mailto:jasmine.heiden@gmail.com"
              className={`inline-flex items-center px-6 py-2.5 ${buttonBg} ${buttonTextColor} rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${buttonShadow}`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}