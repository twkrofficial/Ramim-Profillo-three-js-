import { motion } from 'framer-motion';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { Header } from '../atoms/Header';
import { config } from '../../constants/config';
import { fadeIn } from '../../utils/motion';

const Experience = () => (
  <>
    <Header useMotion={true} {...config.sections.experience} />
    <p className="mt-4 max-w-3xl text-[17px] leading-8 text-secondary">
      My development focus: useful interfaces, practical software, and a clear path from an initial
      idea to a working experience.
    </p>
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {experiences.map((experience, index) => (
        <motion.article
          key={experience.title}
          variants={fadeIn('up', 'tween', index * 0.12, 0.5)}
          className="rounded-2xl border border-white/10 bg-tertiary p-7"
        >
          <div className="mb-6 flex items-center justify-between">
            <img src={experience.icon} alt="" className="h-12 w-12 object-contain" loading="lazy" />
            <span className="text-sm font-medium tracking-widest text-[#b496ff]">0{index + 1}</span>
          </div>
          <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
          <p className="mt-2 text-sm text-[#b496ff]">{experience.companyName}</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-secondary">
            {experience.points.map(point => (
              <li key={point} className="flex gap-3">
                <span aria-hidden="true" className="text-[#915eff]">
                  —
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, 'work');
