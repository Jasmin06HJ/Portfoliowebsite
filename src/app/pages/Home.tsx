import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function Home() {
  const location = useLocation();

  // 👑 HIER IST DIE SCROLL-LOGIK 👑
  useEffect(() => {
    // Prüfen, ob ein Hash (wie #projects oder #contact) in der URL steht
    if (location.hash) {
      // Das Element mit der passenden ID suchen (wir entfernen das '#' aus dem String)
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Ein winziger Timeout gibt React die Zeit, die Elemente erst fertig zu laden
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Wenn kein Hash da ist, scrolle nach ganz oben
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      

      <About /> 
      
      <Projects />
      <Footer />
    </>
  );
}