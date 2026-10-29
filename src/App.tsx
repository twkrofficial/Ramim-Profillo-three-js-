import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { useEffect } from 'react';
import { config } from './constants/config';

const App = () => {
  useEffect(() => {
    document.title = config.html.title;
  }, []);
  return (
    <BrowserRouter>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <main className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-sm text-secondary sm:flex-row sm:items-center sm:justify-between sm:px-16">
          <p>
            © {new Date().getFullYear()} {config.html.fullName}. Web &amp; Software Developer.
          </p>
          <a
            href={config.html.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-[#b496ff]"
          >
            Facebook ↗
          </a>
        </footer>
      </main>
    </BrowserRouter>
  );
};

export default App;
