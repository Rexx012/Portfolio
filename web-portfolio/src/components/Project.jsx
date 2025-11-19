import { ArrowUpRight } from 'lucide-react';
import MyPabahayImg from '../assets/MyPabahay.png';
import QuizGameImg from '../assets/QuizGame.png';
import { motion } from 'framer-motion';

const ProjectItem = ({ imgSrc, title, description, liveLink, sourceLink }) => {
  return (
    <motion.div
      className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='flex flex-col gap-4'>
        <motion.a
          href={liveLink}
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={imgSrc}
            alt={`${title} project screenshot`}
            className='border border-neutral-300 rounded-lg shadow-sm hover:shadow-md transition-shadow'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        <div className='flex gap-8'>
          <motion.a
            href={liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 hover:underline'
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo <ArrowUpRight size={16} />
          </motion.a>
          <motion.a
            href={sourceLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 hover:underline'
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Source Code <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </div>

      <motion.div
        className='flex flex-col gap-4 md:pl-12 md:border-l md:border-black'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <h3 className='text-3xl'>{title}</h3>
        <p className='text-base text-neutral-700 leading-relaxed'>
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Project = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id='projects'
      className='py-16'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className='mb-16 relative md:w-[450px] md:mx-auto'>
        <div className='h-px w-50 bg-black mb-2'></div>
        <motion.h2
          className='text-5xl md:text-6xl font-light '
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Got any project?
        </motion.h2>
        <motion.p
          className='absolute right-0 text-sm font-light uppercase tracking-widest'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Yes!
        </motion.p>
      </motion.div>

      <div className='flex flex-col gap-16'>
        <ProjectItem
          title='MyPabahay'
          description='Our capstone project which is an inventory system management. The tech stack that was used in this project is a MERN stack and shadCN for UI.'
          imgSrc={MyPabahayImg}
          liveLink='https://mypabahay.vercel.app/'
          sourceLink='https://github.com/Rexx012/Eco_caps'
        />

        <motion.div
          className='border-b border-black w-full'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        ></motion.div>

        <ProjectItem
          title='Quiz Game'
          description='Just a simple quiz game to practice react props, maps, conditional rendering, and hooks(useState).'
          imgSrc={QuizGameImg}
          liveLink='https://simple-quiz-game-teal.vercel.app/'
          sourceLink='https://github.com/Rexx012/SimpleQuizGame'
        />
      </div>
    </motion.section>
  );
};

export default Project;
