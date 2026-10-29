import { useEffect, useState } from 'react';

import { styles } from '../../constants/styles';
import { navLinks } from '../../constants';
import { menu, close, avatar } from '../../assets';
import { config } from '../../constants/config';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      let currentSection = '';
      document.querySelectorAll<HTMLElement>('section[id]').forEach(section => {
        if (section.getBoundingClientRect().top <= 180) {
          currentSection = section.id;
        }
      });
      setActive(currentSection);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setToggle(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`${
        styles.paddingX
      } fixed top-0 z-50 flex w-full items-center border-b py-4 transition-colors ${
        scrolled || toggle
          ? 'border-white/10 bg-primary/95 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5">
        <a
          href="#top"
          aria-label={`${config.html.fullName}, home`}
          className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b69aff]"
          onClick={() => {
            setToggle(false);
            setActive('');
          }}
        >
          <div
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#915EFF] via-[#c7b0ff] to-[#492294] shadow-[0_0_14px_rgba(145,94,255,0.5)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,94,255,0.75)] hover:scale-105"
            aria-hidden="true"
          >
            <img
              src={avatar}
              alt={config.html.fullName}
              className="h-full w-full rounded-full object-cover object-center ring-1 ring-black/40"
            />
          </div>
          <span className="min-w-0">
            <span className="block text-base font-bold leading-tight text-white sm:text-lg">
              {config.html.fullName}
            </span>
            <span className="mt-1 hidden text-[11px] tracking-wide text-secondary sm:block">
              Web &amp; Software Developer
            </span>
          </span>
        </a>

        <ul className="hidden list-none items-center gap-8 lg:flex">
          {navLinks.map(nav => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                aria-current={active === nav.id ? 'location' : undefined}
                onClick={() => setActive(nav.id)}
                className={`rounded-md py-2 text-sm font-medium transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b69aff] ${
                  active === nav.id ? 'text-[#c7b0ff]' : 'text-secondary'
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={toggle}
          aria-controls="mobile-navigation"
          onClick={() => setToggle(open => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-tertiary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b69aff] lg:hidden"
        >
          <img src={toggle ? close : menu} alt="" className="h-6 w-6 object-contain" />
        </button>

        <ul
          id="mobile-navigation"
          className={`${
            toggle ? 'flex' : 'hidden'
          } absolute left-6 right-6 top-[80px] list-none flex-col gap-1 rounded-2xl border border-white/10 bg-tertiary p-3 shadow-card sm:left-16 sm:right-16 lg:hidden`}
        >
          {navLinks.map(nav => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                aria-current={active === nav.id ? 'location' : undefined}
                onClick={() => {
                  setActive(nav.id);
                  setToggle(false);
                }}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b69aff] ${
                  active === nav.id ? 'text-[#c7b0ff]' : 'text-secondary'
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
