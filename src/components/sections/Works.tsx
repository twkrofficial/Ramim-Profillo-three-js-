import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const Works = () => (
  <>
    <Header useMotion={true} {...config.sections.works} />
    <motion.p
      variants={fadeIn('', '', 0.1, 0.6)}
      className="mt-4 max-w-3xl text-[17px] leading-8 text-secondary"
    >
      {config.sections.works.content}
    </motion.p>
    <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          variants={fadeIn('up', 'tween', index * 0.12, 0.5)}
          className="overflow-hidden rounded-2xl border border-white/10 bg-tertiary"
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.name + ' — illustrative template preview'}
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#050816]/90 px-3 py-1 text-xs font-medium text-white">
              Concept example
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-[22px] font-bold text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-secondary">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag.name} className={'text-xs ' + tag.color}>
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
    <p className="mt-6 text-xs leading-6 text-secondary">
      Illustrative previews from the original portfolio template. These concepts are not completed
      client work.
    </p>
  </>
);

export default SectionWrapper(Works, 'projects');
