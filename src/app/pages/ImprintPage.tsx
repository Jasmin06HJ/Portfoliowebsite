import { useEffect } from 'react';

export function ImprintPage() {
  // Das sorgt dafür, dass die Seite beim Laden immer ganz oben startet
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#101722] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
          Imprint
        </h1>
        <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">according to § 5 TMG</h2>
            <p>
              Jasmin Heiden<br />
              Daimlerstraße 103 E<br />
              70372 Stuttgart
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              Telefon: +49 1775200214<br />
              E-Mail: <a href="mailto:jasmine.heiden@gmail.com" className="text-[#4541FE] hover:text-white transition-colors">jasmine.heiden@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}