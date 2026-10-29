import { motion } from 'framer-motion';
import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const Contact = () => (
  <div className="flex flex-col gap-8 overflow-hidden lg:flex-row lg:items-center">
    <motion.div
      variants={slideIn('left', 'tween', 0.1, 0.6)}
      className="relative z-10 flex-1 rounded-3xl border border-white/10 bg-[#100d25]/90 p-7 sm:p-10"
    >
      <Header useMotion={false} {...config.contact} />
      <p className="mt-5 max-w-lg text-[17px] leading-8 text-secondary">
        Have a website, software idea, or collaboration in mind? Tell me what you want to build.
        Let’s turn that first conversation into a clear plan.
      </p>
      <div className="my-8 border-y border-white/10 py-5">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary">Find me on Facebook</p>
        <p className="mt-2 text-xl font-semibold text-white">@twkrofficial</p>
      </div>
      <a
        href={config.html.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center gap-3 rounded-xl bg-[#915eff] px-6 py-4 font-semibold text-white transition hover:bg-[#7c46ed]"
      >
        Connect on Facebook <span aria-hidden="true">↗</span>
      </a>
      <p className="mt-4 text-sm text-secondary">Opens my Facebook profile in a new tab.</p>
    </motion.div>
    <motion.div
      variants={slideIn('right', 'tween', 0.1, 0.6)}
      className="h-[320px] flex-1 sm:h-[450px]"
      aria-hidden="true"
    >
      <EarthCanvas />
    </motion.div>
  </div>
);

export default SectionWrapper(Contact, 'contact');
