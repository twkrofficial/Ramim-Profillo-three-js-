import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { Header } from '../atoms/Header';

const Tech = () => (
  <>
    <Header useMotion={true} p="Behind this experience" h2="Portfolio stack." />
    <p className="mt-4 max-w-3xl text-[17px] leading-8 text-secondary">
      The technologies used to build this interactive portfolio.
    </p>
    <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {technologies.map(technology => (
        <div
          key={technology.name}
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-tertiary/60 px-4 py-5"
        >
          <img src={technology.icon} alt="" className="h-9 w-9 object-contain" loading="lazy" />
          <span className="text-sm font-medium text-white">{technology.name}</span>
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, 'tech');
