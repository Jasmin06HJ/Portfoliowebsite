import { useEffect, useRef, useState } from 'react';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [borderRadius, setBorderRadius] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top } = containerRef.current.getBoundingClientRect();
      const scrollProgress = -top / window.innerHeight;

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        setScale(1 - (scrollProgress * 0.15)); 
        setBorderRadius(scrollProgress * 40); 
      } else if (scrollProgress > 1) {
        setScale(0.85);
        setBorderRadius(40);
      } else {
        setScale(1);
        setBorderRadius(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative h-[200vh] bg-[#101722]">
      
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div 
          className="relative w-full h-full flex flex-col justify-center px-6 lg:px-12 shadow-2xl overflow-hidden"
          style={{ 
            transform: `scale(${scale})`, 
            borderRadius: `${borderRadius}px`,
            backgroundImage: 'linear-gradient(to bottom right, #4541FE, #5B4CF0, #7B61FF)',
            transformOrigin: 'center'
          }}
        >
          
          <div className="relative max-w-7xl mx-auto w-full z-10 flex flex-col items-center text-center">
            {/* 👑 HIER GEÄNDERT: Breiterer Container (max-w-5xl) für den größeren Text 👑 */}
            <div className="max-w-5xl">

              {/* 👑 HIER GEÄNDERT: Pures Weiß (text-white) und etwas mehr Abstand zwischen den zwei Absätzen (space-y-8) 👑 */}
              <div className="space-y-8 text-white">
                
                {/* 👑 HIER GEÄNDERT: Schriftgrößen massiv erhöht (text-2xl bis text-5xl auf großen Screens) und Zeilenabstand optimiert (leading-snug) 👑 */}
                <p className="text-2xl md:text-4xl lg:text-5xl leading-snug font-light">
                  With a background across media, business, and design – from <strong className="font-bold text-white">Bayerischer Rundfunk</strong> to <strong className="font-bold text-white">DHBW Ravensburg</strong> — I have learned how to navigate complexity.
                </p>

                <p className="text-2xl md:text-4xl lg:text-5xl leading-snug font-medium">
                  Now at <strong className="font-bold text-white">pub.tech</strong>, I help design digital products that turn complex ideas into intuitive experiences.
                </p>
              </div>

            </div>
          </div>

          <div 
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ opacity: (1 - scale) * 1.5 }} 
          />
          
        </div>
      </div>
    </section>
  );
}
