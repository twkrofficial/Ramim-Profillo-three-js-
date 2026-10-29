import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
import { ComputersCanvas } from '../canvas';
import { config } from '../../constants/config';

const Hero = () => {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative mx-auto min-h-[700px] w-full h-[100svh] md:min-h-[800px]"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ComputersCanvas />
      </div>

      <div
        className={`pointer-events-none relative z-10 mx-auto flex max-w-7xl items-start gap-4 pt-36 sm:gap-6 sm:pt-40 ${styles.paddingX}`}
      >
        <div className="mt-3 flex shrink-0 flex-col items-center" aria-hidden="true">
          <div className="h-3 w-3 rounded-full bg-[#915EFF] sm:h-4 sm:w-4" />
          <div className="violet-gradient h-56 w-[3px] sm:h-72" />
        </div>

        <div className="min-w-0 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-secondary sm:text-base">
            Ideas into digital experiences
          </p>
          <h1 className="text-[38px] font-black leading-[1.12] tracking-tight text-white xs:text-[46px] sm:text-[58px] lg:text-[68px]">
            Hi, I’m <span className="block text-[#a67aff]">{config.hero.name}.</span>
          </h1>
          <p className="mt-5 text-[19px] font-medium leading-relaxed text-white-100 sm:text-[24px] lg:text-[28px]">
            {config.hero.p[0]}
          </p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-secondary sm:text-lg">
            {config.hero.p[1]}
            <br />
            Let’s bring your next idea to life.
          </p>

          <div className="pointer-events-auto mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#915EFF] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a67aff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b69aff] sm:text-base"
            >
              Explore concepts{' '}
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#75649c] bg-primary/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#b69aff] hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b69aff] sm:text-base"
            >
              Let’s talk
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 z-10 flex w-full items-center justify-center">
        <a
          href="#about"
          aria-label="Scroll to about Ramim"
          className="rounded-3xl p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b69aff]"
        >
          <div className="flex h-12 w-7 items-start justify-center rounded-3xl border-2 border-secondary p-1.5">
            <motion.div
              animate={{ y: [0, 19, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="h-2 w-2 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
