import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
